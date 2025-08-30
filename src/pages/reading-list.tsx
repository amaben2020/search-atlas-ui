import { observer } from 'mobx-react-lite';
import { useReadingList } from '@/state/ReadingListContext';
import Layout from '@/components/Layout';
import { useState } from 'react';

const ReadingListManager = observer(() => {
  const { store: readingList } = useReadingList();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Reading List</h2>
      <p className="text-sm text-gray-500">
        Unread Books: {readingList.unreadCount}
      </p>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Book Title"
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="border p-2 mr-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            readingList.addBook(Date.now().toString(), title, author);
            setTitle('');
            setAuthor('');
          }}
        >
          Add Book
        </button>
      </div>
      <ul className="space-y-4">
        {readingList.sortedBooks.map((book) => (
          <li
            key={book.id}
            className="border p-4 rounded bg-white flex justify-between"
          >
            <div>
              <h3 className="text-xl">{book.title}</h3>
              <p>{book.author}</p>
              <p className={book.read ? 'text-green-500' : 'text-gray-500'}>
                {book.read ? 'Read' : 'Unread'}
              </p>
            </div>
            <div className="flex space-x-2">
              {!book.read && (
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => readingList.markAsRead(book.id)}
                >
                  Mark as Read
                </button>
              )}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => readingList.removeBook(book.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
});

export default ReadingListManager;
