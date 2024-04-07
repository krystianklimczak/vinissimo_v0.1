import { Menu } from '../../components/template/Menu/Menu';
import { About } from '../../components/template/About/About';
import { RateUs } from '../../components/template/RateUs/RateUs';
import { MainBoard } from '../../components/template/MainBoard/MainBoard';
import { Reservation } from '../../components/template/Reservation/Reservation';
import { CheckMediaQuery } from '../../helpers/checkMediaQuery';

function Home() {
  const screen = CheckMediaQuery();
  return (
    <div>
      <MainBoard />
      <About />
      <Menu />
      <Reservation />
      {screen === 'desktop' && <RateUs />}
    </div>
  );
}

export { Home };
