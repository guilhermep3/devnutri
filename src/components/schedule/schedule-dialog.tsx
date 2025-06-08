import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { nutritionistType } from "@/types/nutritionist";
import { useState, useEffect } from "react";
import { ScheduleDate } from "./schedule-date";
import { ScheduleFinish } from "./schedule-finish";

type props = {
  nutritionist: nutritionistType;
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

export const ScheduleDialog = ({ nutritionist, isOpen, setIsOpen }: props) => {
  const [nutriSpeciality, setNutriSpeciality] = useState("");
  const [step, setStep] = useState<'date' | 'finish'>('date');

  useEffect(() => {
    if (!nutritionist) return;

    const mapSpecialty = () => {
      switch (nutritionist.specialty) {
        case "Esportiva":
          return "nutrição esportiva";
        case "Obesidade":
          return "tratar obesidade";
        case "Emagrecimento":
          return "emagrecimento";
        case "Reeducação":
          return "reeducação alimentar";
        case "Infantil":
          return "nutrição infantil";
        default:
          return "";
      }
    };

    setNutriSpeciality(mapSpecialty());
  }, [nutritionist]);

  if (!nutritionist) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent className="z-50">
        <DialogHeader>
          {step === 'date' &&
            <>
              <DialogTitle className="text-center">Marque a consulta</DialogTitle>
              <DialogDescription className="text-center text-zinc-700">
                Marque o dia da consulta com {nutritionist.name}
              </DialogDescription>
            </>
          }
        </DialogHeader>
        <div>
          {step === 'date' &&
            <ScheduleDate
              nutritionist={nutritionist}
              nutriSpeciality={nutriSpeciality}
              setStep={setStep}
            />
          }
          {step === 'finish' &&
            <ScheduleFinish
              nutritionist={nutritionist}
              setStep={setStep}
              setIsOpen={setIsOpen}
            />

          }
        </div>
      </DialogContent>
    </Dialog>
  );
};
