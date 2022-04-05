import { myDataSource } from "../../../app-data-source";
import { Departament } from "../../entities/Departament";

type DepartamentRequest = {
    id_departamento: string
}

export class DeleteDepartmentService {
    async execute({ id_departamento }: DepartamentRequest) {
        const repo = myDataSource.getRepository(Departament);
        
        if(!await repo.findOneBy( { id_departamento } )) {
            return new Error("Departamento não existe");
        }
        
        await repo.delete({id_departamento});
    }
}