const wrapper = document.querySelector('.wrapper');
const image = document.querySelector('img');

//zmienna dla pozycji kliknięcia w obrazek
let startPos = { x: 0, y: 0 };

//zmienna dla informacji czy obrazek jest aktualnie powiększony
let isZoomIn = false;

wrapper.addEventListener('mousedown', (e) => {
  //pobieram współrzędne x oraz y, w którym user kliknął na stronie
  const { x, y } = e;

  image.classList.toggle('active');

  //zmieniam flagę na przeciwną - toggle
  isZoomIn = !isZoomIn;

  console.log({ wrapper });

  //ustawiam początkową pozycję tam gdzie kliknął user
  startPos = { x: x - wrapper.offsetLeft, y: y - wrapper.offsetTop };

  //Jeżeli zdjęcie przestaje być przybliżone to resetuję pozycję zdjęcia
  if (!isZoomIn) {
    image.style.transform = 'unset';
  } else {
    setImageTranslate(startPos.x, startPos.y);
  }
});

wrapper.addEventListener('mousemove', (e) => {
  //przesuwanie ma  działać tylko gdy zdjęcie jest powiększone
  if (isZoomIn) {
    //pobieram współrzędne x oraz y gdzie obecnie znajduje się kursor myszy
    const { x, y } = e;

    const offsetX = x - wrapper.offsetLeft;
    const offsetY = y - wrapper.offsetTop;

    setImageTranslate(offsetX, offsetY);
  }
});

function getRelativeValues(x, y) {
  const coordX = (x / wrapper.clientWidth) * 100;
  const coordY = (y / wrapper.clientHeight) * 100;

  return { coordX, coordY };
}

function setImageTranslate(x, y) {
  const { coordX, coordY } = getRelativeValues(x, y);
  const boundyX = (wrapper.clientWidth / image.naturalWidth) * 100;
  const boundyY = (wrapper.clientHeight / image.naturalHeight) * 100;

  image.style.transform = `translate(${0 - coordX + boundyX}%, ${0 - coordY + boundyY}%)`;
}
