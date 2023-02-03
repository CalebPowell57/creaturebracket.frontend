import { IDataModel } from "./dataModel";

export interface ICreatureSubmissionVote extends IDataModel {
    creatureSubmissionId: number;
    user: string;
}