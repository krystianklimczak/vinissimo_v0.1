import { nanoid } from 'nanoid';

import { ContactLinkAtom } from '../atoms/ContactLinkAtom/ContactLinkAtom.jsx';

import css from './ListMolecule.module.css';

function ListMolecule({ items }) {
  const listItems = items.map(item => {
    const { href, text } = item;
    const id = nanoid();
    return (
      <li key={id}>
        <ContactLinkAtom
          href={href}
          text={text}
          className={css.ContactLinkAtom}
        />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export { ListMolecule };
