import { useIsMobile } from "../mobile-provider";
import { HeaderMobile } from "./header-mobile";
import { HeaderDesktop } from "./header-desktop";

export function Header() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <HeaderMobile />;
  }

  return <HeaderDesktop />;
}
