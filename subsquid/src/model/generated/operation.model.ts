import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {Group} from "./group.model"
import {OperationType} from "./_operationType"

@Index_(["group", "member"], {unique: false})
@Index_(["group", "to"], {unique: false})
@Index_(["group", "tokenAddress"], {unique: false})
@Entity_()
export class Operation {
    constructor(props?: Partial<Operation>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @ManyToOne_(() => Group, {nullable: true})
    group!: Group

    @StringColumn_({nullable: false})
    member!: string

    @Column_("varchar", {length: 10, nullable: false})
    type!: OperationType

    @StringColumn_({nullable: false})
    tokenAddress!: string

    @BigIntColumn_({nullable: false})
    amount!: bigint

    @StringColumn_({nullable: true})
    to!: string | undefined | null
}
