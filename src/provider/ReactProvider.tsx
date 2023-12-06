'use client';

import { Provider } from "react-redux";
import { store } from "@/redux/store";
export function ReduxProvider({ children }:ChildProps) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
