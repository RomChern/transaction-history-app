import { useIsMobile } from "../mobile-provider";
import { LayoutDesktop } from "./layout-desktop";
import { LayoutMobile } from "./layout-mobile";

export function Layout() {
  const isMobile = useIsMobile();

  return isMobile ? <LayoutMobile /> : <LayoutDesktop />;
}
