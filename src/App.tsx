
import './App.css'
import FavoriteBookList from "./components/pelin/FavoriteBookList.tsx";
import ItemList from "./components/izzeddin/ItemList.tsx"
// import  FavoriteBookList from './components/pelin/FavoriteBookList';
// import FavoriteFruitListfrom from "./components/Berry/FavoriteFruitList.tsx";
import FavoriteFruitList from "./components/Berry/FavoriteFruitList.tsx";
// import FavoriteFruits from "./components/Berry/FavoriteFruitList.tsx";
function App() {
  const favoriteBooks = ["The Alchemist", "The Little Prince"];

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

      <FavoriteBookList favoriteBooks={favoriteBooks} heading="Fav Books" onSelectItem={handleSelectedItem}/>

      <h2>Favorite books</h2>
      <ItemList items={["Dune", "angels and demons", "Da vinci code"]}/>
      <FavoriteFruitList fruits={favoriteFruits} />
    </div>
  )
}

export default App
