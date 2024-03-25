import { Logo } from '../Logo/Logo';

import css from './Header.module.css';
import { MobileMenuButton } from '../MobileMenuButton/MobileMenuButton';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';

function Header() {
  return (
    <header className={css.header}>
      <div
        className={`${css.header__content} ${css['header__content--mobile']}`}
      >
        <Logo />
        <HeaderNavigation />
        <MobileMenuButton />
      </div>
    </header>
  );
}

export { Header };
