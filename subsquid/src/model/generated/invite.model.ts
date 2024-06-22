import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"
import {Group} from "./group.model"
import {Role} from "./_role"

@Index_(["invitee", "group"], {unique: true})
@Entity_()
export class Invite {
    constructor(props?: Partial<Invite>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Group, {nullable: true})
    group!: Group

    @StringColumn_({nullable: false})
    invitee!: string

    @Column_("varchar", {length: 7, nullable: false})
    role!: Role
}
