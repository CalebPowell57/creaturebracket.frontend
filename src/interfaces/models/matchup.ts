import { ICreature } from "./creature";
import { IDataModel } from "./dataModel";

export interface IMatchup extends IDataModel {
    round: number;
    rank: number;
    winnerId: number | null;
    creature1Id: number | undefined;
    creature2Id: number | undefined;
    bracketId: number;
    creature1: ICreature;
    creature2: ICreature;
    winner: ICreature;
}