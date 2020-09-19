export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) { // se a verificação for falsa '!' executa o callback
      element.removeAttribute(outside);

      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick); });
    });
    element.setAttribute(outside, '');
  }
}
