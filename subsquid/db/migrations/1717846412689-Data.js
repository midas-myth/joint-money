module.exports = class Data1717846412689 {
    name = 'Data1717846412689'

    async up(db) {
        await db.query(`CREATE TABLE "group" ("id" character varying NOT NULL, "admin" text NOT NULL, "members" jsonb NOT NULL, "token_amounts" jsonb NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "invite" ("id" character varying NOT NULL, "invitee" text NOT NULL, "group_id" text NOT NULL, CONSTRAINT "PK_fc9fa190e5a3c5d80604a4f63e1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6dd02f1ded1cc799c9371c0d07" ON "invite" ("group_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_9dc784e237da5d1e847c6e40a7" ON "invite" ("invitee", "group_id") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "group"`)
        await db.query(`DROP TABLE "invite"`)
        await db.query(`DROP INDEX "public"."IDX_6dd02f1ded1cc799c9371c0d07"`)
        await db.query(`DROP INDEX "public"."IDX_9dc784e237da5d1e847c6e40a7"`)
    }
}
