
import { createContext, ReactNode, useMemo } from "react";
import useLocalStorage from "use-local-storage";

export const ConfigContext = createContext<ConfigContextType | undefined>(
  undefined,
);

export type ConfigContextType = {
  autoRun: boolean;
  setAutoRun: (value: boolean) => void;
  openMenu: () => void;
  closeMenu: () => void;
  openConfig: boolean;
  setSaveCode: (value: boolean) => void;
  lineNum: boolean;
  setLineNum: (value: boolean) => void;
  saveCode: boolean;
  fontSize: number;
  setFontSize: (value: number) => void;
};

type ConfigProviderProps = {
  children: ReactNode;
};

export function ConfigProvider({ children }: ConfigProviderProps) {
  const [openConfig, setOpenConfig] = useLocalStorage("configOpen", false);
  const [autoRun, setAutoRun] = useLocalStorage("autoRun", true);
  const [saveCode, setSaveCode] = useLocalStorage("saveCode", true);
  const [lineNum, setLineNum] = useLocalStorage("lineNum", true);
  const [fontSize, setFontSize] = useLocalStorage("fontSize", 18);

  const contextValue = useMemo(
    () => ({
      autoRun,
      setAutoRun,
      openMenu: () => setOpenConfig(true),
      closeMenu: () => setOpenConfig(false),
      openConfig,
      saveCode,
      setSaveCode,
      lineNum,
      setLineNum,
      fontSize,
      setFontSize,
    }),
    [autoRun, openConfig,setSaveCode,setOpenConfig, saveCode, lineNum, fontSize, setAutoRun, setLineNum, setFontSize],
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}


