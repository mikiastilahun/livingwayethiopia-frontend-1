import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '450px'

};
const MapDisplay = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
                lat: 9.010364,
                lng: 38.744669
            }}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
            clickableIcons
            options={{
                disableDefaultUI: true,
                fullscreenControl: false,
                gestureHandling: "cooperative",
                // restriction: {
                //     strictBounds: true,
                //     latLngBounds: {
                //         north: 32.95418,
                //         south: 3.42206,
                //         east: 47.78942,
                //         west: 14.95943,
                //     },
                // },
            }}
        />
    ) : <></>
}

export default MapDisplay