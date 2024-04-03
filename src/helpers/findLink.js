import links from '../data/contactLinks.json';

function findLink(id) {
  return links.links.find(link => link.id === id);
}

const { href: hrefInstagram } = findLink('instagram');
const { href: hrefFacebook } = findLink('facebook');
const { href: hrefPhoneNumber } = findLink('phone');
const { href: hrefEmail } = findLink('mail');

export { findLink, hrefInstagram, hrefFacebook, hrefPhoneNumber, hrefEmail };
