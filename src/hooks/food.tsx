import React, { createContext, useContext, useCallback, useState } from 'react';

interface FoodContextData {
  addTest(food: BuiltFood): void;
  setMassa(massa: string): void;
  setTamanho(tamanho: string): void;
  setRecheio(recheio: string): void;
  clearPizza(): void;
  pizza: BuiltFood;
}

export interface BuiltFood {
  massa: string;
  tamanho: string;
  recheio: string;
}

const FoodContext = createContext<FoodContextData>({} as FoodContextData);

export const FoodProvider: React.FC = ({ children }) => {
  const [pizza, setPizza] = useState<BuiltFood>(() => {
    const localFoodStorage = localStorage.getItem('@Stoom:food');
    let food;

    if (localFoodStorage) {
      food = JSON.parse(localFoodStorage);
      return food;
    }

    return { massa: '', tamanho: '', recheio: '' } as BuiltFood;
  });

  const addTest = useCallback((food_test: BuiltFood) => {
    setPizza(food_test);

    localStorage.setItem('@Stoom:food', JSON.stringify(food_test));
  }, []);

  const setMassa = useCallback(
    (massa: string) => {
      Object.assign(pizza, { massa });
      // console.log(pizza);

      localStorage.setItem('@Stoom:food', JSON.stringify(pizza));
    },
    [pizza],
  );

  const setTamanho = useCallback(
    (tamanho: string) => {
      Object.assign(pizza, { tamanho });
      // console.log(pizza);

      localStorage.setItem('@Stoom:food', JSON.stringify(pizza));
    },
    [pizza],
  );

  const setRecheio = useCallback(
    (recheio: string) => {
      Object.assign(pizza, { recheio });
      // console.log(pizza);

      localStorage.setItem('@Stoom:food', JSON.stringify(pizza));
    },
    [pizza],
  );

  const clearPizza = useCallback(() => {
    localStorage.removeItem('@Stoom:food');

    setPizza({} as BuiltFood);
  }, []);

  return (
    <FoodContext.Provider
      value={{
        addTest,
        clearPizza,
        setMassa,
        setTamanho,
        setRecheio,
        pizza,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export function useFood(): FoodContextData {
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error('useFood precisa estar em um FoodProvider');
  }

  return context;
}
