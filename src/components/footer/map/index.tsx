import React from 'react'

const containerStyle = {
    width: '100%',
    height: '450px'
};
const MapDisplay = () => {
    return (
        <iframe
            width="100%"
            height="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7385530522665!2d38.754512314828894!3d8.996187991978898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f25d21998b%3A0xbd3d2162cc867442!2sLiving%20Way%20Church%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1641384614879!5m2!1sen!2set" style={{ border: 0 }}
            loading="lazy"
            allowFullScreen={false}
        />
    )
}

export default MapDisplay