import { SidebarProvider } from "@/components/ui/sidebar";
import { CSSProperties } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as CSSProperties
            }
        >
            {children}
        </SidebarProvider>
    );
}
