module.exports = class Data1718142714231 {
    name = 'Data1718142714231'

    async up(db) {
        await db.query(`CREATE TABLE "membership" ("id" character varying NOT NULL, "address" text NOT NULL, "daily_allowance" numeric NOT NULL, "daily_spent" numeric NOT NULL, "last_spent_at" numeric NOT NULL, "group_id" character varying, CONSTRAINT "PK_83c1afebef3059472e7c37e8de8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7360328991eed9936900e1499e" ON "membership" ("address") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_ecbb969dd93cb8d30bbca76b6e" ON "membership" ("group_id", "address") `)
        await db.query(`CREATE TABLE "invite" ("id" character varying NOT NULL, "invitee" text NOT NULL, "group_id" character varying, CONSTRAINT "PK_fc9fa190e5a3c5d80604a4f63e1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6dd02f1ded1cc799c9371c0d07" ON "invite" ("group_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_9dc784e237da5d1e847c6e40a7" ON "invite" ("invitee", "group_id") `)
        await db.query(`CREATE TABLE "group" ("id" character varying NOT NULL, "admin" text NOT NULL, "token_amounts" jsonb NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "membership" ADD CONSTRAINT "FK_d7b446f7f7f75e661fce14a25f0" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "invite" ADD CONSTRAINT "FK_6dd02f1ded1cc799c9371c0d073" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "membership"`)
        await db.query(`DROP INDEX "public"."IDX_7360328991eed9936900e1499e"`)
        await db.query(`DROP INDEX "public"."IDX_ecbb969dd93cb8d30bbca76b6e"`)
        await db.query(`DROP TABLE "invite"`)
        await db.query(`DROP INDEX "public"."IDX_6dd02f1ded1cc799c9371c0d07"`)
        await db.query(`DROP INDEX "public"."IDX_9dc784e237da5d1e847c6e40a7"`)
        await db.query(`DROP TABLE "group"`)
        await db.query(`ALTER TABLE "membership" DROP CONSTRAINT "FK_d7b446f7f7f75e661fce14a25f0"`)
        await db.query(`ALTER TABLE "invite" DROP CONSTRAINT "FK_6dd02f1ded1cc799c9371c0d073"`)
    }
}
