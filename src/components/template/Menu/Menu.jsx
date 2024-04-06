import { Icon } from '../../atoms/Icon/Icon.jsx';
import { Section } from '../Section/Section.jsx';
import { Button } from '../../atoms/Button/Button.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';

import css from './Menu.module.css';

function Menu() {
  const screen = CheckMediaQuery();
  return (
    <Section title="menu">
      <div className={css.menu}>
        <h3>przystawki</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis
          iusto ipsam ipsum perferendis, enim placeat similique doloribus totam
          veniam porro at autem rem pariatur facere sint suscipit esse dolores
          obcaecati quas ea corrupti neque repudiandae quod? Laboriosam
          architecto, ex sint eum sapiente temporibus animi accusamus quis
          quaerat soluta dolores!
        </p>

        <div className={css.menu__buttons}>
          {screen === 'desktop' ? (
            <>
              <Button text="wina" />
              <Button text="wina na kieliszki" />
              <Button text="alkohole" />
            </>
          ) : (
            <Button
              text={<span>Więcej</span>}
              icon={<Icon id="arrow-down" />}
            />
          )}
        </div>
      </div>
    </Section>
  );
}

export { Menu };
