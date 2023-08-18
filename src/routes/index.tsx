import { useRouter } from "next/router";

import { ChildrenInterface } from "~/shared/interfaces/general/childrenNode";
import { SidebarContextProvider } from "~/shared/contexts/sidebarProvider";

import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";

const Routes: React.FC<ChildrenInterface> = ({ children }) => {
  const router = useRouter();

  if (router.pathname.includes("dashboard")) {
    return (
      <SidebarContextProvider>
        <PrivateRoutes>{children}</PrivateRoutes>
      </SidebarContextProvider>
    );
  }

  return <PublicRoutes>{children}</PublicRoutes>;
};

export default Routes;
