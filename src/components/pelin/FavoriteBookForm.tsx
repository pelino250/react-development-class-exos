import React, {useState} from 'react';

const FavoriteBookForm = () => {
  const [books, setBooks] = useState<string[]>([]);
  const [newBook, setNewBook] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook(event.target.value);
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    console.log(newBook);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="" id=""
            className="form-control"
            placeholder="Enter favorite book"
            value={newBook}
            onChange={handleChange}
          />
          <button type="submit" className="ml-2">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default FavoriteBookForm;