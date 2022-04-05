import { UpdateDepartmentController } from './controller/Department/UpdateDepartmentController';
import { DeleteDepartmentController } from './controller/Department/DeleteDepartmentController';
import { getAllDepartmentsControler } from './controller/Department/getAllDepartmentsController';
import { Departament_controller } from './controller/Department/Departament_controller';
import express from "express";
import { myDataSource } from "../app-data-source"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const routes = express()
routes.use(express.json())

routes.get("/Departments/", new getAllDepartmentsControler().handle);
routes.post("/Departments/", new Departament_controller().handle);
routes.put("/Departments/:id_departamento", new UpdateDepartmentController().handle);
routes.delete("/Departments/:id_departamento", new DeleteDepartmentController().handle);

export {routes};