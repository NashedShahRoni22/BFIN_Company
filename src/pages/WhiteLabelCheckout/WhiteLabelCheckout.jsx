import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { whiteLabelChecoutData } from "../../data/whiteLabelCheckoutData";

export default function WhiteLabelCheckout() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "1";
  const [countries, setCountries] = useState([]);
  const [selectedSoftware, setSelectedSoftware] = useState(
    whiteLabelChecoutData[id] || whiteLabelChecoutData["1"],
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    country: "",
    software: selectedSoftware.name,
    features: selectedSoftware.features
      .filter((feat) => feat.required)
      .map((feat) => ({ name: feat.name, price: feat.price })),
    freeProduct: "payroll admin",
    paymentType: "full payment",
    paymentMethod: "bank transfer",
    totalPrice: totalPrice,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const feature = selectedSoftware.features.find(
          (feat) => feat.name === value,
        );

        return {
          ...prev,
          features: checked
            ? [...prev.features, { name: feature.name, price: feature.price }] // Add feature as object
            : prev.features.filter((f) => f.name !== feature.name), // Remove feature
        };
      }

      return { ...prev, [name]: value };
    });
  };

  //  Update software info on Select Software Dropdown
  const handleSoftwareChange = (e) => {
    const newSoftware = whiteLabelChecoutData[e.target.value];
    setSelectedSoftware(newSoftware);

    setFormData((prev) => ({
      ...prev,
      software: newSoftware.name,
      features: newSoftware.features
        .filter((feat) => feat.required)
        .map((feat) => ({ name: feat.name, price: feat.price })), // Ensure objects with price
    }));
  };

  // Handle Checkout Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // update price on software dropdown change or additional feature checkbox click
  useEffect(() => {
    const newTotal =
      selectedSoftware.price +
      formData.features.reduce((acc, feat) => acc + (feat.price || 0), 0);
    setTotalPrice(newTotal);
  }, [selectedSoftware, formData.features]);

  // fetch all country name & dial code
  useEffect(() => {
    fetch("/country.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFormData((prev) => ({ ...prev, country: data[0].name }));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="w-full px-5 py-10 font-roboto md:mx-auto md:max-w-4xl md:py-20">
      <h1 className="mb-16 text-center font-montserrat text-2xl font-semibold md:text-3xl">
        Buy BFIN {selectedSoftware?.name}
      </h1>

      <form onSubmit={handleSubmit} className="w-full rounded border p-5">
        {/* name filed */}
        <div>
          <label htmlFor="name" className="font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* email field */}
        <div className="mt-4">
          <label htmlFor="email" className="font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* contact field */}
        <div className="mt-4">
          <label htmlFor="contact" className="font-medium">
            Contact:
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="Enter your contact number"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* address field */}
        <div className="mt-4">
          <label htmlFor="address" className="font-medium">
            Address:
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* country dropdown */}
        <div className="mt-4">
          <label htmlFor="country" className="font-medium">
            Country:
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          >
            {countries.map((country, i) => (
              <option key={i} value={country?.name}>
                {country?.name}
              </option>
            ))}
          </select>
        </div>

        {/* select software dropdown */}
        <div className="mt-8 flex w-full justify-between">
          <label htmlFor="software" className="w-1/2 font-medium">
            Select Software:
          </label>
          <select
            onChange={handleSoftwareChange}
            name="software"
            id="software"
            className="w-1/2 rounded border px-3 py-1.5 outline-none focus:border-primary"
          >
            {Object.entries(whiteLabelChecoutData).map((software, i) => (
              <option
                key={i}
                value={software[0]}
                defaultValue={id === software[0]}
              >
                {software[1]?.name}
              </option>
            ))}
          </select>
        </div>

        {/* product name */}
        <div className="mt-4 flex w-full justify-between">
          <p className="w-1/2 font-medium">Product Name:</p>
          <p className="w-1/2 text-gray-600">
            Hosting panel, create your own branded products, dedicated to you,
            view and manage clients invoicing, support and more.
          </p>
        </div>

        {/* base price */}
        <div className="mt-4 flex w-full justify-between font-medium">
          <p className="w-1/2">Price:</p>
          <p className="w-1/2 text-lg text-primary">
            €{selectedSoftware?.price}
          </p>
        </div>

        {/* total price */}
        <div className="mt-4 flex w-full justify-between font-medium">
          <p className="w-1/2">Total Price:</p>
          <p className="w-1/2 text-lg text-primary">€{totalPrice}</p>
        </div>

        {/* additional feature items */}
        <div className="mt-4">
          <p className="font-medium">Add Items From Below:</p>
          <div className="mt-2.5">
            {selectedSoftware.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  name={feat.name}
                  id={feat.name}
                  value={feat.name}
                  checked={formData.features.some((f) => f.name === feat.name)}
                  onChange={handleChange}
                  disabled={feat.required}
                />
                <label htmlFor={feat.name}>
                  {feat.name} €{feat.price}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Free White Label Product */}
        <div className="mt-4">
          <p className="font-medium">
            Select one of the the below white label software for free including
            in hosting:
          </p>
          <div className="mt-2.5 flex items-center gap-2.5 md:gap-6">
            <div className="space-x-2">
              <input
                type="radio"
                name="freeProduct"
                id="payroll"
                value="payroll admin"
                checked={formData.freeProduct === "payroll admin"}
                onChange={handleChange}
              />
              <label htmlFor="payroll">Payroll Admin</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                name="freeProduct"
                id="accounting"
                value="accounting admin"
                checked={formData.freeProduct === "accounting admin"}
                onChange={handleChange}
              />
              <label htmlFor="accounting">Accounting Admin</label>
            </div>
          </div>
        </div>

        {/* payment type */}
        <div className="mt-4">
          <p className="font-medium">Payment Type:</p>
          <div className="mt-2.5 space-x-2">
            <input
              type="radio"
              name="paymentType"
              id="paymentType"
              value="full payment"
              checked
              readOnly
            />
            <label htmlFor="paymentType">Full Payment</label>
          </div>
        </div>

        {/* payment method */}
        <div className="mt-4">
          <p className="font-medium">Payment Method:</p>
          <div className="mt-2.5 space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              id="paymentMethod"
              value="bank transfer"
              checked
              readOnly
            />
            <label htmlFor="paymentMethod">Pay by Bank Transfer to BFIN</label>
          </div>
        </div>

        {/* bank info */}
        <div className="mt-4">
          <p className="font-medium">Our Bank Transfer Details:</p>
          <p className="mt-2.5">
            <span className="font-medium">Bank:</span> LCL Bank France
          </p>
          <p className="my-1">
            <span className="font-medium">IBAN:</span> FR62 3000 2030 3700 0007
            3125 M63
          </p>
          <p>
            <span className="font-medium">BIC:</span> CRLYFRPP
          </p>
        </div>

        {/* bank payment details */}
        <div className="mt-4 space-y-1 border-t pt-4 text-gray-600">
          <p>
            Make your payment directly into the BFIN SASU bank account. Please
            use your Order ID as the payment reference.
          </p>
          <p>
            Your order will not be shipped electronically (the software transfer
            process to your server ) until the funds have cleared in our
            account. Once payment is received BFIN will contact you to start
            transferring the full software ownership to your server, loading the
            raw code backend and frontend with full ownership licence)
          </p>
          <p>
            Bank Transfer payments are made to BFIN SASU Reg no 53521773100012
            RCS Montpellier France registration office address 8 RUE DUBLIN
            34200 SETE FRANCE. All deliveries and returns to this electronic
            address support@boboshomail.com. Bobosoho by BFIN.
          </p>
          <p>
            www.officetools.bobosoho.com is managed by BFIN group. After
            verifying your payment the product will be activated within 24H.
          </p>
        </div>

        {/* submit button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="rounded bg-primary px-4 py-2 text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-[#145a97] md:w-1/2"
          >
            Confirm Payment
          </button>
        </div>

        {/* Contact Details */}
        <div className="mt-12 border-t pt-4">
          <h3 className="text-center text-2xl font-semibold md:text-3xl">
            Contact Us
          </h3>
          <div className="mt-4 flex justify-center gap-2 md:items-center">
            <p className="font-medium">Email:</p>
            <span>
              <a
                href="mailto:bfinsasu@gmail.com"
                className="text-primary underline"
              >
                bfinsasu@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:support@bobosohomail.com"
                className="text-primary underline"
              >
                support@bobosohomail.com
              </a>
            </span>
          </div>
          <p className="mt-2.5 md:text-center">
            <span className="font-medium">Skype: </span>
            bfin.ltd [Text or Call Appointment Only]
          </p>
        </div>
      </form>
    </section>
  );
}
