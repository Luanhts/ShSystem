"use client"; // Isso permite usar o usePathname

import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingBag, LogOut, Settings } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/src/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/imgs/logoSh.png";

export function AppSidebar() {
  const pathname = usePathname(); // Agora funciona!

  const menuItems = [
    { path: "/dashboard", icon: LayoutDashboard },
    { path: "/produtos", icon: Package },
    { path: "/pedidos", icon: ShoppingBag },
  ];

  return (
    <Sidebar className="border-r-0 bg-white"> {/* Remove a borda padrão para um look mais clean */}
      <SidebarHeader className="flex items-center justify-center py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC107] shadow-lg shadow-yellow-100 transition-transform hover:scale-105">
    <Image
      src={logo}
      alt="A Hora Fit"
      width={32} // Reduzi um pouco para dar respiro dentro do quadrado
      height={32}
      className="rounded-lg object-cover"
    />
  </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col items-center">
        <SidebarMenu className="gap-4">
          {menuItems.map((item) => {
            const active = pathname === item.path;
            return (
              <SidebarMenuItem key={item.path} className="relative flex justify-center">
                {/* O INDICADOR AMARELO LATERAL */}
                {active && (
                  <div className="absolute left-[-12px] top-2 bottom-2 w-1.5 bg-[#FFC107] rounded-r-full" />
                )}
                
                <SidebarMenuButton 
                  asChild 
                  isActive={active}
                  className={active ? "text-[#FFC107] bg-yellow-50" : "text-gray-400"}
                >
                  <Link href={item.path}>
                    <item.icon className="!size-6" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="flex flex-col items-center gap-4 py-6 text-gray-400">
        <Settings className="cursor-pointer hover:text-black transition-colors" />
        <LogOut className="cursor-pointer hover:text-black transition-colors" />
      </SidebarFooter>
    </Sidebar>
  );
}