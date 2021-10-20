import { Request,Response} from "express";
import { Equipos } from "../models/Equipos";

export class EquiposController{
    public index (req: Request, res: Response){
        Equipos.findAll({})
        .then((equipos: Array <Equipos>) => res.json(equipos))
        .catch ((err:Error) => res.status(500).json(err));
    }

    public mostrarequipos(){
        
    }
}