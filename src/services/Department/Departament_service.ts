import { myDataSource } from "../../../app-data-source"
import { Departament } from '../../entities/Departament';

type DepartamentRequest = {
    nome: string;
    sigla: string;
}

export class Departament_service {

    async execute({ nome, sigla }: DepartamentRequest): Promise<Departament | Error> {
        const repo = myDataSource.getRepository(Departament);

        //SELECT * FROM Departaments WHERE nome = "nome"
        if(await repo.findOneBy({ nome })) {
            return new Error("alredy exists");
        }

        const departament = repo.create({
            nome,
            sigla
        });

        await repo.save(departament);

        return departament;
    }

}