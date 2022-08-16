import { IBook } from 'src/app/interfaces/global.interface';

export const mockBook: IBook[] = [
  {
    id: 1,
    author: 'John Miedema',
    title: 'Slow reading',
    imageUrl: 'https://covers.openlibrary.org/b/id/5546156-L.jpg',
    editor: 'Litwin Books',
    year: '2009',
    genre: 'no registra',
    createdAt: '2020-05-07T01:43:29.970Z',
    updatedAt: '2020-05-07T01:43:29.970Z',
  },
  {
    id: 2,
    author: 'Adam West,Jeff Rovin',
    title: 'Back to the Batcave',
    imageUrl: 'https://covers.openlibrary.org/b/id/270628-L.jpg',
    editor: 'Berkley Books',
    year: '1994',
    genre: 'no registra',
    createdAt: '2020-05-07T01:58:19.941Z',
    updatedAt: '2020-05-07T01:58:19.941Z',
  },
  {
    id: 3,
    author: 'Sin registro',
    title: 'The West Wing',
    imageUrl: 'https://covers.openlibrary.org/b/id/476938-L.jpg',
    editor: 'Pocket',
    year: '8',
    genre: 'Sin registro',
    createdAt: '2020-05-07T03:05:01.219Z',
    updatedAt: '2020-05-07T03:05:01.219Z',
  },
];
