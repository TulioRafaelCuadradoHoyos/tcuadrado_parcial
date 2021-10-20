import { Request, Response } from "express";
import { Mantenimiento } from "../models/Mantenimiento"; 

export class MantenimientoController{

    public index (req: Request, res: Response){
        Mantenimiento.findAll({})
        .then((mantenimiento: Array<Mantenimiento>) => res.json(mantenimiento))
        .catch((err:Error) => res.status(500).json(err));
        

    }

    public mostrarmantenimiento(){
        
    }
}