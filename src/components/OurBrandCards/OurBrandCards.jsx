import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { ourBrands } from "../../data/ourBrands";

export default function OurBrandCards() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleOpen = (content) => {
    setOpen(!open);
    setDialogContent(content);
  };

  return (
    <div className={`${isHome ? "w-full" : "md:w-2/3"}`}>
      <div
        className={`w-full gap-5 ${isHome ? "mt-10 grid grid-cols-2 sm:grid-cols-4 md:justify-around lg:grid-cols-5 xl:grid-cols-6" : "flex flex-wrap justify-center md:justify-normal"}`}
      >
        {ourBrands.map((service, i) => (
          <div key={i} className="w-32 md:w-44">
            <div className="size-32 bg-white md:size-44">
              {service.websiteUrl ? (
                <Link
                  to={service.websiteUrl}
                  target="_blanck"
                  className="flex h-full items-center justify-center rounded border p-4 shadow transition-all duration-200 ease-linear hover:border-primary"
                >
                  <img src={service.icon} alt={service.title} />
                </Link>
              ) : (
                <div
                  onClick={() => handleOpen(service.youtubeUrl)}
                  className="flex h-full cursor-pointer items-center justify-center rounded border p-4 shadow transition-all duration-200 ease-linear hover:border-primary"
                >
                  <img src={service.icon} alt={service.title} />
                </div>
              )}
            </div>
            <p className="mt-2.5 text-center text-sm font-semibold">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      <Dialog
        open={open}
        handler={handleOpen}
        size="lg"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className="h-[400px] p-0">
          <ReactPlayer
            url={dialogContent}
            loop
            controls
            width="100%"
            height="100%"
          />
        </DialogBody>
      </Dialog>
    </div>
  );
}
