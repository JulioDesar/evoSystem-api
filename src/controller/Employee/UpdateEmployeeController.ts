import { UpdateEmployeeService } from './../../services/Employee/UpdateEmployeeService';
import {
    Request,
    Response
} from "express";

export class UpdateEmployeeController {
    async handle(request: Request, response: Response) {
        const {id_funcionario} = request.params;
        const {nome, img, id_departamento} = request.body;

        const service = new UpdateEmployeeService();
        const result = await service.execute({id_funcionario, nome, img, id_departamento});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}