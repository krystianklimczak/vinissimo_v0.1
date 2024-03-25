import css from './MobileMenuButton.module.css';

function MobileMenuButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <button className={css.mobileMenuButton} onClick={handleClick}>
      Open Mobile Menu
    </button>
  );
}

export { MobileMenuButton };
