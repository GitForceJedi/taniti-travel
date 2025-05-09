export function openContactForm(theWidth, theHeight) {
  const width = theWidth || 800;
  const height = theHeight || 1000;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  window.open(
    '/contact-popup',
    'ContactForm',
    `width=${width},height=${height},top=${top},left=${left},resizable=yes`
  );
}
