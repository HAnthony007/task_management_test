"use client";
import { Cell, Label, Pie, PieChart } from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig } from "@/features/reporting/data/task-data";
import { useTasksQuery } from "@/features/reporting/hooks/use-tasks";

export default function TaskPage() {
    const { data, total, isLoading, isError, error } = useTasksQuery();

    return (
        <div>
            <h1 className="font-medium justify-center flex">
                Status des taches
            </h1>
            <div className="w-full h-full flex items-center justify-center">
                {isLoading && (
                    <div className="text-sm text-muted-foreground">
                        Chargement…
                    </div>
                )}
                {isError && (
                    <div className="text-sm text-destructive">
                        {String(error)}
                    </div>
                )}
                <div className="flex items-center gap-8">
                    {/* Donut chart */}
                    <div className="relative aspect-square w-[280px] sm:w-[320px] md:w-[360px] shrink-0">
                        <ChartContainer
                            config={chartConfig}
                            className="w-full h-full"
                        >
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="status"
                                    innerRadius={70}
                                    outerRadius={100}
                                    strokeWidth={2}
                                    isAnimationActive
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.fill}
                                        />
                                    ))}
                                    <Label
                                        content={({ viewBox }) => {
                                            if (
                                                viewBox &&
                                                typeof viewBox === "object" &&
                                                "cx" in viewBox &&
                                                "cy" in viewBox
                                            ) {
                                                const { cx, cy } = viewBox as {
                                                    cx: number;
                                                    cy: number;
                                                };
                                                return (
                                                    <text
                                                        x={cx}
                                                        y={cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={cx}
                                                            y={cy}
                                                            className="fill-foreground text-3xl font-bold"
                                                        >
                                                            {total}
                                                        </tspan>
                                                        <tspan
                                                            x={cx}
                                                            y={cy + 20}
                                                            className="fill-muted-foreground text-xs"
                                                        >
                                                            Tâches
                                                        </tspan>
                                                    </text>
                                                );
                                            }
                                            return null;
                                        }}
                                    />
                                </Pie>
                                <ChartTooltip
                                    cursor={false}
                                    content={
                                        <ChartTooltipContent
                                            nameKey="status"
                                            labelKey="status"
                                        />
                                    }
                                />
                            </PieChart>
                        </ChartContainer>
                    </div>

                    {/* Legend on the right */}
                    <div className="min-w-[200px]">
                        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                            Légende
                        </h3>
                        <ul className="space-y-2">
                            {data.map((d) => (
                                <li
                                    key={d.status}
                                    className="flex items-center justify-between gap-3"
                                >
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="h-3 w-3 rounded-[2px]"
                                            style={{
                                                backgroundColor:
                                                    chartConfig[d.status].color,
                                            }}
                                        />
                                        <span className="text-sm">
                                            {chartConfig[d.status].label}
                                        </span>
                                    </div>
                                    <span className="font-mono text-sm tabular-nums">
                                        {d.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
