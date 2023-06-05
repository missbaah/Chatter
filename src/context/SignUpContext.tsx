import { createContext, useCallback, useState } from "react";

type SignUpContextType = {
  stepCount: number;
  setStepCount: React.Dispatch<React.SetStateAction<number>>;
  addSetStepCount: () => void;
  substractStepCount: () => void;
};

type SignUpContextProviderProps = {
  children: React.ReactNode;
};

export const SignUpContext = createContext<SignUpContextType | null>(null);

export const SignUpContextProvider = ({
  children,
}: SignUpContextProviderProps) => {
  const [stepCount, setStepCount] = useState(0);
  const addSetStepCount = useCallback(() => {
    setStepCount((prevStepCount) => prevStepCount + 1);
  }, [stepCount]);
  const substractStepCount = useCallback(() => {
    setStepCount((prevStepCount) => prevStepCount - 1);
  }, []);
  return (
    <SignUpContext.Provider
      value={{ stepCount, setStepCount, addSetStepCount, substractStepCount }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
