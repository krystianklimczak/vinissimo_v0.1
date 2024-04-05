import { Icon } from '../../atoms/Icon/Icon.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';

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
