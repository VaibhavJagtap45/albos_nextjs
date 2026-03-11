export const WA_NUMBER = "917385544769";

export function waLink(
  message = "Hi Nihal,\nI'd like to discuss a project with Albos Technologies.",
) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}
