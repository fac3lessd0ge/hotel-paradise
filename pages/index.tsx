import { AboutUs } from '../components/AboutUs';
import { Header } from '../components/Header/Header';
import { PageContainer } from '../components/PageContainer';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <PageContainer>
      <Header
        links={[
          { label: 'О нас', link: '#about' },
          { label: 'Номера', link: '#rooms' },
          { label: 'Бронирование', link: '#book' },
          { label: 'Контакты', link: '#contacts' },
        ]}
      />
      <Welcome />
      <AboutUs />
    </PageContainer>
  );
}
