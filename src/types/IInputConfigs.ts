import {IFormConfig} from "../config";

export interface IInputConfigs extends IFormConfig{
    value: string;
    validationError: string;
}