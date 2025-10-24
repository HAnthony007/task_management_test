import { z } from "zod";

export const NumberSumSchema = z.object({
    totals: z.object({
        assigned: z.number(),
        treated: z.number(),
        percent: z.number(),
    }),
    appTotals: z.object({
        initiated: z.number(),
        notTreated: z.number(),
        percent: z.number(),
    }),
    hours: z.object({
        onTime: z.number(),
        late: z.number(),
        percent: z.number(),
    }),
});

export type NumberSumData = z.infer<typeof NumberSumSchema>;
