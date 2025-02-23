import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Delegation {
    constructor(props?: Partial<Delegation>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bytea", {nullable: false})
    delegator!: Uint8Array

    @Column_("text", {nullable: false})
    space!: string

    @Column_("bytea", {nullable: false})
    delegate!: Uint8Array

    @Column_("int4", {nullable: false})
    timestamp!: number
}
