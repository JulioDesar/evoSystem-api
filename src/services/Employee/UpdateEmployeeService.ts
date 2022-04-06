import { myDataSource } from "../../../app-data-source";
import { Departament } from "../../entities/Departament";
import { Employee } from "../../entities/Employee";

type EmployeeUpdateRequest = {
    id_funcionario: string;
    nome: string;
    img: string;
    id_departamento: string;
}

export class UpdateEmployeeService {
    async execute({id_funcionario, nome, img, id_departamento}:EmployeeUpdateRequest) {
        const repo = myDataSource.getRepository(Employee);
        const department = myDataSource.getRepository(Departament);
        
        const emp = await repo.findOneBy( { id_funcionario });

        if(!emp) {
            return new Error("Funcionario não existe não existe");
        }
        emp.nome = nome ? nome : emp.nome;
        emp.img = img ? img : emp.img;

        if(!await department.findOneBy({ id_departamento })) {
            return new Error("Department does not exists");
        }  

        emp.id_departamento = id_departamento ? id_departamento : emp.id_departamento;

        await repo.save(emp);

        return emp;
    }
}