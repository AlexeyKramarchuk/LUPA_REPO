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

  //ustawiam początkową pozycję tam gdzie kliknął user
  startPos = { x, y };

  //Jeżeli zdjęcie przestaje być przybliżone to resetuję pozycję zdjęcia
  if (!isZoomIn) {
    image.style.transform = 'unset';
  }
});

wrapper.addEventListener('mousemove', (e) => {
  //pobieram współrzędne x oraz y gdzie obecnie znajduje się kursor myszy
  const { x, y } = e;

  //przesuwanie ma  działać tylko gdy zdjęcie jest powiększone
  if (isZoomIn) {
    //obliczam o ile px w osi x oraz y użytkownik poruszył myszką od punktu w którym kliknął
    const diff = { x: x - startPos.x, y: y - startPos.y };

    //zamieniam różnicę w px na % względem wrappera, aby user mógł zobaczyć całe zdjęcie niezależnie o ile jest ono większe niż wrapper
    const relativeDiff = { x: (diff.x / wrapper.clientWidth) * 100, y: (diff.y / wrapper.clientHeight) * 100 };

    //przesuwam zdjęcie wewnątrz kontenera
    image.style.transform = `translate(${relativeDiff.x}%, ${relativeDiff.y}%)`;
  }
});
