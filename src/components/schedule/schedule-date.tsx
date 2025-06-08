"use client"
import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { nutritionistType } from "@/types/nutritionist"
import { buttonStyleNoRound } from "@/utlis/styles"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useScheduleStore } from "@/store/schedule-store"

const scheduleDateSchema = z.object({
  date: z.string().min(1, { message: 'Insira uma data' })
});

type scheduleDateType = z.infer<typeof scheduleDateSchema>;

type props = {
  nutritionist: nutritionistType;
  nutriSpeciality: string;
  setStep: (newStep: 'date' | 'finish') => void;
}

export const ScheduleDate = ({ nutritionist, nutriSpeciality, setStep }: props) => {
  const { setSchedule } = useScheduleStore();
  const form = useForm<scheduleDateType>({
    resolver: zodResolver(scheduleDateSchema)
  })

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  function onSubmit(data: scheduleDateType) {
    const selectedDate = new Date(data.date);
    setSchedule(selectedDate);
    setStep('finish');
  }

  return (
    <div className="space-y-6">
      <div className="flex">
        <div className="w-20 h-20 bg-zinc-400 p-1 pb-0 rounded-md">
          <Image
            src={`/nutri/${nutritionist.image}`}
            alt={nutritionist.name}
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>
        <div className="ml-4">
          <p className="font-bold">{nutritionist.name}</p>
          <p>Especialista em {nutriSpeciality}</p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="date" className="mb-1">Dia da consulta</FormLabel>
                <FormControl>
                  <Input type="date" id="date"
                    {...field}
                    min={formatDate(today)}
                    max={formatDate(maxDate)}
                    className="cursor-pointer"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm">
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit"
            className={buttonStyleNoRound + ' w-full mt-4'}
          >Agendar</Button>
        </form>
      </Form>
    </div>
  )
}
