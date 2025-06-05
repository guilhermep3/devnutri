import { Button } from "@/components/ui/button";

type HeaderShopProps = {
  active: string;
  setActive: (value: string) => void;
};

const buttons = ['Todos', 'Carnivoro', 'Vegano'];

export const HeaderShop = ({ active, setActive }: HeaderShopProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-black block"></span>
        <p className="text-xl font-bold">Todas as marmitas</p>
      </div>
      <div className="flex items-center gap-2">
        {buttons.map((label) => (
          <Button
            key={label}
            onClick={() => setActive(label)}
            className={`${active === label ? 'bg-[var(--primary-color)]' : 'bg-zinc-500'
              } hover:bg-[var(--secondary-color)] cursor-pointer`}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};
