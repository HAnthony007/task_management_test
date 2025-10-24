export type NumberSumData = {
    totals: { assigned: number; treated: number; percent: number };
    appTotals: { initiated: number; notTreated: number; percent: number };
    hours: { onTime: number; late: number; percent: number };
};

export const numberSumData: NumberSumData = {
    totals: { assigned: 23, treated: 23, percent: 100 },
    appTotals: { initiated: 23, notTreated: 20, percent: 98 },
    hours: { onTime: 24, late: 18, percent: 19 },
};

export async function fetchNumberSumData(): Promise<NumberSumData> {
    return Promise.resolve(numberSumData);
}
