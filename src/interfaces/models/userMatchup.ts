import { ICreature } from "./creature";
import { IDataModel } from "./dataModel";

export interface IUserMatchup extends IDataModel {
    user: string;
    round: number;
    rank: number;
    winnerId: number | undefined | null;
    creature1Id: number | undefined | null;
    creature2Id: number | undefined | null;
    bracketId: number;
    creature1: ICreature | undefined | null;
    creature2: ICreature | undefined | null;
    winner: ICreature | undefined | null;
}