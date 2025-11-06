import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';

interface TabBarContextType {
  showTabBar: boolean;
  setShowTabBar: (show: boolean) => void;
}

const TabBarContext = createContext<TabBarContextType | undefined>(undefined);

export const TabBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/dashboard';
  
  // Initialize with false if on homepage, true otherwise
  const [showTabBar, setShowTabBar] = useState(!isHomePage);

  // Update tab bar state when route changes
  useEffect(() => {
    if (!isHomePage) {
      setShowTabBar(true);
    } else {
      setShowTabBar(false);
    }
  }, [isHomePage]);

  return (
    <TabBarContext.Provider value={{ showTabBar, setShowTabBar }}>
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBar = () => {
  const context = useContext(TabBarContext);
  if (context === undefined) {
    throw new Error('useTabBar must be used within a TabBarProvider');
  }
  return context;
};
