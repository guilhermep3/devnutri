"use client"
import { linksData } from "@/utlis/linksData"
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <footer className="bg-[var(--secondary-color)] text-white py-10 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Links</p>
          <ul className="flex flex-col gap-2 md:gap-3">
            {linksData.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.id}>
                  <Link href={link.href}
                    className={`flex items-center gap-2 hover:underline text-white
                      ${isActive(link.href) ? 'font-bold' : ''}`}
                  >
                    <Icon className={`size-5 md:size-6 ${isActive(link.href)
                      ? 'text-white'
                      : 'text-white/60'
                      }`}
                    />
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Ajuda</p>
          <ul>
            <li className="flex flex-col gap-2 md:gap-3">
              <Link href={'/'} className="hover:underline w-fit">Privacidade</Link>
              <Link href={'/'} className="hover:underline w-fit">Termos e Condições</Link>
              <Link href={'/'} className="hover:underline w-fit">Politicas</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Contatos</p>
          <ul className="flex flex-col gap-2 md:gap-3">
            <li>
              <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank"
                className={`flex items-center gap-2 text-white hover:underline w-fit`}
              >
                <Instagram className={`size-5 md:size-6 text-white`}
                />
                Instagram
              </Link>
            </li>
            <li>
              <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank"
                className={`flex items-center gap-2 text-white hover:underline w-fit`}
              >
                <Facebook className={`size-5 md:size-6 text-white`}
                />
                Facebook
              </Link>
            </li>
            <li>
              <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank"
                className={`flex items-center gap-2 text-white hover:underline w-fit`}
              >
                <Linkedin className={`size-5 md:size-6 text-white`}
                />
                Linkedin
              </Link>
            </li>
            <li>
              <Link href={'https://github.com/guilhermep3'} target="_blank"
                className={`flex items-center gap-2 text-white hover:underline w-fit`}
              >
                <Github className={`size-5 md:size-6 text-white`}
                />
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center text-sm">
          Desenvolvido por
          <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank" className="hover:underline ml-1">Guilherme Pereira</Link>
        </p>
      </div>
    </footer>
  )
}