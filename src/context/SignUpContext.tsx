import { createContext, useCallback, useState } from "react";

type SignUpContextType = {
  stepCount: number;
  setStepCount: React.Dispatch<React.SetStateAction<number>>;
  updateSetStepCount: (stepCount: number) => void;
};

type SignUpContextProviderProps = {
  children: React.ReactNode;
};

export const SignUpContext = createContext<SignUpContextType | null>(null);

export const SignUpContextProvider = ({
  children,
}: SignUpContextProviderProps) => {
  const [stepCount, setStepCount] = useState(0);
  const updateSetStepCount = useCallback(
    (stepCount: number) => {
      setStepCount(stepCount + 1);
    },
    [stepCount]
  );

  return (
    <SignUpContext.Provider
      value={{ stepCount, setStepCount, updateSetStepCount }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
