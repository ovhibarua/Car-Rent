import NavbarSide from "../CarCategory/NavbarSide";
import Details from "./Details";

function CarDetails() {
  return (
    <section className="container mx-auto flex justify-baseline">
      <NavbarSide />
      <Details />
    </section>
  );
}

export default CarDetails;
