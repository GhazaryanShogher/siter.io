import React, { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();

export const useItemsContext = () => useContext(ItemsContext);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const updateItems = (newItems) => {
    console.log("newItems",newItems);
    setItems(newItems);
  };

  return (
    <ItemsContext.Provider value={{ items, updateItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
