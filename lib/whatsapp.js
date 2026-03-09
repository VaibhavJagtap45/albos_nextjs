export const WA_NUMBER = '919766650411';

export function waLink(message = "Hi, I'd like to discuss a project with Albos Technologies.") {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  window.open(waLink(message), '_blank', 'noopener,noreferrer');
}
