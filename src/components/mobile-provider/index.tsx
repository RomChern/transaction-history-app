import { createContext, useContext, useEffect, useState } from "react";
// import { IsMobileContext } from "../../contexts/is-mobile-context";

type TProps = {
  children: React.ReactNode;
};

const IsMobileContext = createContext<boolean>(true);
const MAX_MOBILE_WIDTH = 900;

export function useIsMobile() {
  return useContext(IsMobileContext);
}

export function MobileProvider(props: TProps) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MAX_MOBILE_WIDTH
  );

  useEffect(() => {
    const handleResizingScreen = () => {
      setIsMobile(window.innerWidth <= MAX_MOBILE_WIDTH);
    };

    window.addEventListener("resize", handleResizingScreen);

    return () => {
      window.removeEventListener("resize", handleResizingScreen);
    };
  }, []);

  return (
    <IsMobileContext.Provider value={isMobile}>
      {props.children}
    </IsMobileContext.Provider>
  );
}
