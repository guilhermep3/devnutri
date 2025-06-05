"use client"
import { linksData } from "@/utlis/linksData";
import Link from "next/link";
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-30 w-80 sm:w-96 flex justify-between items-center gap-6 bg-white px-6 py-4 shadow-md shadow-zinc-400 rounded-b-3xl">
      <div className="text-[var(--secondary-color)] text-lg md:text-xl font-bold sourGummy">
        DevNutri
      </div>
      <nav>
        <ul className="flex items-center gap-4">
          {linksData.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <Link href={link.href} className="p-2 rounded-full hover:bg-zinc-200 inline-block">
                  <Icon className={`size-5 md:size-6 ${isActive(link.href)
                        ? 'stroke-[var(--secondary-color)]'
                        : 'text-black'
                      }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Link href={``}
          className={`p-2 rounded-full cursor-pointer hover:bg-zinc-200`}
        >
          <House className={`${isActive('/') ? 'stroke-[var(--secondary-color)]' : 'text-black'} size-5 md:size-6`} />
        </Link>
        <Link href={``}
          className={`p-2 rounded-full cursor-pointer hover:bg-zinc-200`}
        >
          <ShoppingCart className={`${isActive('/marmitas') ? 'stroke-[var(--secondary-color)]' : 'text-black'} size-5 md:size-6`} />
        </Link>
        <Link href={``}
          className={`p-2 rounded-full cursor-pointer hover:bg-zinc-200`}
        >
          <Phone className={`${isActive('/mutricionistas') ? 'stroke-[var(--secondary-color)]' : 'text-black'} size-5 md:size-6`} />
        </Link> */}
      </nav>
    </header>
  )
}