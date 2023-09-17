import NavigationSideBar from "@/components/Navigation/navigation-sidebar";
import React from "react";

// Server Main Layout  
const MainLayout =  async ({children}:{children:React.ReactNode}) => {
    return ( 
    <div className="h-full">
        <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed insert-y-0">
        <NavigationSideBar/>
        </div>
        <main className="md:pl-[72px] h-full">
            {children}
        </main>
    </div>

     );
}
 
export default MainLayout;