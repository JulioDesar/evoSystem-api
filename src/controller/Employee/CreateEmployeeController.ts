import { CreateEmployeeService } from './../../services/Employee/CreateEmployeeService';

import { Request, Response } from "express";


export class CreateEmployeeController {
    async handle(request: Request, response: Response) {
        const {nome, img, rg, id_departamento} = request.body;
        const service = new CreateEmployeeService();
        const result = await service.execute({
            nome,
            img,
            rg,
            id_departamento
        });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}