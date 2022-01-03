import React from 'react'

const containerStyle = {
    width: '100%',
    height: '450px'
};
const MapDisplay = () => {
    return <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen={false}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      &q=Mexico,AddisAbaba+ET`}
    />
}

export default MapDisplay