import { Departament_service } from './../services/Departament_service';
import { Request, Response } from "express";


export class Departament_controller {
    async handle(request: Request, response: Response) {
        const { Name, acronym } = request.body;

        const service = new Departament_service();

        const result = service.execute({ Name, acronym });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}