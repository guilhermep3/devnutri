import { useCartStore } from "@/store/cart-store"
import { useCheckoutStore } from "@/store/checkout-store"

export const GenerateMessage = () => {
  const { cart } = useCartStore();
  const { name, address } = useCheckoutStore();

  let allProducts = [];
  for(let i of cart){
    allProducts.push(`${i.lunchbox.name} z${i.quantity}`)
  }

  return `**Dados do cliente:**
Nome: ${name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
------
**Pedido:**
${allProducts.join("\n")}
`
}