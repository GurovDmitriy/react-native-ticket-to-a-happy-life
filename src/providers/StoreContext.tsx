import React from "react";
import store from "../store";

export const StoreContext = React.createContext<typeof store>(store);

function StoreProvider(props: PropsType) {
  const { children } = props;

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

type PropsType = {
  children: React.ReactNode;
};

export default StoreProvider;
