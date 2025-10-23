"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function AppHeader() {
    const pathname = usePathname();
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
                orientation="vertical"
                className="mx-2 data-[orientation=vertical]:h-4"
            />
            {/* Remove leading slash and take first segment, fallback to 'Home', then capitalize */}
            <div className="text-lg font-semibold">
                {pathname.split("/")[1].charAt(0).toUpperCase() +
                    pathname.split("/")[1].slice(1)}
            </div>
        </header>
    );
}
