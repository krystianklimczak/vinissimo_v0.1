import { ImageAtom } from '../atoms/ImageAtom/ImageAtom.jsx';
import { ParagraphAtom } from '../atoms/ParagraphAtom/ParagraphAtom.jsx';
import { TitleAtom } from '../atoms/TitleAtom/TitleAtom.jsx';
import { ListMolecule } from '../molecules/ListMolecule.jsx';
import { TestPageOrganism } from '../organisms/TestPageOrganism.jsx';

const contactItems = [
  { href: 'mailto:booking@vinissimorestaurant.pl', text: 'booking@vinissimorestaurant.pl' },
  { href: 'tel:+48881334449', text: '+48 881 334 449' },
  { href: 'https://www.instagram.com/vinissimorestaurant/', text: 'Instagram' },
  {
    href: 'https://www.facebook.com/vinissimorestaurant/?paipv=0&eav=AfZD_1vWDqDDMstTalt7K_3sV0oaHJKbfCPJ6W1njwZ1VgrVKQl2JglTz9fndKLvb4w&_rdr',
    text: 'Facebook',
  },
];
const publicAccess = name => process.env.PUBLIC_URL + '/images' + name;

const TestPageTemplate = () => {
  return (
    <>
      <TestPageOrganism
        mainImage={
          <ImageAtom
            src={publicAccess('/v1.jpg')}
            alt="Restaurant name with wine on the background"
          />
        }
      >
        <ImageAtom
          src={publicAccess('/BabyD.jpeg')}
          alt="Restaurant name with wine on the background"
        />
        <div>
          <TitleAtom
            text=" Savor the Anticipation: Our Website is Fermenting Something
        Extraordinary! Stay Tuned for a Tantalizing Blend of Wine and Culinary
        Delights."
          />
          <ParagraphAtom text="Vinissimo Restaurant & Wine Bar (dawniej Sztuczka Bistro)" />
          <ParagraphAtom text="Sopot, ul. Bema 6" />
          <ParagraphAtom text="Skontaktuj się z nami:" />
          <ListMolecule items={contactItems} />
        </div>
      </TestPageOrganism>
    </>
  );
};

export { TestPageTemplate };
