import { Children, createContext, useState } from "react"

 export  const AppContext = createContext()

function AppProvider({children}) {
  const [installedApps, setInstalledApp] = useState([]);
  const handleInstalled = (expectedApps) => {
        const isExistApp = installedApps.find(app => app.id == expectedApps.id)
        console.log(installedApps)
        if(isExistApp) {
      alert("App already installed!");
    } 
    else {
      setInstalledApp([...installedApps, expectedApps]);
      alert("App installed successfully!");
    }
  };
   const data = {
    handleInstalled,
    installedApps,
  };
  
  return (
   <div>
     <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
   </div>
  )
}

export default AppProvider
