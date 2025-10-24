import {
    NumberSumSchema,
    type NumberSumData,
} from "@/features/reporting/schemas/numbersum-schema";

export const numberSumData: NumberSumData = {
    totals: { assigned: 23, treated: 23, percent: 100 },
    appTotals: { initiated: 23, notTreated: 20, percent: 98 },
    hours: { onTime: 24, late: 18, percent: 19 },
};

export async function fetchNumberSumData(): Promise<NumberSumData> {
    return NumberSumSchema.parse(numberSumData);
}
