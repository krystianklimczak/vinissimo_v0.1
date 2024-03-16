import { ContactLinkAtom } from '../atoms/ContactLinkAtom';

import { nanoid } from 'nanoid';

const ListMolecule = items => {
  const itemsArray = items.items;
  const listItems = itemsArray.map(item => {
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
