import { z } from "zod";

export const StatusEnum = z.enum([
    "en_cours",
    "reportee",
    "planifiee",
    "terminee",
    "risque",
]);

export const TaskDatumSchema = z.object({
    status: StatusEnum,
    value: z.number().nonnegative(),
});

export const TaskArraySchema = z.array(TaskDatumSchema);

export type TaskDatum = z.infer<typeof TaskDatumSchema>;
