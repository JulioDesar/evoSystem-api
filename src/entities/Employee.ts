import { Departament } from './Departament';
import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("funcionario")
export class Employee {

    @PrimaryColumn()
    id_funcionario: string;

    @Column()
    nome: string;

    @Column()
    img: string;

    @Column()
    rg: string;

    @Column()
    id_departamento: string;

    @ManyToOne(() => Departament)
    @JoinColumn({name: "id_departamento"})
    departament: Departament

   /* @CreateDateColumn()
    created_at: Date;*/

    constructor() {
        if(!this.id_funcionario) {
            this.id_funcionario = uuid();
        }
    }
}