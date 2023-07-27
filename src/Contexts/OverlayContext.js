import { createContext, useContext } from "react";

export const OverlayContext = createContext();

export function useOverlayData() {
  return useContext(OverlayContext);
}
