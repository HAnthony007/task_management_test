"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/lib/utils";

type ProgressVariant = "primary" | "destructive";

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
    value?: number;
    variant?: ProgressVariant;
    indicatorClassName?: string;
};

function Progress({
    className,
    value,
    variant = "primary",
    indicatorClassName,
    ...props
}: ProgressProps) {
    const trackColor =
        variant === "destructive" ? "bg-destructive/20" : "bg-primary/20";
    const indicatorColor =
        variant === "destructive" ? "bg-destructive" : "bg-primary";

    return (
        <ProgressPrimitive.Root
            data-slot="progress"
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full",
                trackColor,
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className={cn(
                    "h-full w-full flex-1 transition-all",
                    indicatorColor,
                    indicatorClassName
                )}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
