import {Model, DataTypes} from 'sequelize';
const Sequelize = require ('sequelize');
import { database} from '../database/db';

export class Equipos extends Model {

    public marca!: string;
    public modelo!: string;
}

Equipos.init (

    {
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        
    },

    modelo: {
        type: DataTypes.STRING,
        allowNull:false
    
    }

},
{

    tableName: "Equipos",
    sequelize: database,
    timestamps: true
}

);