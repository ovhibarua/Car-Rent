import { useNavigate } from "react-router";

function Divide(add) {
  const navigate = useNavigate();
  const { divide, view } = add;
  return (
    <div className="flex justify-between items-center mb-8">
      <p className="paraSkys font-[500]">{divide}</p>
      <p
        onClick={() => {
          navigate("/category");
        }}
        className="text-[#3563E9] font-bold cursor-pointer"
      >
        {view}
      </p>
    </div>
  );
}

export default Divide;
