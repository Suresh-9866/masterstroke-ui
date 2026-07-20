"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Gift,
  Users,
  BookOpen,
  User,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/categories",
    icon: House,
  },
  {
    name: "Rewards",
    href: "/rewards",
    icon: Gift,
  },
  {
    name: "Referral",
    href: "/referral",
    icon: Users,
  },
  {
    name: "Induction",
    href: "/induction",
    icon: BookOpen,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <footer className="bg-gradient-to-r from-[#0F4C81] to-[#008080] text-white shadow-lg">
      <div className="grid grid-cols-5">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex
                flex-col
                items-center
                justify-center
                py-5
                transition
                hover:bg-white/10
                ${
                  index !== navItems.length - 1
                    ? "border-r border-cyan-400"
                    : ""
                }
              `}
            >
              <Icon
                size={24}
                className={
                  active
                    ? "text-cyan-200"
                    : "text-white"
                }
              />

              <span
                className={`
                  text-xs md:text-sm mt-2 font-medium
                  ${
                    active
                      ? "text-cyan-200"
                      : "text-white"
                  }
                `}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}