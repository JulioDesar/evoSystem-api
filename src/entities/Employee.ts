import { Departament } from './Departament';
import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("Employee")
export class Employee {

    @PrimaryColumn()
    id_employee: string;

    @Column()
    Name: string;

    @Column()
    img: string;

    @Column()
    rg: string;

    @Column()
    id_departament: string;

    @ManyToOne(() => Departament)
    @JoinColumn({name: "id_departament"})
    departament: Departament

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id_employee) {
            this.id_employee = uuid();
        }
    }
}