function Food(props) {
  return <h1>I like {props.fav}</h1>;
}

// function Food(props) {
//   { fav } = props;
//   return <h1>I like {fav}</h1>;
// }

// function Food({ fav }) {
//   return <h1>I like {fav}</h1>;
// }

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Food fav="hamberger" />
    </div>
  )
}

export default App;
