import type { ChartConfig } from "@/components/ui/chart";

export const chartConfig: ChartConfig = {
    en_cours: { label: "En cours", color: "#3cc3df" },
    reportee: { label: "Reportée", color: "#ffae4c" },
    planifiee: { label: "Planifiée", color: "#b0b0b0" },
    terminee: { label: "Terminée", color: "#4bf230" },
    risque: { label: "À risque", color: "#f15353" },
};

export type StatusKey =
    | "en_cours"
    | "reportee"
    | "planifiee"
    | "terminee"
    | "risque";

export type TaskDatum = { status: StatusKey; value: number };

export const taskData: TaskDatum[] = [
    { status: "en_cours", value: 42 },
    { status: "reportee", value: 26 },
    { status: "planifiee", value: 18 },
    { status: "terminee", value: 10 },
    { status: "risque", value: 4 },
];

export async function fetchTaskData(): Promise<TaskDatum[]> {
    return Promise.resolve(taskData);
}
