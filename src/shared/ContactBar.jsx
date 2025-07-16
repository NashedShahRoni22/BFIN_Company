import { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Container from "./Container";

export default function ContactBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Translate initialization
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element",
    );
  };

  // Add Google Translate script
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  // Scroll hide logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 50 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`border-b border-white/20 bg-white/10 py-0.5 text-white backdrop-blur-sm backdrop-saturate-150 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed left-0 right-0 top-0 z-50`}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-lg" />
            <span className="hidden sm:inline">
              8 rue de Dublin, 34200, Sète, France
            </span>
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-end gap-4 md:gap-8">
            <div className="relative h-fit w-full flex-1">
              <div
                id="google_translate_element"
                className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block"
              ></div>
              <p className="scale-0">translate</p>
            </div>

            <a
              href="tel:+33666100010"
              className="flex items-center gap-1 hover:underline"
            >
              <BiPhoneCall className="text-lg" />
              <span className="hidden sm:inline">+33 6 66 10 00 10</span>
            </a>

            <a
              href="mailto:support@bobosohomail.com"
              className="flex items-center gap-1 hover:underline"
            >
              <MdEmail className="text-lg" />
              <span className="hidden sm:inline">support@bobosohomail.com</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
