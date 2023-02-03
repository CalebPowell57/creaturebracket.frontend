import { IBracket } from "../models/bracket";

export interface IBracketDto extends IBracket {
    characterCount: number;
    characterId: number;
}