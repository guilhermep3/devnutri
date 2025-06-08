import { nutritionistType } from "@/types/nutritionist"
import { Button } from "../ui/button";
import { useScheduleStore } from "@/store/schedule-store";

type props = {
  nutritionist: nutritionistType;
  setStep: (newStep: 'date' | 'finish') => void;
  setIsOpen: (newValue: boolean) => void;
}
export const ScheduleFinish = ({nutritionist, setStep, setIsOpen}: props) => {
  const nutriFirstName = nutritionist.name.split(' ')[0];
  const { schedule } = useScheduleStore()

  function handleClose(){
    setStep('date');
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg font-bold">Consulta marcada com {nutriFirstName}</p>
      <p className="text-center">Esperamos você na nossa clínica no dia {schedule && `${schedule.getDate()} de ${new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(schedule)}`}</p>
      <Button className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] cursor-pointer mt-6"
        onClick={handleClose}
      >Fechar</Button>
    </div>
  )
}