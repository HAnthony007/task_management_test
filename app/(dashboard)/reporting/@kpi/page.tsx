"use client";

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { kpiChartConfig } from "@/features/reporting/data/kpi-data";
import { useKpiQuery } from "@/features/reporting/hooks/use-kpi";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export default function KpiPage() {
    const { data: chartData, isLoading, isError, error } = useKpiQuery();
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-5xl">
                <div className="mb-4">
                    <h1 className="font-medium flex justify-center">
                        KPI Centre opérationnelle
                    </h1>
                </div>
                <ChartContainer config={kpiChartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{ left: 12, right: 12 }}
                    >
                        {isLoading && (
                            <text x={0} y={0} className="text-muted-foreground">
                                Chargement…
                            </text>
                        )}
                        {isError && (
                            <text x={0} y={0} className="text-destructive">
                                {String(error)}
                            </text>
                        )}
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
