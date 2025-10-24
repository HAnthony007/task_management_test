"use client";

import { fetchTaskData } from "@/features/reporting/data/task-data";
import type { TaskDatum } from "@/features/reporting/schemas/task-schema";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";

export type UseTasksResult = {
    data: Array<TaskDatum & { fill: string }>;
    total: number;
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
};

export function useTasksQuery(
    options?: Pick<
        UseQueryOptions<TaskDatum[], unknown, TaskDatum[], (string | number)[]>,
        "enabled" | "staleTime" | "gcTime"
    >
): UseTasksResult {
    const query = useQuery({
        queryKey: ["reporting", "tasks"],
        queryFn: fetchTaskData,
        staleTime: options?.staleTime,
        gcTime: options?.gcTime,
        enabled: options?.enabled,
    });

    const derived = useMemo(() => {
        const items = (query.data ?? []).map((d) => ({
            ...d,
            fill: `var(--color-${d.status})`,
        }));
        const total = items.reduce((acc, d) => acc + d.value, 0);
        return { items, total };
    }, [query.data]);

    return {
        data: derived.items,
        total: derived.total,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
    };
}
