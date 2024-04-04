import { Icon } from '../../atoms/Icon/Icon';
import { Section } from '../Section/Section';
import { Button } from '../../atoms/Button/Button';

function Menu() {
  return (
    <Section title="menu">
      <h3>przystawki</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis
        iusto ipsam ipsum perferendis, enim placeat similique doloribus totam
        veniam porro at autem rem pariatur facere sint suscipit esse dolores
        obcaecati quas ea corrupti neque repudiandae quod? Laboriosam
        architecto, ex sint eum sapiente temporibus animi accusamus quis quaerat
        soluta dolores!
      </p>

      <Button text={<span>Więcej</span>} icon={<Icon id="arrow-down" />} />
    </Section>
  );
}

export { Menu };
