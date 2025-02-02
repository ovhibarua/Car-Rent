

function Button(add) {
    const { button } = add
    return (
        <button className='hover:cursor-pointer'>{button}</button>
    )
}

export default Button