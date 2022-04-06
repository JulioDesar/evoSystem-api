import { myDataSource } from "../../../app-data-source"
import { Departament } from '../../entities/Departament';
import { Employee } from "../../entities/Employee";
// import { Image } from 'image-js';

type EmployeeRequest = {
    nome: string;
    img: string;
    rg: string;
    id_departamento: string;
}

export class CreateEmployeeService {

    async execute({ nome, img,  rg, id_departamento}: EmployeeRequest): Promise<Employee | Error> {
        const repo = myDataSource.getRepository(Employee);
        const department = myDataSource.getRepository(Departament);

        if(!await department.findOneBy({ id_departamento })) {
            return new Error("Department does not exists");
        }  

        if(await repo.findOneBy({rg})) {
            return new Error("rg alredy exists");
        }

        // let image = await Image.load(img);
        // let imageResize = image.resize({ width: 200 })
        // imageResize.save(img);


        const employee = repo.create({
            nome,
            img,
            rg,
            id_departamento
        });

        await repo.save(employee);

        return employee;
    }

}