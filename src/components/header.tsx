"use client"
import { linksData } from "@/utlis/linksData";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/shop') {
      return pathname.startsWith('/shop');
    }
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-30 w-80 sm:w-96 flex justify-between items-center gap-6 bg-white px-4 md:px-6 py-2 shadow-md shadow-zinc-400 rounded-b-3xl">
      <Link href={'/'}
        className="text-[var(--secondary-color)] text-xl font-bold w-10"
      >
        <img src={'/logo.png'} style={{width: "inherit"}} />
      </Link>
      <nav className="border-x-2 px-2">
        <ul className="flex justify-center items-center gap-1">
          {linksData.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id} className="relative group flex justify-center items-center">
                <Link href={link.href} className="p-3 rounded-full hover:bg-zinc-200 inline-block transition">
                  <Icon className={`size-5 md:size-6 ${isActive(link.href)
                    ? 'stroke-[var(--secondary-color)]'
                    : 'text-black'
                    }`}
                  />
                </Link>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-zinc-800 bg-white p-1 rounded-md border opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  {link.name}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="relative group p-3 rounded-full hover:bg-zinc-200 inline-block transition">
        <ShoppingCart className="size-5 md:size-6 cursor-pointer" />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-zinc-800 bg-white p-1 rounded-md border opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Carrinho
        </div>
      </div>
    </header>
  )
}