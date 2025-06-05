"use client"
import { linksData } from "@/utlis/linksData";
import Link from "next/link";
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-30 w-80 sm:w-96 flex justify-between items-center gap-6 bg-white px-6 py-4 shadow-md shadow-zinc-400 rounded-b-3xl">
      <Link href={'/'}
        className="text-[var(--secondary-color)] text-xl font-bold"
      >
        DevNutri
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          {linksData.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id} className="relative group">
                <Link href={link.href} className="p-2 rounded-full hover:bg-zinc-200 inline-block transition">
                  <Icon className={`size-5 md:size-6 ${isActive(link.href)
                        ? 'stroke-[var(--secondary-color)]'
                        : 'text-black'
                      }`}
                  />
                </Link>
                <div className="absolute -bottom-8 text-sm text-zinc-800 bg-white p-1 rounded-md border opacity-0 group-hover:opacity-100 transition">{link.name}</div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  )
}