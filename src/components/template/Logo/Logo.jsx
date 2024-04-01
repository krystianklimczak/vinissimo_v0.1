import { Icon } from '../../atoms/Icon/Icon';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery';

import css from './Logo.module.css';

function Logo() {
  const media = CheckMediaQuery();
  return (
    <>
      {media === 'mobile' ? (
        <Icon id="logo-mobile" className={css.logo} />
      ) : (
        <Icon id="logo-desktop" className={css.logo} />
      )}
    </>
  );
}

export { Logo };
