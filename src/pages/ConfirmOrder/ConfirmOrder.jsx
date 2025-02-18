import { useEffect, useState } from "react";

export default function ConfirmOrder() {
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("orderData");

    if (savedData) {
      setOrderData(JSON.parse(savedData));
    }
  }, []);

  console.log(orderData);

  return (
    <section className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      <div className="mx-auto w-full max-w-4xl rounded border p-6 text-[15px]">
        <h1 className="text-center font-montserrat text-2xl font-semibold md:text-3xl">
          Confirm Order
        </h1>

        <div className="flex items-center justify-between gap-6 border-y py-3">
          <p>
            <span className="font-semibold">Date:</span> 30/12/2025
          </p>
          <p>
            <span className="font-semibold">Invoice No:</span> #awik125sI4
          </p>
        </div>

        <div>
          <div>
            <p className="font-semibold">Invoiced To:</p>
            <p>Jesse Pinkman</p>
            <p>Dhaka</p>
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
}
