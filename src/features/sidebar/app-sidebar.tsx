"use client";
import { Icons } from "@/components/icons/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { sidebarItems } from "./data/sidebar-data";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <Link href="/">
                                <Icons.assignation />
                                <span className="text-base font-semibold">
                                    Task Management
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="overflow-x-hidden">
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItems.map((item) => {
                                const Icon = item.icon
                                    ? Icons[item.icon]
                                    : Icons.dot;

                                const itemActive = pathname === item.url;
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={!!itemActive}
                                            className={`${
                                                itemActive ? "text-primary" : ""
                                            } hover:text-primary`}
                                        >
                                            <Link href={item.url}>
                                                <span
                                                    aria-hidden
                                                    className={`${
                                                        itemActive
                                                            ? "w-1 mr-1 shrink-0 group-data-[collapsible=icon]:hidden"
                                                            : "w-0 mr-0 shrink-0 group-data-[collapsible=icon]:hidden"
                                                    } `}
                                                />
                                                <span
                                                    className={`${
                                                        itemActive
                                                            ? "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                                                            : ""
                                                    }`}
                                                />
                                                {item.icon && (
                                                    <Icon
                                                        className={`${
                                                            itemActive
                                                                ? "text-primary"
                                                                : ""
                                                        } `}
                                                    />
                                                )}
                                                <span
                                                    className={`${
                                                        itemActive
                                                            ? "text-primary"
                                                            : ""
                                                    } `}
                                                >
                                                    {item.title}
                                                </span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="" />
                                <AvatarFallback className="rounded-lg text-primary">
                                    A
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">
                                    Admin
                                </span>
                                <span className="truncate text-xs text-foreground/70">
                                    Administrateur
                                </span>
                            </div>

                            <Icons.disconnect className="ml-auto size-4 text-red-500" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
