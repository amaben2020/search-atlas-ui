import { createContext, useContext } from 'react';
import { ReadingListStore } from './ReadingListStore';

type TStoreContext = {
  store: ReadingListStore;
};

export const ReadingListContext = createContext<TStoreContext | null>(null);

export const useReadingList = () => {
  const context = useContext(ReadingListContext);

  if (!context) {
    throw new Error('Context not found');
  }

  return context;
};
