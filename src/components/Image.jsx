import React from 'react'

function Image(add) {
    const { addImg } = add;
    return (
        <img src={addImg} alt="img" />
    )
}

export default Image