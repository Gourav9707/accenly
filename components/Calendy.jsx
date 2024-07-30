import { useEffect } from "react";
import Typography from "./Typography";
import { useRouter } from "next/navigation";
import { InlineWidget } from "react-calendly";

const CalendlyPage = () => {
  const router = useRouter();

  useEffect(() => {
    // To avoid script reloading on route change
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, [router]);

  return (
    <div className="mt-[28px]">
      <Typography text="Book a meeting" size="H4" />
      <InlineWidget
        url="https://calendly.com/accenly"
        styles={{
          height: "78vh",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideGdprBanner: true,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
      />
    </div>
  );
};

export default CalendlyPage;
