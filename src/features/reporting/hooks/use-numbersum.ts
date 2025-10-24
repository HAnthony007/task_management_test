"use client";

import {
    fetchNumberSumData,
    type NumberSumData,
} from "@/features/reporting/data/numbersum-data";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export type UseNumberSumResult = {
    data: NumberSumData | null;
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
};

export function useNumberSumQuery(
    options?: Pick<
        UseQueryOptions<
            NumberSumData,
            unknown,
            NumberSumData,
            (string | number)[]
        >,
        "enabled" | "staleTime" | "gcTime"
    >
): UseNumberSumResult {
    const query = useQuery({
        queryKey: ["reporting", "numbersum"],
        queryFn: fetchNumberSumData,
        staleTime: options?.staleTime,
        gcTime: options?.gcTime,
        enabled: options?.enabled,
    });

    return {
        data: query.data ?? null,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
    };
}
