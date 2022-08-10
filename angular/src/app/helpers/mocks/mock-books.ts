import { IBook } from 'src/app/interfaces/global.interface';

export const mockBook: IBook[] = [
  {
    id: 1,
    author: 'John Miedema',
    title: 'Slow reading',
    image_url: 'https://covers.openlibrary.org/b/id/5546156-L.jpg',
    editor: 'Litwin Books',
    year: '2009',
    genre: 'no registra',
    created_at: '2020-05-07T01:43:29.970Z',
    updated_at: '2020-05-07T01:43:29.970Z',
  },
  {
    id: 2,
    author: 'Adam West,Jeff Rovin',
    title: 'Back to the Batcave',
    image_url: 'https://covers.openlibrary.org/b/id/270628-L.jpg',
    editor: 'Berkley Books',
    year: '1994',
    genre: 'no registra',
    created_at: '2020-05-07T01:58:19.941Z',
    updated_at: '2020-05-07T01:58:19.941Z',
  },
  {
    id: 3,
    author: 'Sin registro',
    title: 'The West Wing',
    image_url: 'https://covers.openlibrary.org/b/id/476938-L.jpg',
    editor: 'Pocket',
    year: '8',
    genre: 'Sin registro',
    created_at: '2020-05-07T03:05:01.219Z',
    updated_at: '2020-05-07T03:05:01.219Z',
  },
];
