import css from './Footer.module.css';

function Footer() {
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
        <img
          style={{
            width: '100px',
            height: '100px',
            background: 'black',
          }}
          alt="Vinissimo instagram"
        />
        <img
          style={{
            width: '100px',
            height: '100px',
            background: 'black',
          }}
          alt="Vinissimo facebook"
        />
      </div>
    </footer>
  );
}

export { Footer };
