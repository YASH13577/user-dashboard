"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart2, Settings, Users } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gray-900 border-r border-gray-800 text-gray-100 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <nav className="flex gap-2 p-4 justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              {isOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
