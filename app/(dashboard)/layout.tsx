
interface DashboardLayoutProps{
     children: React.ReactNode;
}

export const DashboardLayout= ({children}: DashboardLayoutProps) =>{
     return (
          <div>
               {children}
          </div>
     )
}