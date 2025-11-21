import PropTypes from 'prop-types';

// function Food(props) {
//   return <h1>I like {props.fav}</h1>;
// }

// function Food(props) {
//   { fav } = props;
//   return <h1>I like {fav}</h1>;
// }

function Food({ name, rating, picture }) {
  return (
    <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  { id: 1, name: 'hamberger', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 5},
  { id: 2, name: 'pizza', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 4},
  { id: 3, name: 'chicken', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 3},
  { id: 4, name: 'ramen', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 2},
  { id: 5, name: 'kimbab', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 1},
  { id: 6, name: 'sushi', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 0},
  { id: 7, name: 'tteokbokki', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 0},
  { id: 8, name: 'bibimbap', image: 'https://cdn.pixabay.com/photo/2025/08/28/18/42/hamberger-10037363_1280.jpg', rating: 0},
];

function App() {
  return (
    <div>
      {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  )
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default App;
