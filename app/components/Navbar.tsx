import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const navItems = [
  {
    title: "SAAHSP",
    href: "https://www.saahsp.com/",
    variant: "ghost" as const,
  },
  {
    title: "Members",
    href: "https://www.saahsp.com/members",
    variant: "ghost" as const,
  },
  {
    title: "Training",
    href: "https://www.saahsp.com/training",
    variant: "ghost" as const,
  },
  {
    title: "Events",
    href: "https://www.saahsp.com/events",
    variant: "ghost" as const,
  },
  {
    title: "Exams",
    href: "https://www.saahsp.com/exams",
    variant: "ghost" as const,
  },
  {
    title: "Settings",
    href: "/settings",
    variant: "ghost" as const,
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              AI Chat
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map(
              (item) =>
                item.href && (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: item.variant }),
                      "px-0",
                    )}
                  >
                    {item.title}
                  </Link>
                ),
            )}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full border border-border p-1.5">
                  <PlusIcon className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="/new" className="w-full">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    New Chat
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <ThemeToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar; 