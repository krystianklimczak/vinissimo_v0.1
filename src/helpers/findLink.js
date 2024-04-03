import links from '../data/contactLinks.json';

function findLink(id) {
  return links.links.find(link => link.id === id);
}

export { findLink };
