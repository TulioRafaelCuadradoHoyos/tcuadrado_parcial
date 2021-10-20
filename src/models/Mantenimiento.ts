import { Model, DataTypes } from 'sequelize';
const Sequelize = require (' sequelize');
import { database } from '../database/db';

export class Mantenimiento extends Model {
    public fecha!: Date;
    public descripcion!: string;
    public resultado!: boolean;
}

Mantenimiento.init (

    {
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },

        descripcion:{
            type: DataTypes.STRING,
            allowNull: false
        },

        resultado:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    },

    {
        tableName: "Mantenimiento",
        sequelize: database,
        timestamps: true
    }
);
