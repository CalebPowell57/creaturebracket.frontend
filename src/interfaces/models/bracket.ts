import { IMatchup } from "./matchup";
import { IUserMatchup } from "./userMatchup";
import { ICreature } from "./creature";
import { ICreatureSubmission } from "./creatureSubmission";
import { IDataModel } from "./dataModel";
import { PHASE } from "../../constants/phase";

export interface IBracket extends IDataModel {
    name: string;
    round: number;
    creatureCount: number;
    phase: PHASE;
    matchups: IMatchup[];
    userMatchups: IUserMatchup[];
    creatures: ICreature[];
    creatureSubmissions: ICreatureSubmission[];
}