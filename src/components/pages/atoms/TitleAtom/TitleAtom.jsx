import css from './TitleAtom.module.css';

const TitleAtom = ({ text }) => {
  return <h1 className={css.TitleAtom}>{text}</h1>;
};

export { TitleAtom };
