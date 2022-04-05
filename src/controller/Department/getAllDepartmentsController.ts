import { getAllDepartment } from './../../services/Department/getAllDepartment';
import { Request, Response } from "express";

export class getAllDepartmentsControler{
    async handle(request: Request, response: Response) {
        
        const service = new getAllDepartment();
        const departments = await service.execute();
        return response.setHeader('Content-Type', 'application/json').json(departments);
    }
}