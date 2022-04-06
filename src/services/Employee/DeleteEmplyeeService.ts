import { myDataSource } from "../../../app-data-source";
import { Employee } from "../../entities/Employee";

type EmployeeRequest = {
    id_funcionario: string
}

export class DeleteEmplyeeService {
    async execute({ id_funcionario }: EmployeeRequest) {
        const repo = myDataSource.getRepository(Employee);
        
        if(!await repo.findOneBy( { id_funcionario } )) {
            return new Error("Funcionario não existe");
        }
        
        await repo.delete({id_funcionario});
    }
}