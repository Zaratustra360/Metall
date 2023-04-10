import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import style from "./YandexMap.module.sass";
import { useEffect } from "react";

const YandexMap = () => (
  <YMaps defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
    <Map
      defaultState={{
        center: [59.93901532822781, 30.439797339626374],
        zoom: 11,
      }}
      className={style.map}
    >
      <Placemark geometry={[59.93901532822781, 30.439797339626374]} />
    </Map>
  </YMaps>
);

export default YandexMap;
