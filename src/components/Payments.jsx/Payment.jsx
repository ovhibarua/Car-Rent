import BillingInfo from "./BillingInfo";
import Confirmation from "./Confirmation";
import PaymentMethod from "./PaymentMethod";
import RentalInfo from "./RentalInfo";

function Payment() {
  return (
    <div className="py-8 container mx-auto">
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod />
      <Confirmation />
    </div>
  );
}

export default Payment;
