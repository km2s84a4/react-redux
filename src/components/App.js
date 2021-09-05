const App = (props) => {
  const { number, day, title, plus, minus } = props;
  return (
    <div>
      <h2>
        {title} {number} {day}
      </h2>
      <button
        onClick={() => {
          plus(10);
        }}
      >
        + 10
      </button>
      <button
        onClick={() => {
          minus(10);
        }}
      >
        - 10
      </button>
    </div>
  );
};

export default App;
