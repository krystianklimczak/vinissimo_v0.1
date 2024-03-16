const ListMolecule = ({ items }) => {
  const listItems = items.map(item => {
    return <li>{item}</li>;
  });

  return <ul>{listItems}</ul>;
};

export { ListMolecule };
