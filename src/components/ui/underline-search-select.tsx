"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import * as React from "react";

type Option = {
    label: string;
    value: string;
};

export type UnderlineSearchSelectProps = {
    placeholder?: string;
    items: Option[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
};

export function UnderlineSearchSelect({
    placeholder,
    items,
    className,
    value,
    defaultValue,
    onValueChange,
    disabled,
    searchPlaceholder = "Rechercher…",
    emptyMessage = "Aucun résultat",
}: UnderlineSearchSelectProps) {
    const [query, setQuery] = React.useState("");

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter((it) => it.label.toLowerCase().includes(q));
    }, [items, query]);

    return (
        <Select
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            disabled={disabled}
        >
            <SelectTrigger
                className={cn(
                    // underline-only visual style
                    "w-56 h-9 bg-transparent rounded-none border-0 border-b border-input px-0 py-2 text-sm focus-visible:ring-0 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
            >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent className="min-w-56">
                <div className="sticky top-0 z-10 bg-popover p-2">
                    <div className="relative">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={searchPlaceholder}
                            aria-label={searchPlaceholder}
                            className="bg-transparent w-full rounded-none border-0 border-b border-input px-8 py-1.5 text-sm outline-none focus:border-ring placeholder:text-muted-foreground"
                        />
                        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <SelectItem value="__empty__" disabled>
                        {emptyMessage}
                    </SelectItem>
                ) : (
                    filtered.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </SelectItem>
                    ))
                )}
            </SelectContent>
        </Select>
    );
}
