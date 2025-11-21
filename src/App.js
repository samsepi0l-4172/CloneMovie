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
  { name: 'hamberger', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { name: 'pizza', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { name: 'chicken', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { name: 'ramen', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { name: 'kimbab', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { name: 'sushi', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { name: 'tteokbokki', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
  { name: 'bibimbap', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg'},
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}

// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

function App() {
  console.log(foodLike.map(renderFood))
  return (
    <div>
      {foodLike.map(renderFood)}
    </div>
  )
}

export default App;
