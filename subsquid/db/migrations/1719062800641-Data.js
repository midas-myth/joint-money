module.exports = class Data1719062800641 {
    name = 'Data1719062800641'

    async up(db) {
        await db.query(`ALTER TABLE "membership" ADD "role" character varying(7) NOT NULL`)
        await db.query(`ALTER TABLE "invite" ADD "role" character varying(7) NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "membership" DROP COLUMN "role"`)
        await db.query(`ALTER TABLE "invite" DROP COLUMN "role"`)
    }
}
