import { ICreatureSubmissionVote } from "./creatureSubmissionVote";
import { IDataModel } from "./dataModel";

export interface ICreatureSubmission extends IDataModel {
    name: string;
    image: string;
    bracketId: number;
    votes: ICreatureSubmissionVote[];
}