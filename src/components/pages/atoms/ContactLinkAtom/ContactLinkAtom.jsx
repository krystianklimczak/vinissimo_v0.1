import css from './ContactLinkAtom.module.css';

const ContactLinkAtom = ({ href, text }) => {
  return (
    <a className={css.ContactLinkAtom} href={href}>
      {text}
    </a>
  );
};

export { ContactLinkAtom };
