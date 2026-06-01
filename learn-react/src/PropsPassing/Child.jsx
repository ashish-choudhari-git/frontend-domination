
export default function Child({children}){
    return (
        <>
        {children}
        {/* OR props.children */}
        </>
    )
}

//Children prop
// export default function Child({children}){
//     return (
//         <>
//         {children}
//         {/* OR props.children */}
//         </>
//     )
// }


// props passing
// export default function Child(props){
//     return (
//         <>
//         <h1>Hello {props.name} {props.age}</h1>
//         </>
//     )
// }