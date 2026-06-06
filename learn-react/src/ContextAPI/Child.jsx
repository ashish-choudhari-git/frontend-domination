import { useContext } from "react";
import { UserContext } from "./Context";

export default function Child() {
  const name = useContext(UserContext);

  return <h1>{name}</h1>;
}

//app.jsx me child direct render karege to. sneha print hoga. kyuki context render hi nahi hua. 
//agar context redner karege to Context provider banega fir child bhi render hoga. to ashish print hoga