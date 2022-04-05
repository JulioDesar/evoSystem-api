import { Departament_service } from '../../services/Department/Departament_service';
import { Request, Response } from "express";


export class Departament_controller {
    async handle(request: Request, response: Response) {
        const { nome, sigla } = request.body;

        const service = new Departament_service();

        const result = await service.execute({ nome, sigla });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}