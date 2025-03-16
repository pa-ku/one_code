import {  ChevronDown, ChevronUp } from "lucide-react";
import { useConfig } from "../../hooks/useConfig";

export default function FontButton() {
  const { fontSize, setFontSize } = useConfig(); // Valor por defecto, puedes cambiarlo

  const minFont = 14;
  const maxFont = 30;

  return (
    <div className="flex  items-center flex-col rounded-lg">
      <button
      title="Increse font size"
        className="text-background-100"
        onClick={() =>
          setFontSize(fontSize < maxFont ? fontSize + 1 : fontSize)
        }
      >
        <ChevronUp size={20} />
      </button>
      <input
        type="number"
        min={minFont}
        max={maxFont}
      title="Change font size"

        onChange={(e) => setFontSize(Number(e.target.value))}
        value={fontSize}
        className="w-8 peer py-2 rounded-xl text-slate-300 h-full appearance-none bg-background-400 flex text-center items-center justify-center"
      />
      <button
      title="Decrese font size"

        className="text-background-100"
        onClick={() =>
          setFontSize(fontSize > minFont ? fontSize - 1 : fontSize)
        }
      >
        <ChevronDown size={20} />
      </button>

      <div></div>
    </div>
  );
}
