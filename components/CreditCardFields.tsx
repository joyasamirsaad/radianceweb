import InputField from "./InputField";

interface Props {
  cardNumber: string;
  cardNumberError: string;
  setCardNumber: (v: string) => void;
  handleCardNumberBlur: () => void;

  expiryDate: string;
  expiryDateError: string;
  setExpiryDate: (v: string) => void;
  handleExpiryDateBlur: () => void;

  cvv: string;
  cvvError: string;
  setCvv: (v: string) => void;
  handleCvvBlur: () => void;
}

export default function CreditCardFields({
  cardNumber,
  cardNumberError,
  setCardNumber,
  handleCardNumberBlur,

  expiryDate,
  expiryDateError,
  setExpiryDate,
  handleExpiryDateBlur,

  cvv,
  cvvError,
  setCvv,
  handleCvvBlur,
}: Props) {
  return (
    <div className="deliverynested">
      <InputField
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        error={cardNumberError}
        onChange={(e) => setCardNumber(e.target.value)}
        onBlur={handleCardNumberBlur}
        className="credit"
      />
      <InputField
        type="text"
        name="expiryDate"
        placeholder="MM/YY"
        value={expiryDate}
        error={expiryDateError}
        onChange={(e) => setExpiryDate(e.target.value)}
        onBlur={handleExpiryDateBlur}
        className="credit"
      />
      <InputField
        type="text"
        name="cvv"
        placeholder="CVV"
        value={cvv}
        error={cvvError}
        onChange={(e) => setCvv(e.target.value)}
        onBlur={handleCvvBlur}
        className="credit"
      />
    </div>
  );
}
