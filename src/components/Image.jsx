

function Image(add) {
    const { addImg, animate } = add;
    return (
        <img className={animate} src={addImg} alt="img" />
    )
}

export default Image