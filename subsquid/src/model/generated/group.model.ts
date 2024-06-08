import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {TokenAmount} from "./_tokenAmount"
import {Membership} from "./membership.model"
import {Invite} from "./invite.model"

@Entity_()
export class Group {
    constructor(props?: Partial<Group>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    admin!: string

    @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenAmount(undefined, marshal.nonNull(val)))}, nullable: false})
    tokenAmounts!: (TokenAmount)[]

    @OneToMany_(() => Membership, e => e.group)
    members!: Membership[]

    @OneToMany_(() => Invite, e => e.group)
    invites!: Invite[]
}
