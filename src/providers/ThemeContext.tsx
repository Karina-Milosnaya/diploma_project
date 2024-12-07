import { createContext, PropsWithChildren, useState } from "react";

type TContext = [string, (value: string) => void];
export const contextCreation = createContext<TContext>(["", () => {}]);

function ThemeContext({ children }: PropsWithChildren<{}>) {
  const [color, setColor] = useState("light");

  return (
    <>
      <contextCreation.Provider value={[color, setColor]}>
        {children}
      </contextCreation.Provider>
    </>
  );
}

export default ThemeContext;
