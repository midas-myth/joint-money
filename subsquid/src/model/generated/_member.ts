import assert from "assert"
import * as marshal from "./marshal"

export class Member {
    private _address!: string
    private _dailyAllowance!: bigint
    private _dailySpent!: bigint
    private _lastSpentAt!: bigint

    constructor(props?: Partial<Omit<Member, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._address = marshal.id.fromJSON(json.address)
            this._dailyAllowance = marshal.bigint.fromJSON(json.dailyAllowance)
            this._dailySpent = marshal.bigint.fromJSON(json.dailySpent)
            this._lastSpentAt = marshal.bigint.fromJSON(json.lastSpentAt)
        }
    }

    get address(): string {
        assert(this._address != null, 'uninitialized access')
        return this._address
    }

    set address(value: string) {
        this._address = value
    }

    get dailyAllowance(): bigint {
        assert(this._dailyAllowance != null, 'uninitialized access')
        return this._dailyAllowance
    }

    set dailyAllowance(value: bigint) {
        this._dailyAllowance = value
    }

    get dailySpent(): bigint {
        assert(this._dailySpent != null, 'uninitialized access')
        return this._dailySpent
    }

    set dailySpent(value: bigint) {
        this._dailySpent = value
    }

    get lastSpentAt(): bigint {
        assert(this._lastSpentAt != null, 'uninitialized access')
        return this._lastSpentAt
    }

    set lastSpentAt(value: bigint) {
        this._lastSpentAt = value
    }

    toJSON(): object {
        return {
            address: this.address,
            dailyAllowance: marshal.bigint.toJSON(this.dailyAllowance),
            dailySpent: marshal.bigint.toJSON(this.dailySpent),
            lastSpentAt: marshal.bigint.toJSON(this.lastSpentAt),
        }
    }
}
