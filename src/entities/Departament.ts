import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("Departaments")
export class Departament {

    @PrimaryColumn("id_departament")
    id: string;

    @Column("Name")
    name: string;

    @Column("acronym")
    acronym: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}