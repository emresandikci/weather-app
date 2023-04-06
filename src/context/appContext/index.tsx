import { IBaseComponent } from 'models';
import React, { useContext, createContext, useState } from 'react';

export interface IAppContext {
  setLocationQuery: React.Dispatch<React.SetStateAction<string>>;
  locationQuery: string;
}
export const AppContext = createContext<IAppContext>({
  setLocationQuery: () => {},
  locationQuery: '',
});

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }: IBaseComponent) {
  const [locationQuery, setLocationQuery] = useState<string>('');
  return (
    <AppContext.Provider value={{ locationQuery, setLocationQuery }}>
      {children}
    </AppContext.Provider>
  );
}
