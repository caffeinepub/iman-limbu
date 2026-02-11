/**
 * Helper to apply site metadata to the document head
 */
export function setSiteMetadata(siteName: string) {
  // Set document title
  document.title = siteName;

  // Set or update Open Graph title meta tag
  let ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (!ogTitleMeta) {
    ogTitleMeta = document.createElement('meta');
    ogTitleMeta.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitleMeta);
  }
  ogTitleMeta.setAttribute('content', siteName);

  // Set or update description meta tag
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', siteName);

  // Set or update Open Graph description meta tag
  let ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  if (!ogDescriptionMeta) {
    ogDescriptionMeta = document.createElement('meta');
    ogDescriptionMeta.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescriptionMeta);
  }
  ogDescriptionMeta.setAttribute('content', siteName);
}
