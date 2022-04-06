import { GetAllEmployeeServices } from './../../services/Employee/GetAllEmployeeServices';
import { getAllDepartment } from './../../services/Department/getAllDepartment';
import { Request, Response } from "express";

export class getAllEmployeeController{
    async handle(request: Request, response: Response) {
        
        const service = new GetAllEmployeeServices();
        const employee = await service.execute();
        return response.json(employee);
    }
}