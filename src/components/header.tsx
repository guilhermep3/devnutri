"use client"
import { House, Phone, ShoppingCart } from "lucide-react"
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-30 w-80 sm:w-96 flex justify-between items-center gap-6 bg-white px-6 py-4 shadow-md shadow-zinc-400 rounded-b-3xl">
      <div className="text-[var(--secondary-color)] text-lg md:text-xl font-bold sourGummy">
        DevNutri
      </div>
      <nav className="flex items-center gap-4">
        <div className={`p-2 rounded-full cursor-pointer hover:bg-zinc-200`}>
          <House className={`${isActive('/') ? 'stroke-[var(--secondary-color)]' : 'text-black'} size-5 md:size-6`} />
        </div>
        <div className={`p-2 rounded-full cursor-pointer hover:bg-zinc-200`}>
          <ShoppingCart className={`${isActive('/marmitas') ? 'stroke-[var(--secondary-color)]' : 'text-black'} size-5 md:size-6`} />
        </div>
        <div className={`p-2 rounded-full cursor-pointer hover:bg-zinc-200`}>
          <Phone className={`${isActive('/mutricionistas') ? 'stroke-[var(--secondary-color)]' : 'text-black'} size-5 md:size-6`} />
        </div>
      </nav>
    </header>
  )
}