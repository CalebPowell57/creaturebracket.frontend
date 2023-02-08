import React, { ReactNode } from "react";
import { IOption } from "./option";

export interface INavigationItem extends IOption {
    path: string;
    node: ReactNode;
    hasNavigation?: boolean;
}