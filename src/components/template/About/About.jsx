import { Section } from '../Section/Section';

function About() {
  return (
    <Section title="o nas">
      <img
        style={{
          width: '258px',
          height: '328px',
          background: 'black',
        }}
        src="path_to_image"
        alt="Main billboard"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias animi hic
        perspiciatis nam asperiores, placeat adipisci earum corporis fugiat
        molestiae eveniet commodi, necessitatibus possimus! Eos voluptate quo
        corrupti aliquid. Omnis impedit veniam nulla? Ducimus id in amet quae
        recusandae!
      </p>
    </Section>
  );
}

export { About };
