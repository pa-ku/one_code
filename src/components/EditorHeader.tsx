import {
  Play,
  RefreshCcw,
  Cloud,
  ArrowLeftRight,
  ListOrdered,
  Boxes,
  Share2,
  Trash2,
} from "lucide-react";
import icon from "/onecode.webp";
import { useConfig } from "../context/ConfigContext";
import Checkbox from "./Checkbox";
import { useClipboard } from "../hooks/useClipboard";
import useManageCode from "../hooks/useManageCode";

interface EditorHeaderProps {
  onExecute: () => void;
}

export function EditorHeader({ onExecute }: EditorHeaderProps) {
  const {
    autoRun,
    saveCode,
    setSaveCode,
    setAutoRun,
    setInvertLayout,
    setLineNum,
    lineNum,
    invertLayout,
    formatOnSave,
    setFormatOnSave,
  } = useConfig();

  const { isCopied, copyToClipboard } = useClipboard();
  const { clearCode } = useManageCode();

  return (
    <div
      className={`fixed  left-0 top-0 w-14  duration-500 z-50 h-screen border-b bg-background-500  border-gray-700 flex items-center justify-start flex-col `}
    >
      <a
        target="blank"
        rel="noopener noreferrer"
        title="1code web"
        href="https://1codeweb.netlify.app/"
        className="mb-10 mt-3 size-7 flex items-center justify-center font-bold"
      >
        <img src={icon} alt="" className="size-full object-contain" />
      </a>
      <div className=" flex items-center  flex-col gap-4">
        <button
          onClick={onExecute}
          className="flex items-center text-md gap-2 p-1  rounded text-accent"
          title="Execute code"
        >
          <Play size={20} />
        </button>

        <button
          onClick={copyToClipboard}
          className="flex relative items-center text-md gap-2 p-1  rounded text-accent"
          title="Copy url"
        >
          <Share2 size={20} />
          <p
            className={`${
              isCopied ? "opacity-100" : " opacity-0 "
            } pointer-events-none z-10  duration-300 absolute left-0 border-background-100 border w-max bg-black rounded-lg p-2 `}
          >
            Url copied
          </p>
        </button>
        <button
          onClick={clearCode}
          className="flex items-center text-md gap-2 p-1  rounded text-accent"
          title="Clear editor"
        >
          <Trash2 size={20} />
        </button>

        <div className="h-full"></div>
        <p className="text-background-100 text-xs ">Config</p>

        <Checkbox
          checked={autoRun}
          onChange={(e) => setAutoRun(e.target.checked)}
          onHover="Auto run"
        >
          <RefreshCcw size={20} />
        </Checkbox>
        <Checkbox
          checked={saveCode}
          onChange={(e) => setSaveCode(e.target.checked)}
          onHover="Save in url"
        >
          <Cloud size={20}></Cloud>
        </Checkbox>

        <Checkbox
          checked={formatOnSave}
          onChange={(e) => setFormatOnSave(e.target.checked)}
          onHover="Format on save"
        >
          <Boxes size={20}></Boxes>
        </Checkbox>

        <p className="text-background-100 text-xs ">Layout</p>

        <Checkbox
          checked={lineNum}
          onChange={(e) => setLineNum(e.target.checked)}
          onHover="Line Numbers"
        >
          <ListOrdered size={20}></ListOrdered>
        </Checkbox>
        <Checkbox
          checked={invertLayout}
          onChange={(e) => setInvertLayout(e.target.checked)}
          onHover="Invert Layot"
        >
          <ArrowLeftRight size={20}></ArrowLeftRight>
        </Checkbox>
      </div>
    </div>
  );
}
