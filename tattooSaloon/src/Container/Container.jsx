import React from 'react';
import { useEffect } from 'react';
export default function Container(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [props.src]);
    const containerStyles = {
        backgroundImage: `url(${props.src})`, // Correctly formatted URL
        backgroundSize: 'cover', // Optional: Make sure the background covers the container
        backgroundPosition: 'top', // Optional: Center the background image
        width: '100%', // Optional: Set width if necessary
        height: `${props.height}px`, // Optional: Set height if necessary
        color: 'white',
        display:'flex',
        alignItems:'center',
        justifyContent:`${props.justify}`,
        flexDirection:'column',
        fontSize:'2rem',
        fontWeight:'400',
    };

    return (
        <div style={containerStyles}>
            {props.children}
        </div>
    );
}
