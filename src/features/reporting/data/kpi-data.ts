import type { ChartConfig } from "@/components/ui/chart";
import type { KpiPoint } from "@/features/reporting/schemas/kpi-schema";
import { KpiArraySchema } from "@/features/reporting/schemas/kpi-schema";

export const kpiData: KpiPoint[] = [
    { mois: "Janvier", nombreTache: 12, kpi: 8, retard: 4 },
    { mois: "Février", nombreTache: 14, kpi: 9, retard: 5 },
    { mois: "Mars", nombreTache: 13, kpi: 10, retard: 6 },
    { mois: "Avril", nombreTache: 15, kpi: 11, retard: 7 },
    { mois: "Mai", nombreTache: 16, kpi: 12, retard: 8 },
    { mois: "Juin", nombreTache: 17, kpi: 13, retard: 9 },
    { mois: "Juillet", nombreTache: 18, kpi: 12, retard: 10 },
    { mois: "Août", nombreTache: 16, kpi: 11, retard: 8 },
    { mois: "Septembre", nombreTache: 15, kpi: 10, retard: 7 },
    { mois: "Octobre", nombreTache: 14, kpi: 9, retard: 6 },
    { mois: "Novembre", nombreTache: 13, kpi: 10, retard: 5 },
    { mois: "Décembre", nombreTache: 12, kpi: 11, retard: 4 },
];

export const kpiChartConfig = {
    nombreTache: { label: "Nombre de tache", color: "#9e91ff" },
    kpi: { label: "Kpi", color: "#ffb7b1" },
    retard: { label: "Retard", color: "#48c7e1" },
} satisfies ChartConfig;

export async function fetchKpiData(): Promise<KpiPoint[]> {
    return KpiArraySchema.parse(kpiData);
}
