import { useContext } from "react";
import { ConfigContext, ConfigContextType } from "../context/ConfigContext";

export function useConfig(): ConfigContextType {
    const context = useContext(ConfigContext);
    if (!context) {
      throw new Error("useConfigContext debe estar dentro de un provider");
    }
    return context;
  }