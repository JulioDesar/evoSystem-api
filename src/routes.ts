import { Departament_controller } from './controller/Departament_controller';
import { Router } from "express";

const routes = Router();

routes.post("/Departments", new Departament_controller().handle);

export {routes}