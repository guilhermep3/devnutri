import { containerStyle, sectionDescStyle, sectionTitleStyle } from "@/utlis/styles"
import { Apple, Soup, Truck } from "lucide-react"
import { Leaf } from "../leaf"

const aboutData = [
  {
    id: 1,
    title: 'Comida Saudável e Saborosa',
    description: 'Nossas refeições equilibram sabor e saúde, utilizando ingredientes frescos e nutritivos com muito sabor.',
    icon: <Apple className="size-12 stroke-[var(--primary-color)]" />
  },
  {
    id: 2,
    title: 'Nutricionistas Especializados',
    description: 'Possuimos uma equipe de nutricionistas experientes com cardápios pensados para atender diferentes estilos de vida.',
    icon: <Soup className="size-12 stroke-[var(--primary-color)]" />
  },
  {
    id: 3,
    title: 'Temos A Entrega Mais Rápida',
    description: 'Valorizamos o seu tempo. Nossa entrega ágil garante que sua refeição chegue sempre fresca, e no momento certo.',
    icon: <Truck className="size-12 stroke-[var(--primary-color)]" />
  },
]

export const About = () => {

  return (
    <section id="about" className="relative overflow-hidden">
      <Leaf top={20} left={20}/>
      <Leaf bottom={20} right={20} className="rotate-180"/>
      <div className={containerStyle + ' flex justify-center items-center flex-col gap-4 z-10'}>
        <div className="flex justify-center items-center flex-col">
          <h1 className={sectionTitleStyle + ' text-center'}>Porque somos os melhores</h1>
          <p className={sectionDescStyle+' text-center'}>
            Sabemos que escolher a alimentação certa é fundamental. 
            É por isso que cuidamos principalmente dos três itens abaixo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {aboutData.map((item) => (
            <div key={item.id}
              className="h-64 max-w-72 md:max-w-full flex flex-col justify-start items-center gap-3 text-center bg-white p-4 md:p-6 rounded-xl shadow-lg shadow-zinc-400 border hover:border-[var(--primary-color)]">
              {item.icon}
              <p className="text-xl md:text-2xl font-bold">{item.title}</p>
              <p className="text-sm text-zinc-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}