import { myDataSource } from "../../../app-data-source";
import { Departament } from "../../entities/Departament";

type DepartamentUpdateRequest = {
    id_departamento: string
    nome: string;
    sigla: string;
}

export class UpdateDepartmentService {
    async execute({id_departamento, nome, sigla}:DepartamentUpdateRequest) {
        const repo = myDataSource.getRepository(Departament);
        
        const dp = await repo.findOneBy( { id_departamento });

        if(!dp) {
            return new Error("Departamento não existe");
        }
        dp.nome = nome ? nome : dp.nome;
        dp.sigla = sigla ? sigla : dp.sigla;

        await repo.save(dp);

        return dp;
    }
}