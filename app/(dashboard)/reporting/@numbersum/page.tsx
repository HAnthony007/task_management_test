"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNumberSumQuery } from "@/features/reporting/hooks/use-numbersum";

export default function NumberSumPage() {
    const { data, isLoading, isError, error } = useNumberSumQuery();
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-[#d1ddff]">
                <CardHeader>
                    <CardTitle>Nombre total de tâches</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                    <CardDescription className="grid flex-1 gap-1 mb-4">
                        <span className="text-foreground">
                            {isLoading
                                ? "Chargement…"
                                : isError
                                ? String(error)
                                : `Assignées: ${data?.totals.assigned}`}
                        </span>
                        <span className="font-medium text-foreground">
                            {isLoading
                                ? ""
                                : isError
                                ? ""
                                : `Traitées: ${data?.totals.treated}`}
                        </span>
                    </CardDescription>
                    <div className="flex flex-1 items-center gap-2 justify-center space-y-2">
                        <Progress
                            value={data?.totals.percent ?? 0}
                            variant="primary"
                        />
                        <span className="text-foreground">
                            {data?.totals.percent ?? 0}%
                        </span>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#eed4d8]">
                <CardHeader>
                    <CardTitle>Nombre total de tâches (application)</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                    <CardDescription className="grid flex-1 gap-1 mb-4">
                        <span className=" text-foreground">
                            {isLoading
                                ? "Chargement…"
                                : isError
                                ? String(error)
                                : `Initiées: ${data?.appTotals.initiated}`}
                        </span>
                        <span className="text-foreground">
                            {isLoading
                                ? ""
                                : isError
                                ? ""
                                : `Non traitées: ${data?.appTotals.notTreated}`}
                        </span>
                    </CardDescription>
                    <div className="flex flex-1 items-center gap-2 justify-center space-y-2">
                        <Progress
                            value={data?.appTotals.percent ?? 0}
                            variant="destructive"
                        />
                        <span className="text-foreground">
                            {data?.appTotals.percent ?? 0}%
                        </span>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#e3e7fc]">
                <CardHeader>
                    <CardTitle>Heures totales des tâches</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                    <CardDescription className="grid flex-1 gap-1 mb-4">
                        <span className=" text-foreground">
                            {isLoading
                                ? "Chargement…"
                                : isError
                                ? String(error)
                                : `À temps: ${data?.hours.onTime}h`}
                        </span>
                        <span className="text-foreground">
                            {isLoading
                                ? ""
                                : isError
                                ? ""
                                : `En retard: ${data?.hours.late}h`}
                        </span>
                    </CardDescription>
                    <div className="flex flex-1 items-center gap-2 justify-center space-y-2">
                        <Progress
                            value={data?.hours.percent ?? 0}
                            variant="primary"
                            className="bg-primary/10"
                            indicatorClassName="opacity-50"
                        />
                        <span className="text-foreground">
                            {data?.hours.percent ?? 0}%
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
