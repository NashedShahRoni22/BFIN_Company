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

        <div className="flex justify-between gap-16 border-t py-4">
          <div>
            <p className="font-semibold">Invoiced To:</p>
            <p>Jesse Pinkman</p>
            <p>Dhaka</p>
            <p>Bangladesh</p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Invoice No:</span> #awik125sI4
            </p>
            <p>
              <span className="font-semibold">Date:</span> 30/12/2025
            </p>
          </div>
        </div>

        <p>
          <span className="font-semibold">Software Name:</span> White Label
          Payroll Software
        </p>

        <p>
          <span className="font-semibold">Free Software:</span> Payroll Admin
        </p>

        <p>
          <span className="font-semibold">Payment Type:</span> Full Payment
        </p>

        <p>
          <span className="font-semibold">Payment Method:</span> Bank Transfer
        </p>

        <p className="font-semibold">Additional Addons:</p>
        <table className="w-full border-collapse border border-gray-300 text-lg">
          <thead>
            <tr className="bg-gray-100t text-base">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Item
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300 text-base">
              <td className="border px-4 py-2">
                One year hosting for your clients software and other items
              </td>
              <td className="border px-4 py-2">€230</td>
            </tr>
            <tr className="border border-gray-300 text-base">
              <td className="border px-4 py-2">
                Web site design once off payment
              </td>
              <td className="border px-4 py-2">€320</td>
            </tr>
            <tr className="border border-gray-300 text-base">
              <td className="border px-4 py-2">
                Website payment integration with backend automation
              </td>
              <td className="border px-4 py-2">€75</td>
            </tr>
            <tr className="border border-gray-300 text-base">
              <td className="border px-4 py-2">
                Branded application for iOS and Android with maintenance
              </td>
              <td className="border px-4 py-2">€750</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
