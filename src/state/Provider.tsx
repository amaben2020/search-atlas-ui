import React, { ReactNode } from 'react';
import { ReadingListContext } from './ReadingListContext';
import { useLocalObservable } from 'mobx-react-lite';
import { readingListStore } from './ReadingListStore';

const ReadingBooksProvider = ({ children }: { children: ReactNode }) => {
  const store = useLocalObservable(() => readingListStore);

  return (
    <ReadingListContext.Provider
      value={{
        store,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};

export default ReadingBooksProvider;
