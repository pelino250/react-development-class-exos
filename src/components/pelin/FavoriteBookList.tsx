import {useState} from "react";


interface Props{
  favoriteBooks: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function FavoriteBookList({favoriteBooks, heading, onSelectItem}: Props) {
  const [, setSelectedIndex] = useState(0);
  return (
    <div>
      <h2>{heading}</h2>
      <ul className={"list-group"}>
        {favoriteBooks.map((book, index) => (
          <li key={book} className={"list-group-item"} onClick={()=> {
            setSelectedIndex(index);
            onSelectItem(book);
          }}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteBookList;

