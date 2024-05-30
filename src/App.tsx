
import './App.css'
import FavoriteBookList from "./components/pelin/FavoriteBookList.tsx";
import ItemList from "./components/izzeddin/ItemList.tsx"
// import  FavoriteBookList from './components/pelin/FavoriteBookList';
// import FavoriteFruitListfrom from "./components/Berry/FavoriteFruitList.tsx";
import FavoriteFruitList from "./components/Berry/FavoriteFruitList.tsx";
// import FavoriteFruits from "./components/Berry/FavoriteFruitList.tsx";
import FavoritePhones from "./components/Princess/FavoritePhones.tsx";
function App() {
  const favoriteBooks = ["The Alchemist", "The Little Prince"];

  const books = [
    { id: 1, title: "Dune" },
    { id: 2, title: "Angels and Demons" },
    { id: 3, title: "Davinci" },
  ]

  const favoriteFruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Orange", color: "Orange" },
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <h1>Week 3 Q&A</h1>
      <div className="my-5">
        <FavoriteBookList favoriteBooks={favoriteBooks} heading="Pelin's Fav Books" onSelectItem={handleSelectedItem}/>
      </div>
      <div className="my-5">
        <ItemList data={books} />
      </div>
      <div className="my-5">
        <FavoriteFruitList fruits={favoriteFruits}/>
      </div>
      <

    </div>
  )
}

export default App
