import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("departamento")
export class Departament {

    @PrimaryColumn("uuid")
    id_departamento: string;

    @Column()
    nome: string;

    @Column()
    sigla: string;

    /*@CreateDateColumn()
    created_at: Date;*/

    constructor() {
        if(!this.id_departamento) {
            this.id_departamento = uuid();
        }
    }
}