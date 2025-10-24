"use client";

import { fetchPeriods } from "@/features/reporting/data/filters-data";
import type { SelectItem } from "@/features/reporting/schemas/filters-schema";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export type UsePeriodsResult = {
    items: SelectItem[];
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
};

export function usePeriodsQuery(
    options?: Pick<
        UseQueryOptions<
            SelectItem[],
            unknown,
            SelectItem[],
            (string | number)[]
        >,
        "enabled" | "staleTime" | "gcTime"
    >
): UsePeriodsResult {
    const query = useQuery({
        queryKey: ["reporting", "filters", "periods"],
        queryFn: fetchPeriods,
        staleTime: options?.staleTime,
        gcTime: options?.gcTime,
        enabled: options?.enabled,
    });

    return {
        items: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
    };
}
