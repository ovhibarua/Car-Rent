function Image(add) {
  const { addImg, animate } = add;
  return <img className={animate} src={addImg} />;
}

export default Image;
