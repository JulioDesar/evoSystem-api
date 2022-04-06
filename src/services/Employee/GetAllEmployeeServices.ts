import { Employee } from './../../entities/Employee';
import { myDataSource } from "../../../app-data-source";

export class GetAllEmployeeServices {
    async execute() {
        const repo = myDataSource.getRepository(Employee);
        var employee = repo.find({
            relations: ['departament']
        });
        
        return employee;
    }

}