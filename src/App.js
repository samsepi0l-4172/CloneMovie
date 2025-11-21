// function Food(props) {
//   return <h1>I like {props.fav}</h1>;
// }

// function Food(props) {
//   { fav } = props;
//   return <h1>I like {fav}</h1>;
// }

function Food({ name, picture }) {
  return (
    <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  { id: 1, name: 'hamberger', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { id: 2, name: 'pizza', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { id: 3, name: 'chicken', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { id: 4, name: 'ramen', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { id: 5, name: 'kimbab', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { id: 6, name: 'sushi', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { id: 7, name: 'tteokbokki', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { id: 8, name: 'bibimbap', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
];

function App() {
  return (
    <div>
      {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))}
    </div>
  )
}

export default App;
