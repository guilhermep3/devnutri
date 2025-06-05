import { nutritionistType } from "@/types/nutritionist"
import { Instagram, Phone } from "lucide-react"

type props = {
  item: nutritionistType
}
export const Nutritionist = ({ item }: props) => {

  return (
    <div className="nutritionist group flex justify-center items-center flex-col pb-10 w-fit mx-auto">
      <div className="nutritionist-image-area relative flex justify-center w-72 bg-zinc-300 rounded-3xl overflow-hidden">
        <img src={`/nutri/${item.image}`} alt={"imagem do " + item.name} className="w-full" />
        <div className="absolute flex gap-3 -bottom-1/5 group-hover:bottom-[5%] z-10 transition duration-500">
          <div className="p-2 rounded-md bg-zinc-700 hover:bg-[var(--secondary-color)] transition cursor-pointer">
            <Phone className="w-4 h-4 stroke-white" />
          </div>
          <div className="p-2 rounded-md bg-zinc-700 hover:bg-[var(--secondary-color)] transition cursor-pointer">
            <Instagram className="w-4 h-4 stroke-white" />
          </div>
        </div>
      </div>
      <p className="text-xl md:text-2xl font-bold text-center text-green-950 mt-2">Dr. {item.name}</p>
      <p className="text-zinc-800 text-center">{item.role}</p>
    </div>
  )
}