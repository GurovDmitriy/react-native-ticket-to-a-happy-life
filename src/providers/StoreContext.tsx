import React from "react";
import store from "../store";

type PropsType = {
  children: React.ReactNode;
};

export const StoreContext = React.createContext<typeof store>(store);

function StoreProvider(props: PropsType) {
  const { children } = props;

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;
