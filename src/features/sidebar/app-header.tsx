import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AppHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
                orientation="vertical"
                className="mx-2 data-[orientation=vertical]:h-4"
            />
            {/* TODO: Use usePathname from next/navigation */}
            <div className="text-lg font-semibold">Task Management</div>
        </header>
    );
}
