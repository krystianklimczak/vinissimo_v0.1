import css from './ImageAtom.module.css';

const ImageAtom = ({ src, alt }) => {
  return <img className={css.ImageAtom} src={src} alt={alt} />;
};

export { ImageAtom };
