import React from "react";
import Marquee from "react-fast-marquee";

export default function KeywordsMerque() {
  return (
    <div className="py-10 md:py-20 flex flex-col gap-5 md:gap-10">
      <Marquee
        speed={100}
        pauseOnHover
        direction="right"
        className="text-2xl md:text-4xl lg:text-6xl uppercase overflow-hidden font-semibold"
      >
        IT research . Software Development . IT Security . Hosting Provider .
        Wordpress Development . Custom Website Development . Software Quality
        Assurance . OMADA HR PAYROLL . CLASICO PAYSLIPS . PENSAKI VAULT HOSTING .
        BITSS CYBER SECURITY . PENSAKI DOC WRITER . PDF CONVERTOR SOHO SERVER
        HOSTING
      </Marquee>
      <Marquee
        speed={100}
        pauseOnHover
        className="text-2xl md:text-4xl lg:text-6xl uppercase text-primary overflow-hidden font-semibold"
      >
        IT research . Software Development . IT Security . Hosting Provider .
        Wordpress Development . Custom Website Development . Software Quality
        Assurance . OMADA HR PAYROLL . CLASICO PAYSLIPS . PENSAKI VAULT HOSTING .
        BITSS CYBER SECURITY . PENSAKI DOC WRITER . PDF CONVERTOR SOHO SERVER
        HOSTING
      </Marquee>
    </div>
  );
}
