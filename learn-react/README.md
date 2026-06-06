Shote notes for React



Topics covered:

About react
Components
Props, prop drilling
Children
State
Rendering Cycle
Virtual DOM
Reconciliation
React.memo
useEffect
Dependency Arrays
Cleanup Functions
Stale Closures
useRef
Controlled Components = form
Form Handling
Context API




React is javascript library, not a framework. libary has prewritten code, that developer uses to make app faster.
It used component based architecture. 
Created by Facebook 2013.
Uses syntax called JSX(Javascript + XML)


Setup 
npm create vite@latest my-react-app -- --template react
npx creat-react-app my-react-app 


Import and Export 
- named export , we just write export keyword in front of varible, function adn import in another component with same name and curcly braces
- default export , there is only one deafult export. "export fefault functionName"


JSX
JSX is systactic extension of Javascript , that allows to write HTML like code inside javascript. 
JSX allow javascript expression using curly braces and note statements.
File names and function name should have first letter capital

JSX Internal 
React uses tools like babel, vite that convert JSX to javscript.

var h1 = React.createElement("h1", null, "Ashish");
var parent = document.querySelector(".parent");
var root = React.createRoot(parent);
React.render(root);


Real DOM
Real dom is tree structure of HTML, it has performance issue as we need to rerender entire page if something changes.


Virtual DOM
Virtual DOM is tree structure of objects. IT is lightweight javascript reppresentation of actual DOM , whnever state/prop changes, react creat new virtual DOM and compare it with previos one, usign Diffing algorithm. this process is called Reconcilation. react then update only changes component in actual DOM.


Components
Components are reusable piece of UI.
Component only return one root ( like <div></div> ,<><> wrapper)

Props in Components
Props(properties) are used to pass data from parent component to child component.
It returns object.
props are read only and immutable.
props are one way only.
Any content passed between component tag is automatically avaible in children prop.


State
State is built in react mechanism used to store and manage component specific data. when state changes , React rerender component.


---------------------------- useState
It is React hook that allow functional component to manage state. useState is return array containing current value andn setter function
Rerender does not neccessarily means real DOM is updated. only changed  part is updated.
temporary update until reloaded.
State update -> component rerender -> new DOM -> Diffing -> update real DOM

Function update : setCount(prev => prev +1)

Object update setUser({...user, age : 18})

React schedules the state update

Rerender means rerun of functional component function

parent jab rerender hota to har bar child bhi hota. isliey react.memo use karte
React.memo use karna ke baad child unnecesary reredner avoid karega agar uska prop unchanged hai. shallow comparison hota, means primitive data type ki value compare hoti aur reference data type ke reference.
array , object aur function jab child me pass karte to har bar naya object/array/function banta isliye new memory har baat allocate hoti har render pe isliey react.memo usko new prop dekhta aru  child component har bar rerender hota
iska solution hai useMemo(), useCallback()








-----------------------  useEffect
DA, cleanup function

Definition:
A React Hook used to perform side effects in functional components.

Why use it?
To execute logic that should happen after rendering, such as:
- API calls
- Timers
- Event listeners
- DOM manipulation
- LocalStorage operations

Key Point:
React first renders the UI, updates the DOM, and then runs useEffect.

Depeding upon dependency array its run is controlled. means if no DA passed , it will run aftr initial render and in each rerender. FI empty DA passed, it will run only once after initial render. if values are passed ot DA array , then it run after initial render adn whenever this value changes.


State Change decides:
→ Whether a component re-renders

Dependency Array decides:
→ Whether an effect re-runs after a render








Cleanup Function

Definition:
A function returned from useEffect.

When does it run?
1. Before the effect re-runs
2. When the component unmounts

Why is it used?
- Remove event listeners
- Clear timers
- Prevent memory leaks

React runs the cleanup function before executing the next effect to remove any side effects created by the previous effect, such as timers, subscriptions, or event listeners. This prevents memory leaks





Stale Closure

What is a stale closure?
occurs When a callback (setInterval, setTimeout, event listener, useEffect) keeps using variables from an older render even after state has changed.

Solution : Dependency array prop pass and useRef


useRef

Definition:
A React Hook that stores a mutable value that persists across renders without causing re-renders.
Updating ref.current does not trigger a component re-render.

Syntax:
const ref = useRef(initialValue);

Returns:
{
  current: initialValue
}

Common Uses:
1. DOM access
2. Avoid stale closures
3. Persist mutable data

Normal Variable/Object:
- Recreated on every render
- Value does not persist

useRef:
- Same object across renders. Value persists across render. All renders share the same ref object. so stale closure gets latest value
- Updating .current does not trigger re-render
- Used when UI does not change

useState:
- Value persists across renders
- Updating value triggers re-render
- Used when UI changes.





----------- FORM

Controlled Component

Definition:
A controlled component is a form element whose value is managed by React state.

Requirements:
1. value prop
2. onChange handler, without this Input becomes read-only

Flow:
User Input
↓
onChange
↓
State Update
↓
Re-render
↓
Updated Input value

e.target.value  e = event object , target is input , value is current inp val







Prop Drilling

Definition:
Passing props through multiple intermediate components to reach a deeply nested component.

Problem:
Components that don't need the data still receive and forward it.

Context API

Definition:
A React feature that allows data sharing across the component tree without passing props manually. Context API solves prop drilling

Steps:
1. createContext()
2. Provider
3. useContext()


When Should You Use Context?
Theme
Current User
Language
Authentication State

When Should You NOT Use Context?
Chat messages , Large forms , Complex server data

Every tiem value inside context changes, every single component consuming content will rerender. agar wrapped me koi use nahi karra to wo reredner nahi hoga

The useContext hook returns the default value only when a component reads the context but has no matching Context Provider above it in the component tree.The default value itself is defined when you first call createContext(defaultValue)

contextProvider ko ek component me dalte, {children}. then wo Provider component app.jsx other component ko wrap karta. to wrapped components ko values mil jati. isse Provider component redner hota hai.

useContext read the value from its nearest provider component in component tree
