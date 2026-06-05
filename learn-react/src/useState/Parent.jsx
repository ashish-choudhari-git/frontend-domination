import {useState} from "react";
import React from "react";

const Child = React.memo(function Child(prop){
    console.log("child rerendered");

    return (
        <>
        <h1>{prop.name}</h1>
        </>
    )
});


//parent jab rerender hota to har bar child bhi hota. isliey react.memo use karte
// React.memo use karna ke baad child unnecesaru reredner avoid karega agar uska prop unchanged hai. shallow comparison hota, means primitive data type ki value compare hoti aur reference data type ke reference.
// array , object aur function jab pass karte to har bar naya object banta isliye new memory har baat allocate hoti har render pe isliey child component har bar rerender hota
//iska solution hai useMemo()

function Parent(){
    const [count, setCount] = useState(0);
    console.log("parent rerendered");

    return (
        <>

        {count}
        <button onClick={()=>{ setCount(count+1)}}>Increment</button>


        <Child name={"ashish"}/>
        {/* child will only rerender when different prop is passed */}

        <Child user={{ age : 19 }}/>
        {/* child will rerender even if React.memo is used */}

        </>

    )
};


export default Parent;

// useState is return array containing current value andn setter function
// when state changes function component is rerendered.
// Rerender does not neccessarily means real DOM is updated.




// function Question(){
//     const [count, setCount] = useState(0);
//     // iss function me button dabane se 3 nahi hogi . kyuki state update schedule hota hai , on spot change nahi hota. count ki value each setter ko 0 hi milegi. to last output 1 hi hoga

//     return (
//         <>
//         {count}
//         <button onClick={()=>{ 
//             setCount(count+1)
//             setCount(count+1)
//             setCount(count+1)
//         }}>Increment</button>
//         </>
//     )
// };


//solution : Functional Update -> this ensures each setter get latest value

// function Question(){
//     const [count, setCount] = useState(0);
//     // iss function me button dabane se 3 nahi hogi . kyuki state update schedule hota hai , on spot change nahi hota. count ki value each setter ko 0 hi milegi. to last output 1 hi hoga

//     return (
//         <>
//         {count}
//         <button onClick={()=>{ 
//             setCount(prev => prev +1)
//             setCount(prev => prev +1)
//             setCount(prev => prev +1)
//         }}>Increment</button>
//         </>
//     )
// };