import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function NumberSumPage() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-[#d1ddff]">
                <CardHeader>
                    <CardTitle>Nombre total de tâches</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                    <CardDescription className="grid flex-1 gap-1 mb-4">
                        <span className="text-foreground">Assignées: 23</span>
                        <span className="font-medium text-foreground">
                            Traitées: 23
                        </span>
                    </CardDescription>
                    <div className="flex flex-1 items-center gap-2 justify-center space-y-2">
                        <Progress value={100} variant="primary" />

                        <span className="text-foreground">100%</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#eed4d8]">
                <CardHeader>
                    <CardTitle>Nombre total de tâches (application)</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                    <CardDescription className="grid flex-1 gap-1 mb-4">
                        <span className=" text-foreground">Initiées: {23}</span>
                        <span className="text-foreground">
                            Non traitées: 20
                        </span>
                    </CardDescription>
                    <div className="flex flex-1 items-center gap-2 justify-center space-y-2">
                        <Progress value={98} variant="destructive" />
                        <span className="text-foreground">98%</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#e3e7fc]">
                <CardHeader>
                    <CardTitle>Heures totales des tâches</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                    <CardDescription className="grid flex-1 gap-1 mb-4">
                        <span className=" text-foreground">À temps: {24}h</span>
                        <span className="text-foreground">
                            En retard: {18}h
                        </span>
                    </CardDescription>
                    <div className="flex flex-1 items-center gap-2 justify-center space-y-2">
                        <Progress
                            value={19}
                            variant="primary"
                            className="bg-primary/10"
                            indicatorClassName="opacity-50"
                        />
                        <span className="text-foreground">19%</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
