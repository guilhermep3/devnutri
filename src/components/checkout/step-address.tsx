import { Steps } from "@/types/steps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCheckoutStore } from "@/store/checkout-store";
import { bgColor } from "@/utlis/styles";

const formSchemaAddress = z.object({
  street: z.string().min(2, 'Preencha o endereço corretamente.'),
  number: z.string().min(2, 'Digite o número da sua residência.'),
  complement: z.string().optional(),
  district: z.string().min(2, 'Preencha o distrito corretamente.'),
  city: z.string().min(2, 'Preencha o nome da sua cidade.'),
  state: z.string().min(2, 'Digite o nome do seu estado.')
});

type FormValues = z.infer<typeof formSchemaAddress>;

type props = {
  setStep: Dispatch<SetStateAction<Steps>>
}
export const StepAddress = ({ setStep }: props) => {
  const { address, setAddress } = useCheckoutStore(state => state)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchemaAddress),
    defaultValues: { ...address, complement: address.complement ?? '' },

  })

  const onSubmit = (values: FormValues) => {
    setAddress(values);
    setStep("finish")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <FormField control={form.control}
            name={'street'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sua rua</FormLabel>
                <FormControl>
                  <Input placeholder="Digite sua rua"
                    {...field}
                    className="text-sm" />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm"></FormMessage>
              </FormItem>
            )}
          />
          <FormField control={form.control}
            name={'number'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número residêncial</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu número"
                    {...field}
                    className="text-sm" />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm"></FormMessage>
              </FormItem>
            )}
          />
          <FormField control={form.control}
            name={'complement'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Complemento (opc)</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu complemento"
                    {...field}
                    className="text-sm" />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm"></FormMessage>
              </FormItem>
            )}
          />
          <FormField control={form.control}
            name={'district'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu Bairro</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu bairro"
                    {...field}
                    className="text-sm" />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm"></FormMessage>
              </FormItem>
            )}
          />
          <FormField control={form.control}
            name={'city'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sua cidade</FormLabel>
                <FormControl>
                  <Input placeholder="Digite sua cidade"
                    {...field}
                    className="text-sm" />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm"></FormMessage>
              </FormItem>
            )}
          />
          <FormField control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp">São Paulo</SelectItem>
                      <SelectItem value="rj">Rio de Janeiro</SelectItem>
                      <SelectItem value="mg">Minas Gerais</SelectItem>
                      <SelectItem value="es">Espirito Santo</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-xs sm:text-sm"></FormMessage>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button variant={'link'} onClick={() => setStep('user')} className="cursor-pointer">Voltar</Button>
          <Button type="submit" className={bgColor+' cursor-pointer'}>Concluir</Button>
        </div>
      </form>
    </Form>
  )
}