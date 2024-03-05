
const priceElements = document.querySelectorAll('.price');

priceElements.forEach(priceElement => {
    const price = priceElement.textContent.trim();
    const priceWithEuro = `${price}€`;
    priceElement.textContent = priceWithEuro;
});