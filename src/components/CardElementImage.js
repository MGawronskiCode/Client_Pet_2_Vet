import React from "react";

export default function CardElementImage ({image}) {
    return (
        <div>
            <img
                srcSet={image}
                alt='...'
                style={{ maxWidth: '3rem' }}/>
        </div>
    )
}