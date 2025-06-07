"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "@/components/checkout/step-user";
import { Steps } from "@/types/steps";
import { StepAddress } from "@/components/checkout/step-address";
import { StepFinish } from "@/components/checkout/step-finish";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const CheckoutDialog = ({ open, onOpenChange }: props) => {
  const [step, setStep] = useState<Steps>('user');

  let progressPct = 0;
  switch (step) {
    case 'user':
      progressPct = 33;
      break;
    case 'address':
      progressPct = 66
      break;
    case 'finish':
      progressPct = 100
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="z-50">
        <>
          <DialogHeader>
            <DialogTitle>
              {step === 'user' && 'Dados pessoais'}
              {step === 'address' && 'Endereço de entrega'}
              {step === 'finish' && 'Enviar para o WhatsApp'}
            </DialogTitle>
          </DialogHeader>
          <Progress value={progressPct} />
          <div className="stepsArea flex flex-col gap-3 mx-2 w-full max-w-80 sm:max-w-full">
            {step === 'user' && <StepUser setStep={setStep} />}
            {step === 'address' && <StepAddress setStep={setStep} />}
            {step === 'finish' && <StepFinish />}
          </div>
        </>
      </DialogContent>
    </Dialog>
  )
}