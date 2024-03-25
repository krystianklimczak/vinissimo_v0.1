import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

function SharedLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export { SharedLayout };
