import { AboutUs } from '../components/AboutUs';
import { RoomsSection } from '../components/RoomsSection';
import { RoomsResponce } from '../components/RoomsSection/types/RoomsResponce';
import { Header } from '../components/Header/Header';
import { PageContainer } from '../components/PageContainer';
import { Welcome } from '../components/Welcome/Welcome';
import { getRooms } from '../lib/getRooms';

const anchorLinks = [
  { label: 'О нас', link: '#about' },
  { label: 'Номера', link: '#rooms' },
  { label: 'Бронирование', link: '#book' },
  { label: 'Контакты', link: '#contacts' },
];

interface HomePageProps {
  rooms: RoomsResponce;
}

export default function HomePage({ rooms }: HomePageProps) {
  return (
    <PageContainer>
      <Header links={anchorLinks} />
      <Welcome />
      <AboutUs />
      <RoomsSection rooms={rooms} />
    </PageContainer>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const rooms = await getRooms();
  // const rooms = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      rooms,
    },
  };
}
