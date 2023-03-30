import { RoomsResponce } from '../components/RoomsSection/types/RoomsResponce';

const mockRoomsData: RoomsResponce = [
  {
    room_number: 1,
    title: 'Комната на первом этаже',
    description: 'Первый этаж, отличная комната',
    price: {
      start_date: '2023-02-09',
      finish_date: '2023-03-01',
      price: 1500,
    },
    links: [
      {
        link: 'https://i.postimg.cc/pTtn3KY8/room11.jpg',
      },
      {
        link: 'https://i.postimg.cc/G2JsR9qf/room12.jpg',
      },
      {
        link: 'https://i.postimg.cc/FzTdf8tg/room13.jpg',
      },
      {
        link: 'https://i.postimg.cc/C5hnxY2x/room14.jpg',
      },
    ],
  },
  {
    room_number: 2,
    title: 'Вторая',
    description: 'Уютная комната на первом этаже! До моря буквально 5 шагов!',
    price: {
      start_date: '2023-02-09',
      finish_date: '2023-03-01',
      price: 1500,
    },
    links: [
      {
        link: 'https://i.postimg.cc/FzTdf8tg/room13.jpg',
      },
    ],
  },
];

export const getRooms = async () => {
  const promise = new Promise((res: (value: RoomsResponce) => void) => {
    setTimeout(() => {
      res(mockRoomsData);
    }, 200);
  });

  return promise;
};
