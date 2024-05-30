import "./list.css";
import React, { useState} from "react";

interface Book {
  id: number;
  title: string;

}
type ItemListProp = {
  data: Book[];
}

export default function ItemList({ data }: ItemListProp) {
  const [newBook, setNewBook] = useState<string>("")
  const [books, setBooks] = useState<Book[]>(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bookTitle = e.target.value;
    setNewBook(bookTitle);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = books.length === 0 ? 0 : books.reduce((max, item) => item.id > max.id ? item : max, books[0]).id + 1;
    const book:Book = {
      id,
      title: newBook
    }
    setBooks([...books, book]);
    setNewBook("");
  }

  const deleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return <div>
    <h3>Izzeddin Books</h3>
    <form onSubmit={handleSubmit}>
      <input value={newBook} onChange={handleChange} />
      <button className="btn btn-warning">Add</button>
    </form>
    <ul className={"list-group"}>
    {
      books.map((item) => <li key={item.id} className={"list-group-item"}><span>{item.title}</span><button className={"btn btn-danger"} onClick={() => deleteBook(item.id)}>X</button></li>)
    }
  </ul>
  </div>
}