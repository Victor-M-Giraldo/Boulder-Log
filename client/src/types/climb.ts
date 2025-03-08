import { Note } from "./note";

export type GradeOptions = "V0" | "V1" | "V2" | "V3" | "V4" | "V5" | "V6" | "V7" | "V8" | "V9" | "V10" | "V11" | "V12";

export interface Climb {
    id: number;
    grade: GradeOptions;
    location: string;
    createdAt: string;
    completed: boolean;
    notes: Note[];
    imageUrl: string;
}
