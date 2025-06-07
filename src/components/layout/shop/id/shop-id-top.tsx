import { lunchboxType } from "@/types/lunchbox"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

type props = {
  lunchbox: lunchboxType;
}
export const ShopIdTop = ({lunchbox}: props) => {

  return (
    <div className="flex-1 flex justify-center items-center bg-white rounded-t-3xl">
      <div className="relative w-full h-full max-w-72 md:max-w-lg p-4 md:p-12">
        <Suspense fallback={<div className="animate-ping w-72 h-72 md:w-80 md:h-80 block bg-zinc-400"></div>}>
          <Image src={`/lunchbox/${lunchbox?.image}`} alt={lunchbox?.name || 'alt'}
            width={400} height={400}
            style={{ width: 'inherit', height: 'inherit' }}
          />
        </Suspense>
        <Link href={'/shop'} className="absolute hidden md:block top-4 left-4 p-2 rounded-lg bg-zinc-300 hover:bg-zinc-400 transition cursor-pointer">
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </div>
    </div>
  )
}