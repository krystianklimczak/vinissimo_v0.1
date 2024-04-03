import { findLink } from '../../../helpers/findLink';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom';
import { Icon } from '../../atoms/Icon/Icon';

import css from './Footer.module.css';

function Footer() {
  const { href: hrefInstagram } = findLink('instagram');
  const { href: hrefFacebook } = findLink('facebook');
  return (
    <footer className={css.footer}>
      <div className={css.footer__links}>
        <div>
          <p>Vinissimo Restaurant & Wine</p>
          <p>Bar ul. Bema 6 Sopot</p>
        </div>
        <div>
          <p>pon-sb: 14-22</p>
          <p>niedziela: 13-19</p>
        </div>
        <div>
          <p>tel. +48 881 334 449</p>
          <p>booking@vinissimorestaurant.pl</p>
        </div>
      </div>
      <div className={css.footer__icons}>
        <ContactLinkAtom
          children={<Icon id="instagram" />}
          href={hrefInstagram}
        />
        <ContactLinkAtom
          children={<Icon id="facebook" />}
          href={hrefFacebook}
        />
      </div>
    </footer>
  );
}

export { Footer };
