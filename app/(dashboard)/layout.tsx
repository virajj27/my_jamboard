import SideBar from "./_components/sidebar/index"
import {OrgSidebar} from "./_components/org-sidebar"
import { Navbar } from "./_components/navbar"
interface DashboardLayoutProps{
    children:React.ReactNode
}

const DashBoardlayout=({children}:DashboardLayoutProps)=>{
    return (
        <main className="h-full">
            <SideBar/>
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <OrgSidebar/>
                    <div className="h-full flex-1">
                        <Navbar/>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
export default DashBoardlayout;