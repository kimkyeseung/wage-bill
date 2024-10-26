import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

interface ContextType {
  isOnEdit: boolean;
  setIsOnEdit: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ContextType>({
  isOnEdit: false,
  setIsOnEdit: () => {},
});

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [isOnEdit, setIsOnEdit] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        isOnEdit,
        setIsOnEdit,
      }}
    >
      {children}
    </Context.Provider>
  );
};
