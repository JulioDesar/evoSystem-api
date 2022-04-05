import { DeleteDepartmentService } from './../../services/Department/DeleteDepartmentService';
import { Request, Response } from "express";


export class DeleteDepartmentController {
    async handle(request: Request, response: Response) {
        const { id_departamento } = request.params;

        const service = new DeleteDepartmentService();

        const result = await service.execute({ id_departamento });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}