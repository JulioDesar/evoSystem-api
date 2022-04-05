import { UpdateDepartmentService } from './../../services/Department/UpdateDepartmentService';
import {
    Request,
    Response
} from "express";

export class UpdateDepartmentController {
    async handle(request: Request, response: Response) {
        const {id_departamento} = request.params;
        const {nome, sigla} = request.body;

        const service = new UpdateDepartmentService();
        const result = await service.execute({id_departamento, nome, sigla});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}