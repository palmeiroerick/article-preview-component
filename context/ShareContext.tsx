"use client";
import { ReactNode, createContext, useState } from "react";

type ShareProviderProps = {
  children: ReactNode;
};

type ShareContextProps = {
  shareState: boolean;
  useChangeShareState: () => void;
};

export const ShareContext = createContext<ShareContextProps>({
  shareState: false,
  useChangeShareState: () => {},
});

const ShareProvider = ({ children }: ShareProviderProps) => {
  const [shareState, useShareState] = useState<boolean>(false);

  const useChangeShareState = () => {
    useShareState(!shareState);
  };

  return (
    <ShareContext.Provider value={{ shareState, useChangeShareState }}>
      {children}
    </ShareContext.Provider>
  );
};

export default ShareProvider;
