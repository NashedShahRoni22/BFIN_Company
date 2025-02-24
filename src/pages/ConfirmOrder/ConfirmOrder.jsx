import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateDate } from "../../utils/generateData";
import { generateInvoiceId } from "../../data/generateInvoiceId";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function ConfirmOrder() {
  const baseUrl = import.meta.env.VITE_Base_Url;
  const invoiceId = "BFINITSW" + generateInvoiceId();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("orderData");

    if (savedData) {
      setOrderData(JSON.parse(savedData));
    }
  }, []);

  // confirm order submit
  const handleConfirmOrder = async () => {
    setLoading(true);

    const {
      name,
      email,
      address,
      country,
      software,
      paymentType,
      totalPrice,
      addonsSoftwares,
      partialPrice,
    } = orderData;

    const newOrderData = {
      order_id: invoiceId,
      name,
      email,
      address,
      country,
      software,
      payment_type: paymentType,
      price: partialPrice ? partialPrice : totalPrice,
      addone_software: addonsSoftwares,
      status: true,
    };

    try {
      const res = await fetch(`${baseUrl}/payments/payment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrderData),
      });
      const data = await res.json();
      if (data.success === true) {
        setLoading(false);
        window.alert(data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      window.alert(error.message);
    }
  };

  return (
    <section className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      <div className="mx-auto w-full max-w-4xl rounded border p-6 text-[15px]">
        <h1 className="text-center text-2xl font-semibold md:text-3xl">
          Confirm Order
        </h1>

        <div className="mt-4 flex justify-between gap-16 border-t py-4">
          <div>
            <p className="font-semibold">Invoiced To:</p>
            <p>{orderData?.name}</p>
            <p>{orderData?.address}</p>
            <p>{orderData?.country}</p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Invoice No:</span> #{invoiceId}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {generateDate()}
            </p>
          </div>
        </div>

        <p>
          <span className="font-semibold">Software Name:</span>{" "}
          {orderData?.software}
        </p>

        {orderData.freeProduct && (
          <p className="mt-1 capitalize">
            <span className="font-semibold">Free Software:</span>{" "}
            {orderData?.freeProduct}
          </p>
        )}

        <p className="mt-1 capitalize">
          <span className="font-semibold">Payment Type:</span>{" "}
          {orderData?.paymentType}{" "}
          {orderData.duePrice && orderData.partialPrice && "(20%)"}
        </p>

        <p className="mt-1 capitalize">
          <span className="font-semibold">Payment Method:</span>{" "}
          {orderData?.paymentMethod}
        </p>

        <p className="mt-3 font-semibold">Additional Addons:</p>
        <table className="mt-1.5 w-full border-collapse border border-gray-300 text-lg">
          <thead>
            <tr className="bg-gray-100 text-[17px]">
              <th className="w-full border border-gray-300 px-4 py-2 text-left">
                Item
              </th>
              <th className="w-fit border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300 text-[15px]">
              <td className="border px-4 py-2">{orderData?.software}</td>
              <td className="border px-4 py-2">€{orderData?.basePrice}</td>
            </tr>
            {orderData &&
              orderData?.addonsSoftwares &&
              orderData?.addonsSoftwares.length > 0 &&
              orderData?.addonsSoftwares?.map((addon, i) => (
                <tr key={i} className="border border-gray-300 text-[15px]">
                  <td className="border px-4 py-2">{addon.name}</td>
                  <td className="border px-4 py-2">€{addon.price}</td>
                </tr>
              ))}

            {orderData.duePrice && (
              <tr className="border border-gray-300 bg-gray-100 text-[17px]">
                <td className="border px-4 py-2 text-right">Due</td>
                <td className="border px-4 py-2">€{orderData?.duePrice}</td>
              </tr>
            )}

            {orderData.partialPrice ? (
              <tr className="border border-gray-300 bg-gray-100 text-[17px] font-semibold">
                <td className="border px-4 py-2 text-right">Total</td>
                <td className="border px-4 py-2">€{orderData?.partialPrice}</td>
              </tr>
            ) : (
              <tr className="border border-gray-300 bg-gray-100 text-[17px] font-semibold">
                <td className="border px-4 py-2 text-right">Total</td>
                <td className="border px-4 py-2">€{orderData?.totalPrice}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-8 flex items-center justify-center gap-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-lg font-medium transition-all duration-200 ease-linear hover:text-primary"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmOrder}
            disabled={loading}
            className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-[#145a97]"
          >
            Confirm Order
            {loading && (
              <LiaSpinnerSolid className="animate-spin text-2xl text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
