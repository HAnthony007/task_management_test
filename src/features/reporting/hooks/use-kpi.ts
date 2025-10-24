"use client";

import {
    fetchKpiData,
    type KpiPoint,
} from "@/features/reporting/data/kpi-data";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export type UseKpiResult = {
    data: KpiPoint[];
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
};

export function useKpiQuery(
    options?: Pick<
        UseQueryOptions<KpiPoint[], unknown, KpiPoint[], (string | number)[]>,
        "enabled" | "staleTime" | "gcTime"
    >
): UseKpiResult {
    const query = useQuery({
        queryKey: ["reporting", "kpi"],
        queryFn: fetchKpiData,
        staleTime: options?.staleTime,
        gcTime: options?.gcTime,
        enabled: options?.enabled,
    });

    return {
        data: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
    };
}
