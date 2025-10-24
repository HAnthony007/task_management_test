"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

// Données d'exemple: Janvier à Décembre, valeurs normalisées (0-20)
const chartData = [
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

// Configuration des 3 séries avec les couleurs demandées
const chartConfig = {
    nombreTache: {
        label: "Nombre de tache",
        color: "#9e91ff",
    },
    kpi: {
        label: "Kpi",
        color: "#ffb7b1",
    },
    retard: {
        label: "Retard",
        color: "#48c7e1",
    },
} satisfies ChartConfig;

export default function KpiPage() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-5xl">
                <div className="mb-4">
                    <h1 className="font-medium flex justify-center">
                        KPI Centre opérationnelle
                    </h1>
                </div>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{ left: 12, right: 12 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="mois"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) =>
                                typeof value === "string"
                                    ? value.slice(0, 3)
                                    : value
                            }
                        />
                        <YAxis
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            allowDecimals={false}
                            domain={[0, 20]}
                            ticks={[0, 5, 10, 15, 20]}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        {/* Nombre de tache */}
                        <Line
                            dataKey="nombreTache"
                            type="natural"
                            stroke="var(--color-nombreTache)"
                            strokeWidth={2}
                            dot={{ fill: "var(--color-nombreTache)" }}
                            activeDot={{ r: 6 }}
                        />

                        {/* KPI */}
                        <Line
                            dataKey="kpi"
                            type="natural"
                            stroke="var(--color-kpi)"
                            strokeWidth={2}
                            dot={{ fill: "var(--color-kpi)" }}
                            activeDot={{ r: 6 }}
                        />

                        {/* Retard */}
                        <Line
                            dataKey="retard"
                            type="natural"
                            stroke="var(--color-retard)"
                            strokeWidth={2}
                            dot={{ fill: "var(--color-retard)" }}
                            activeDot={{ r: 6 }}
                        />

                        {/* Légende en bas */}
                        <ChartLegend
                            verticalAlign="bottom"
                            content={<ChartLegendContent />}
                        />
                    </LineChart>
                </ChartContainer>
            </div>
        </div>
    );
}
