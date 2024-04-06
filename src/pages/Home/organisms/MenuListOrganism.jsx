import { nanoid } from 'nanoid';

function MenuListOrganism(category, data, title) {
  const items = data[category];
  const item = items.map(item => {
    const id = nanoid();
    const { firstLineName, secondLineName, thirdLineName, price, isActive } =
      item;
    return isActive ? (
      <li key={id}>
        <div>
          <p>{firstLineName}</p>
          {secondLineName && <p>{secondLineName}</p>}
          {thirdLineName && <p>{thirdLineName}</p>}
        </div>
        <p>{price}</p>
      </li>
    ) : null;
  });
  return (
    <>
      <h3>{title}</h3>
      <ul>{item}</ul>
    </>
  );
}

export { MenuListOrganism };
