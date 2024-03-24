import { About } from '../../components/template/About/About';
import { MainBoard } from '../../components/template/MainBoard/MainBoard';
import { Menu } from '../../components/template/Menu/Menu';
import { Reservation } from '../../components/template/Reservation/Reservation';

function Home() {
  return (
    <div>
      <MainBoard />
      <About />
      <Menu />
      <Reservation />
    </div>
  );
}

export { Home };
