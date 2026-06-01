Shote notes for React

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

