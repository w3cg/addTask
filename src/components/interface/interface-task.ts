import { FieldValues } from "react-hook-form";

export interface Task extends FieldValues{
    id?: string;
    text: string;
    completed: boolean;
}

export interface Props{
    body: Task
}
