module.exports = class Data1719067492106 {
    name = 'Data1719067492106'

    async up(db) {
        await db.query(`CREATE TABLE "operation" ("id" character varying NOT NULL, "member" text NOT NULL, "type" character varying(10) NOT NULL, "token_address" text NOT NULL, "amount" numeric NOT NULL, "to" text, "group_id" character varying, CONSTRAINT "PK_18556ee6e49c005fc108078f3ab" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ebf8e93187f4b9c57bf22f3423" ON "operation" ("group_id", "token_address") `)
        await db.query(`CREATE INDEX "IDX_4d9b8352fda1d2f2d05f1cb223" ON "operation" ("group_id", "to") `)
        await db.query(`CREATE INDEX "IDX_7b05fe0641ec3e76a06eb6c75c" ON "operation" ("group_id", "member") `)
        await db.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_06d0f571aaac8d5b3bd773d7177" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "operation"`)
        await db.query(`DROP INDEX "public"."IDX_ebf8e93187f4b9c57bf22f3423"`)
        await db.query(`DROP INDEX "public"."IDX_4d9b8352fda1d2f2d05f1cb223"`)
        await db.query(`DROP INDEX "public"."IDX_7b05fe0641ec3e76a06eb6c75c"`)
        await db.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_06d0f571aaac8d5b3bd773d7177"`)
    }
}
