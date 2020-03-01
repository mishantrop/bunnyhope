export const initYandexMap = (mapId) => {
  const ymapElement = document.getElementById(mapId);
  if (!ymapElement) {
    console.warn(`Element #${mapId} does not exists`);

    return false;
  }

  const center = ymapElement.getAttribute('data-coords').split(',');
  const title = ymapElement.getAttribute('data-title');

  if (!window.ymaps) {
    console.warn('Yandex Maps is not loaded :(');

    return false;
  }

  window.ymaps.ready(() => {
    const map = new window.ymaps.Map(mapId, {
      center: [Number(center[0].trim()), Number(center[1].trim())],
      controls: [],
      zoom: 16,
    });
    map.behaviors.disable('scrollZoom');
    // map.behaviors.disable('drag');
    const zoomControl = new window.ymaps.control.ZoomControl({
      options: {
        position: {
          top: 20,
          right: 20,
        },
        size: 'large',
      },
    });
    map.controls.add(zoomControl);

    const myPlacemark = new window.ymaps.Placemark(
      center,
      {
        hintContent: 'Bunny Hop',
        balloonContent: title,
        iconImageHref: '/assets/templates/main/images/yamap-ico.png',
      },
    );
    map.geoObjects.add(myPlacemark);
  });

  return true;
};
