const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Parent />
    </ThemeContext.Provider>
  );
}

function Parent() {
  return (
    <ThemeContext.Provider value="blue">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);

  return <h1>{theme}</h1>;
}

// useContext() always reads the value from the nearest matching Provider above it in the component tree.

// ans : blue