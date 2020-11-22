import React, { useContext } from "react";
import { CurrencyContext } from "../../CurrencyContext";
import { ProductContext } from "../../ProductContext";

function CurrencySelect() {
  const { data, loading, error, setCurrency } = useContext(CurrencyContext);
  const { updateCurrency } = useContext(ProductContext);
  if (loading) return <p>loading...</p>;
  if (error) return <p>errror.message</p>;

  const handleChange = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
    updateCurrency(e.target.value);
    // getProduct({variables: {currency : e.target.value}})
  };

  return (
    <form>
      <select name="currency" id="currency" onChange={(e) => handleChange(e)}>
        {data.currency.map((currency, index) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </form>
  );
}

export default CurrencySelect;

// new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(number)
