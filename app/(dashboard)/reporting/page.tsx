import { Icons } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { UnderlineSearchSelect } from "@/components/ui/underline-search-select";

export default function ReportingPage() {
    return (
        <div className="flex flex-wrap items-center gap-6 p-4">
            <UnderlineSearchSelect
                placeholder="Sélectionné la matricule"
                items={[
                    { value: "all", label: "Tous les projets" },
                    { value: "p1", label: "Projet Alpha" },
                    { value: "p2", label: "Projet Beta" },
                ]}
            />

            <UnderlineSearchSelect
                placeholder="Sélectionné une équipe"
                items={[
                    { value: "all", label: "Tous les statuts" },
                    { value: "open", label: "Ouvert" },
                    { value: "in-progress", label: "En cours" },
                    { value: "done", label: "Terminé" },
                ]}
            />

            <UnderlineSearchSelect
                placeholder="Sélectionné la période"
                items={[
                    { value: "week", label: "Cette semaine" },
                    { value: "month", label: "Ce mois-ci" },
                    { value: "year", label: "Cette année" },
                    { value: "custom", label: "Date précise" },
                ]}
            />
            <Button size="icon" aria-label="exporter">
                <Icons.exporter />
            </Button>
        </div>
    );
}
