import { useNavigate } from "react-router";
import Image from "./Image";

function Logo() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      className="cursor-pointer"
    >
      <Image addImg="/src/assets/Icons/Logo.png" />
    </div>
  );
}

export default Logo;
