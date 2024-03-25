import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <p>Vinissimo Restaurant & Wine</p>
      <p>Bar ul. Bema 6 Sopot</p>
      <p>pon-sb: 14-22</p>
      <p>niedziela: 13-19</p>
      <p>tel. +48 881 334 449</p>
      <p>booking@vinissimorestaurant.pl</p>
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
    </footer>
  );
}

export { Footer };
