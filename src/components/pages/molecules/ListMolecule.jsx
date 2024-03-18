import { nanoid } from 'nanoid';

import { ContactLinkAtom } from '../atoms/ContactLinkAtom/ContactLinkAtom';

const ListMolecule = ({ items }) => {
  const listItems = items.map(item => {
    const { href, text } = item;
    const id = nanoid();
    return (
      <li key={id}>
        <ContactLinkAtom href={href} text={text} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
};

export { ListMolecule };
