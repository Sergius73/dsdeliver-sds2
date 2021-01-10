import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = {
    lat: -22.278853, 
    lng: -42.532454
}
function OrderLocation() {
    return (
        <div className="oders-location-container">
            <div className="order-loaction-content">
                <h3 className="order-location-title">
                    Selecione onde seu pedido deve ser entregue:
                </h3>
                <div className="filter-container">

                </div>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Meu localizador
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default OrderLocation;