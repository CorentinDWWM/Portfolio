import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

export async function rootLoader() {
  const { darkMode } = useContext(ModeContext);
  return darkMode;
}
