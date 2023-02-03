import { ICreature } from "./creature";
import { IDataModel } from "./dataModel";

export interface IUserMatchup extends IDataModel {
    user: string;
    round: number;
    rank: number;
    winnerId: number | null;
    creature1Id: number | null;
    creature2Id: number | null;
    bracketId: number;
    creature1: ICreature;
    creature2: ICreature;
    winner: ICreature;
}