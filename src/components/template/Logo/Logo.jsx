import css from './Logo.module.css';
import { Icon } from '../../atoms/Icon/Icon';

function Logo() {
  return (
    <>
      <Icon id="logo-desktop" className={css.logo} />
    </>
  );
}

export { Logo };
