
import { Placemark, Map, YMaps } from 'react-yandex-maps';
import { Car } from '../../shared/types';


export interface PlaceMarks {
    placemarks?: Car[]
}

const MyMap = ({ placemarks }: PlaceMarks) => {
    return (
        <YMaps>
            <Map modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} width={500} height={500} defaultState={{ center: [59.9386, 30.3141], zoom: 9 }}>
                {placemarks?.map(({ color, id, latitude, longitude, model, name, price, year }) => <Placemark properties={{
                    hintContent: `<b>${name} </b>`,
                    balloonContent: `<div class='bg-white rounded-sm p-1'>
                                    <h5>${name},${model}</h5>
                                    <h6>${price} руб.,${year}г.</h6>
                                </div>`,
                }}
                    options={{
                        preset: 'islands#circleIcon',
                    }}
                    key={name + latitude} geometry={[latitude, longitude]} />)}
            </Map>
        </YMaps>
    );
}
export default MyMap
