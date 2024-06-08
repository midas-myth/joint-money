import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Member} from "./_member"
import {TokenAmount} from "./_tokenAmount"

@Entity_()
export class Group {
    constructor(props?: Partial<Group>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    admin!: string

    @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new Member(undefined, marshal.nonNull(val)))}, nullable: false})
    members!: (Member)[]

    @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new TokenAmount(undefined, marshal.nonNull(val)))}, nullable: false})
    tokenAmounts!: (TokenAmount)[]
}
