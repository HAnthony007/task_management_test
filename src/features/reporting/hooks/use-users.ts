"use client";

import { fetchUsers } from "@/features/reporting/data/filters-data";
import type { SelectItem } from "@/features/reporting/schemas/filters-schema";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export type UseUsersResult = {
    items: SelectItem[];
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
};

export function useUsersQuery(
    options?: Pick<
        UseQueryOptions<
            SelectItem[],
            unknown,
            SelectItem[],
            (string | number)[]
        >,
        "enabled" | "staleTime" | "gcTime"
    >
): UseUsersResult {
    const query = useQuery({
        queryKey: ["reporting", "filters", "users"],
        queryFn: fetchUsers,
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
