import { getRepository } from 'typeorm';
import { Departament } from '../entities/Departament';

type DepartamentRequest = {
    name: string;
    acronym: string;
}

export class Departament_service {

    async execute({ name, acronym }: DepartamentRequest): Promise<Departament | Error> {
        const repo = getRepository(Departament);

        if(await repo.findOneBy({ name })) {
            return new Error("Departamento já existe");
        }

        const departament = repo.create({
            name,
            acronym
        });

        await repo.save(departament);

        return departament;
    }

}