import React from "react";

export default function CardElementImage (props) {
    return (
        <div>
            <img
                srcSet={props.image}
                alt='...'
                style={{ maxWidth: '3rem' }}/>
        </div>
    )
}