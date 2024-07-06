function Counter() {
  const [count, setCount] = React.useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  return React.createElement(
    "div",
    null,
    React.createElement("p", null, `Count : ${count}`),
    React.createElement("button", {onClick :  Increment }, `Increment`)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
