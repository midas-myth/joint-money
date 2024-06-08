import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

@Index_(["invitee", "groupId"], {unique: true})
@Entity_()
export class Invite {
    constructor(props?: Partial<Invite>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    invitee!: string

    @Index_()
    @StringColumn_({nullable: false})
    groupId!: string
}
