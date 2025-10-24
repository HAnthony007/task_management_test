import { Icons } from "@/components/icons/icon";

export interface SidebarItemType {
    title: string;
    url: string;
    icon?: keyof typeof Icons;
    item?: SidebarItemType[];
}
