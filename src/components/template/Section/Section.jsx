import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <div
      className={css.section}
      style={{
        width: '100vw',
        height: '100vh',
        background: '#052B11',
      }}
    >
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export { Section };
