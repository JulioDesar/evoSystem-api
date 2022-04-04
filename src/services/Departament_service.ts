import { getRepository } from 'typeorm';
import { Departament } from '../entities/Departament';

type DepartamentRequest = {
    Name: string;
    acronym: string;
}

export class Departament_service {

    async execute({ Name, acronym }: DepartamentRequest): Promise<Departament | Error> {
        const repo = getRepository(Departament);

        //SELECT * FROM Departaments WHERE Name = "Name"
        if(await repo.findOne({ Name })) {
            return new Error("Departamento já existe");
        }

        const departament = repo.create({
            Name,
            acronym
        });

        await repo.save(departament);

        return departament;
    }

}