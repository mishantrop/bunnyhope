export const initYandexMap = (mapId) => {
  const ymapElement = document.getElementById(mapId);
  if (!ymapElement) {
    return false;
  }

  const center = ymapElement.getAttribute('data-coords').split(',');
  const title = ymapElement.getAttribute('data-title');

  if (!ymaps) {
    console.warn('Yandex Maps is not loaded :(');
  }

  ymaps.ready(() => {
    var map = new ymaps.Map(mapId, {
      center: [ Number(center[0].trim()), Number(center[1].trim()) ],
      controls: [],
      zoom: 16,
    });
    map.behaviors.disable('scrollZoom');
    // map.behaviors.disable('drag');
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        position: {
          top: 20,
          right: 20,
        },
        size: 'large',
      },
    });
    map.controls.add(zoomControl);

    const myPlacemark = new ymaps.Placemark(
      center,
      {
        hintContent: 'Bunny Hop',
        balloonContent: title,
        iconImageHref: '/assets/templates/main/images/yamap-ico.png',
      },
    );
    map.geoObjects.add(myPlacemark);
  });
};
