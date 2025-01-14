import React, { useEffect, useState } from "react";
import { BiCopyright, BiHome, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import animData from "../assets/contact-anim.json";
import Lottie from "react-lottie";
import {
  Input,
  Option,
  Select,
  Spinner,
  Textarea,
} from "@material-tailwind/react";
import { MdArrowOutward } from "react-icons/md";
import logo from "../../src/assets/bitss_icon.png";
import Captcha from "./Captcha";
import { smtpexpressClient } from "./smtp";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animData,
  };

  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    skypeId: "",
    subject: "",
    message: "",
    captchaInput: "",
  });

  const [captchaAnswer, setCaptchaAnswer] = useState(null);
  const [invalidCaptcha, setInvalidCaptcha] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  const [invalidKey, setInvalidKey] = useState(false);
  const [forbiddenWords, setForbiddenWords] = useState([]);

  useEffect(() => {
    fetch("/country.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading country data:", error));

    fetchForbiddenWords();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchForbiddenWords = async () => {
    const apiUrl = "https://bitts.fr/api.php";

    try {
      const credential = await fetch("/credential.json");
      const credentialsData = await credential.json();
      if (
        !credentialsData ||
        !credentialsData.username ||
        !credentialsData.password
      ) {
        return;
      }

      const servername = window.location.hostname;
      const data = { ...credentialsData, servername };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setForbiddenWords(result ?? []);
      } else {
        setInvalidKey(true);
      }
    } catch (error) {
      console.error("Error fetching forbidden words:", error);
      setInvalidKey(true);
    }
  };

  const checkForbiddenWords = (message) => {
    for (const word of forbiddenWords) {
      if (message.toLowerCase().includes(word.toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (parseInt(formData.captchaInput, 10) !== captchaAnswer) {
      setInvalidCaptcha(true);
      setLoader(false);
      return;
    } else {
      setInvalidCaptcha(false);
    }

    if (!checkForbiddenWords(formData.message)) {
      setInvalidMessage(true);
      setLoader(false);
      return;
    } else {
      setInvalidMessage(false);
    }
    try {
      // Create a formatted message to send
      const formattedMessage = `
          Name: ${formData.name}
          <br />
          Email: ${formData.email}
          <br />
          Subject: ${formData.subject}
          <br />
          Phone: ${formData.phone}
          <br />
          Country: ${formData.country}
          <br />
          Skype ID: ${formData.skypeId}          
          <br />
          Message: ${formData.message}
      `;
      // Sending an email using SMTP
      await smtpexpressClient.sendApi.sendMail({
        // Subject of the email
        subject: `BFINIT Contact Form Submission from ${formData.name}`,
        // Body of the email
        message: `${formattedMessage}`,
        // Sender's details
        sender: {
          // Sender's name
          name: "BFINIT",
          // Sender's email address
          email: "bfinit-9b2b98@projects.smtpexpress.com",
        },
        // Recipient's details
        recipients: {
          // Recipient's email address (obtained from the form)
          // email: `${formData.email}`,
          email: `support@bobosohomail.com`,
        },
      });

      // Notify user of successful submission
      alert("Contact message sent. Our support team will reach you soon.");
      navigate("/");
      setLoader(false);
    } catch (error) {
      // Notify user if an error occurs during submission
      alert("Oops! Something went wrong. Please try again later.");
      // You can console.log the error to know what went wrong
      setLoader(false);
      console.log(error);
    }
  };

  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-8">
          <h5 className="md:text-2xl font-semibold">Contact Us</h5>
          <p className="text-xl md:text-3xl text-primary font-semibold">
            To make requests for further information, contact us via our social
            channels.{" "}
          </p>
          <div className="flex gap-5">
            <div className="p-4 shadow text-primary bg-gray-100 rounded-xl h-fit w-fit flex justify-center items-center">
              <BiHome className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Address</h5>
              <p>8 rue de Dublin, 34200, Sète, France</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 shadow text-primary bg-gray-100 rounded-xl h-fit w-fit flex justify-center items-center">
              <BiPhone className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Phone</h5>
              <p>+0033666100010</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 shadow text-primary bg-gray-100 rounded-xl h-fit w-fit flex justify-center items-center">
              <MdEmail className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Email</h5>
              <p>support@bobosohomail.com</p>
              <p>bfin@bobosohomail.com</p>
            </div>
          </div>
        </div>
        <div className="">
          <Lottie options={defaultOptions} />
        </div>
      </div>

      <h5 className="md:text-2xl font-semibold text-end mt-10 md:mt-20">
        Send Message
      </h5>
      <p className="text-xl md:text-3xl text-primary font-semibold text-end mt-4 md:mt-8">
        Get in touch
      </p>

      <div className="grid gap-8 lg:grid-cols-2 md:gap-16 mt-10 md:mt-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 shadow rounded p-8"
        >
          <Input
            variant="outlined"
            label="Enter Name"
            type="text"
            name="name"
            color="indigo"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            variant="outlined"
            label="Enter Email"
            type="email"
            name="email"
            color="indigo"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            variant="outlined"
            label="Enter Phone"
            type="number"
            name="phone"
            color="indigo"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Select
            variant="outlined"
            label="Select Country"
            color="indigo"
            onChange={(value) => setFormData({ ...formData, country: value })}
            required
          >
            {countries.map((country) => (
              <Option key={country.name} value={country.name}>
                {country.name}
              </Option>
            ))}
          </Select>
          <Input
            variant="outlined"
            label="Skype ID"
            type="text"
            name="skypeId"
            color="indigo"
            value={formData.skypeId}
            onChange={handleChange}
          />
          <Input
            variant="outlined"
            label="Subject/Query"
            type="text"
            name="subject"
            color="indigo"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <Textarea
            variant="outlined"
            label="Enter Message"
            name="message"
            color="indigo"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Captcha Component */}
          <Captcha onCaptchaGenerated={setCaptchaAnswer} />

          <Input
            variant="outlined"
            label="Enter Captcha"
            type="text"
            name="captchaInput"
            color="indigo"
            value={formData.captchaInput}
            onChange={handleChange}
            required
          />

          {invalidCaptcha && (
            <p className="text-red-500">Invalid Captcha! Please try again.</p>
          )}
          {invalidMessage && (
            <p className="text-red-500">
              Your message contains forbidden words.
            </p>
          )}
          {invalidKey && <p className="text-red-500">Invalid API Key.</p>}

          <button
            type="submit"
            className="px-8 py-2 rounded border border-primary hover:bg-primary text-primary hover:text-white font-semibold md:w-fit flex items-center justify-center gap-4 duration-300 ease-linear group"
          >
            {loader ? (
              <Spinner className="h-5 w-5" />
            ) : (
              <>
                <span>Send Message</span>
                <MdArrowOutward className="text-xl group-hover:rotate-45 duration-300 ease-linear" />
              </>
            )}
          </button>
          <div className="mt-5">
            <p className="flex gap-1 items-center justify-center text-xs">
              <BiCopyright /> 2024 BFIN. BITSS by BFIN. All rights reserved.
            </p>
            <div className="flex flex-col justify-center items-center gap-2.5 mt-2.5">
              <img src={logo} alt="" loading="lazy" />
              <p className="text-xs">
                This form is powered by bitss cyber security
              </p>
            </div>
          </div>
        </form>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5795.795980198256!2d3.708454!3d43.420958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1357c2efa6fbb%3A0xddfc93666aef9f37!2s8%20Rue%20de%20Dublin%2C%2034200%20S%C3%A8te%2C%20France!5e0!3m2!1sen!2sbd!4v1723619506631!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
