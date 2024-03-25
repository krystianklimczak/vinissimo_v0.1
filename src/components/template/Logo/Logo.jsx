import css from './Logo.module.css';

function Logo() {
  return (
    <img
      className={css.logo}
      width="76"
      height="72"
      alt="Logo of Vinissimo restuarant"
    />
  );
}

export { Logo };
