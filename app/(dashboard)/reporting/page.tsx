"use client";
import { Icons } from "@/components/icons/icon";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { UnderlineSearchSelect } from "@/components/ui/underline-search-select";
import { usePeriodsQuery } from "@/features/reporting/hooks/use-periods";
import { useTeamsQuery } from "@/features/reporting/hooks/use-teams";
import { useUsersQuery } from "@/features/reporting/hooks/use-users";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function ReportingPage() {
    const { items: users, isLoading: loadingUsers } = useUsersQuery();
    const { items: teams, isLoading: loadingTeams } = useTeamsQuery();
    const { items: periods, isLoading: loadingPeriods } = usePeriodsQuery();

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const selectedUser = searchParams.get("user") ?? undefined;
    const selectedTeam = searchParams.get("team") ?? undefined;
    const selectedPeriod = searchParams.get("period") ?? undefined;

    function updateParam(key: string, value: string | undefined) {
        const params = new URLSearchParams(searchParams.toString());
        if (!value || value === "__empty__") {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname, {
            scroll: false,
        });
    }
    return (
        <div className="flex flex-wrap items-center gap-6 p-4">
            <UnderlineSearchSelect
                placeholder={
                    loadingUsers ? "Chargement…" : "Sélectionné la matricule"
                }
                items={users}
                value={selectedUser}
                onValueChange={(v) => updateParam("user", v)}
                disabled={loadingUsers}
            />

            <UnderlineSearchSelect
                placeholder={
                    loadingTeams ? "Chargement…" : "Sélectionné une équipe"
                }
                items={teams}
                value={selectedTeam}
                onValueChange={(v) => updateParam("team", v)}
                disabled={loadingTeams}
            />

            <UnderlineSearchSelect
                placeholder={
                    loadingPeriods ? "Chargement…" : "Sélectionné la période"
                }
                items={periods}
                value={selectedPeriod}
                onValueChange={(v) => updateParam("period", v)}
                disabled={loadingPeriods}
            />
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button size="icon" aria-label="exporter">
                        <Icons.exporter />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="sm:max-w-xl min-h-50 p-5">
                    <AlertDialogHeader className="text-center sm:text-center">
                        <AlertDialogTitle>Exporter de donnees</AlertDialogTitle>
                        <AlertDialogDescription>
                            Voulez-vous exporter les donnees du reporting?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="justify-center sm:justify-center">
                        <AlertDialogAction
                            onClick={() => toast.success("Export lancé")}
                        >
                            Oui, exporter
                        </AlertDialogAction>
                        <AlertDialogCancel
                            onClick={() => toast.info("Export annulé")}
                        >
                            annuler
                        </AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
