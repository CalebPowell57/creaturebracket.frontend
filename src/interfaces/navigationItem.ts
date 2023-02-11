import React, { ReactNode } from "react";
import { PHASE } from "../constants/phase";
import { IOption } from "./option";

export interface INavigationItem extends IOption {
    path: string;
    node: ReactNode;
    hasNavigation?: boolean;
    phasesShown?: PHASE[];
}