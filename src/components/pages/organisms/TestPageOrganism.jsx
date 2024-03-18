import css from './TestPageOrganism.module.css';

const TestPageOrganism = ({ mainImage, children }) => {
  return (
    <>
      {mainImage}
      <div className={css.TestPageOrganism}>{children}</div>
    </>
  );
};

export { TestPageOrganism };
