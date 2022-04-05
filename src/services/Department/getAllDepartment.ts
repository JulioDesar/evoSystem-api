import { myDataSource } from "../../../app-data-source";
import { Departament } from "../../entities/Departament";

export class getAllDepartment {
    async execute() {
        const repo = myDataSource.getRepository(Departament);
        var departments = repo.find();
        
        return departments;
    }

}