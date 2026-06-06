import { createContext, useState } from "react";
import Child from "./Child";

export const UserContext = createContext("sneha");
//default value bhi de skte
//should be outside component
// a default value. It is used only when there is no Provider above the component.
// agar context provider render nahi hoga to default value milegi
// contextProvider ko ek component me dalte. then wo component app.jsx other component ko wrap karta. to wrapped components ko values mil jati.

export default function Context({ children }) {
  const [name,setName] = useState("ashish");

  return (
    <UserContext.Provider value={name}>
      {children}
    </UserContext.Provider>
  );
}

