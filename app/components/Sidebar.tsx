import {
  BookOpenTextIcon,
  HomeIcon,
  LucideIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarLink {
  icon: LucideIcon;
  href: string;
  label: string;
  disabled?: boolean;
}

const links: SidebarLink[] = [
  {
    icon: HomeIcon,
    href: "/",
    label: "Home",
  },
  {
    icon: BookOpenTextIcon,
    href: "/training",
    label: "Training",
  },
  {
    icon: SettingsIcon,
    href: "/settings",
    label: "Settings",
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen w-16 flex-col md:flex",
        className
      )}
    >
      <div className="flex grow flex-col items-center gap-y-4 border-r border-border/40 bg-background px-3 py-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="SAAHSP Logo"
            width={45}
            height={45}
            className="h-auto w-auto"
          />
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "group flex w-full flex-col items-center gap-y-1.5 rounded-md p-3 text-foreground/70 hover:bg-accent hover:text-foreground",
              link.disabled && "cursor-not-allowed opacity-80",
              pathname === link.href
                ? "bg-accent text-foreground"
                : "text-foreground/70"
            )}
            onClick={(e) => link.disabled && e.preventDefault()}
          >
            <link.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{link.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
} 