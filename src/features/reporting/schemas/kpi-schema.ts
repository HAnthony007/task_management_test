import { z } from "zod";

export const KpiPointSchema = z.object({
    mois: z.string(),
    nombreTache: z.number(),
    kpi: z.number(),
    retard: z.number(),
});

export const KpiArraySchema = z.array(KpiPointSchema);

export type KpiPoint = z.infer<typeof KpiPointSchema>;
