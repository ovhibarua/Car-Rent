import { useNavigate } from "react-router";
function Button(add) {
  const navigate = useNavigate();
  const { button, btnStyle, btnAnimate, btnNavigate } = add;
  return (
    <button
      onClick={() => {
        navigate(btnNavigate);
      }}
      id={btnAnimate}
      className={`${btnStyle} cursor-pointer`}
    >
      {button}
    </button>
  );
}

export default Button;
