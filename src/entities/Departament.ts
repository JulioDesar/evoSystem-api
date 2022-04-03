import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("Departaments")
export class Departament {

    @PrimaryColumn()
    id_departament: string;

    @Column()
    Name: string;

    @Column()
    acronym: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id_departament) {
            this.id_departament = uuid();
        }
    }
}