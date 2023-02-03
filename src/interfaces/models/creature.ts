import { IDataModel } from "./dataModel";

export interface ICreature extends IDataModel {
    name: string;
    image: string;
    bracketId: number;
}