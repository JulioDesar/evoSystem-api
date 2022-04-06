import { DeleteEmplyeeService } from './../../services/Employee/DeleteEmplyeeService';
import { Request, Response } from "express";

export class DeleteEmployeeController {
    async handle(request: Request, response: Response) {
        const { id_funcionario } = request.params;

        const service = new DeleteEmplyeeService();

        const result = await service.execute({ id_funcionario });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}