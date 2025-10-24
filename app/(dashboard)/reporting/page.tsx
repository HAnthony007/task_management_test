"use client";
import { Icons } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { UnderlineSearchSelect } from "@/components/ui/underline-search-select";
import { usePeriodsQuery } from "@/features/reporting/hooks/use-periods";
import { useTeamsQuery } from "@/features/reporting/hooks/use-teams";
import { useUsersQuery } from "@/features/reporting/hooks/use-users";

export default function ReportingPage() {
    const { items: users, isLoading: loadingUsers } = useUsersQuery();
    const { items: teams, isLoading: loadingTeams } = useTeamsQuery();
    const { items: periods, isLoading: loadingPeriods } = usePeriodsQuery();
    return (
        <div className="flex flex-wrap items-center gap-6 p-4">
            <UnderlineSearchSelect
                placeholder={
                    loadingUsers ? "Chargement…" : "Sélectionné la matricule"
                }
                items={users}
            />

            <UnderlineSearchSelect
                placeholder={
                    loadingTeams ? "Chargement…" : "Sélectionné une équipe"
                }
                items={teams}
            />

            <UnderlineSearchSelect
                placeholder={
                    loadingPeriods ? "Chargement…" : "Sélectionné la période"
                }
                items={periods}
            />
            <Button size="icon" aria-label="exporter">
                <Icons.exporter />
            </Button>
        </div>
    );
}
