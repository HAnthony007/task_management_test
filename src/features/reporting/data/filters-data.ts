import {
    SelectArraySchema,
    type SelectItem,
} from "@/features/reporting/schemas/filters-schema";

// Données figées comme si elles venaient d'une API
const users: SelectItem[] = [
    { value: "all", label: "Tous les utilisateurs" },
    { value: "U001", label: "U001 - Alice" },
    { value: "U002", label: "U002 - Bob" },
    { value: "U003", label: "U003 - Charlie" },
];

const teams: SelectItem[] = [
    { value: "all", label: "Toutes les équipes" },
    { value: "engineering", label: "Ingénierie" },
    { value: "design", label: "Design" },
    { value: "qa", label: "Qualité" },
    { value: "ops", label: "Opérations" },
];

const periods: SelectItem[] = [
    { value: "week", label: "Cette semaine" },
    { value: "month", label: "Ce mois-ci" },
    { value: "year", label: "Cette année" },
    { value: "custom", label: "Date précise" },
];

export async function fetchUsers(): Promise<SelectItem[]> {
    return SelectArraySchema.parse(users);
}

export async function fetchTeams(): Promise<SelectItem[]> {
    return SelectArraySchema.parse(teams);
}

export async function fetchPeriods(): Promise<SelectItem[]> {
    return SelectArraySchema.parse(periods);
}
