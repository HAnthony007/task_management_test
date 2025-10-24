import { z } from "zod";

export const SelectItemSchema = z.object({
    value: z.string(),
    label: z.string(),
});

export const SelectArraySchema = z.array(SelectItemSchema);

export type SelectItem = z.infer<typeof SelectItemSchema>;
