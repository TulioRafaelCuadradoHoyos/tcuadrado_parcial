import { Request,Response, Application } from "express";
import { EquiposController } from "../controllers/equipos.controller"; 

export class EquiposRoutes{
    public equiposcontroller:  EquiposController = new EquiposController();

    public routes (app: Application): void{
        // app.route('/mantenimiento').get(this.usercontroller.index;)
             app.route('/equipos').get(this.equiposcontroller.index);

    }
    
}