

function Button(add) {
    const { button, btnStyle, btnAnimate } = add
    return (
        <button id={btnAnimate} className={`${btnStyle} cursor-pointer`}>{button}</button>
    )
}

export default Button