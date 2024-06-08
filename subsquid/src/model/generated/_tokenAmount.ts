import assert from "assert"
import * as marshal from "./marshal"

export class TokenAmount {
    private _tokenAddress!: string
    private _amount!: bigint

    constructor(props?: Partial<Omit<TokenAmount, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tokenAddress = marshal.id.fromJSON(json.tokenAddress)
            this._amount = marshal.bigint.fromJSON(json.amount)
        }
    }

    get tokenAddress(): string {
        assert(this._tokenAddress != null, 'uninitialized access')
        return this._tokenAddress
    }

    set tokenAddress(value: string) {
        this._tokenAddress = value
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    toJSON(): object {
        return {
            tokenAddress: this.tokenAddress,
            amount: marshal.bigint.toJSON(this.amount),
        }
    }
}
