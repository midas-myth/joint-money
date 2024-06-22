import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {Role} from "./_role"
import {Group} from "./group.model"

@Index_(["group", "address"], {unique: true})
@Entity_()
export class Membership {
    constructor(props?: Partial<Membership>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 7, nullable: false})
    role!: Role

    @ManyToOne_(() => Group, {nullable: true})
    group!: Group

    @Index_()
    @StringColumn_({nullable: false})
    address!: string

    @BigIntColumn_({nullable: false})
    dailyAllowance!: bigint

    @BigIntColumn_({nullable: false})
    dailySpent!: bigint

    @BigIntColumn_({nullable: false})
    lastSpentAt!: bigint
}
