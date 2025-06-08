"use client"
import { Dispatch, SetStateAction } from "react"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCheckoutStore } from "@/store/checkout-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Steps } from "@/types/steps";
import { bgColor } from "@/utlis/styles";

const formSchema = z.object({
  name: z.string().min(2, 'Preencha seu nome')
})

type props = {
  setStep: Dispatch<SetStateAction<Steps>>
}
export const StepUser = ({ setStep }: props) => {
  const { name, setName } = useCheckoutStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name)
    setStep('address')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu Nome</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  placeholder="Digite seu nome"
                  {...field}
                  className="text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={bgColor + ' w-full cursor-pointer'}>Próximo</Button>
      </form>
    </Form>
  )
}