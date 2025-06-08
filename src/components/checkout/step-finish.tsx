import { useCheckoutStore } from "@/store/checkout-store";
import { bgColor } from "@/utlis/styles";
import Link from "next/link";

export const StepFinish = () => {
  const { name } = useCheckoutStore(state => state);

  const message = 'a';
  const LinkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;
  return (
    <div className="flex flex-col gap-5 text-center">
      <p>Parabéns {name}!</p>
      <p className="text-sm">Agora envie seu pedido para o whatsapp para finalizar. Nosso atendente irá te guiar durante o andamento do pedido.</p>
      <Link href={LinkZap} target="_blank" className={bgColor + ' w-full cursor-pointer px-4 py-2 text-white rounded-lg transition'}>
        Enviar para o WhatsApp
      </Link>
    </div>
  )
}