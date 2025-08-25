import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function RaaSCarousel() {
  const slides = [
    {
      img: "/images/handshake.png", // Replace with your image
      title: "First Unicorn Hire",
      subtitle:
        "Start-up / Bootstrapped / Pre-seed / Seed// Early Stage Growth",
      description:
        "Perfect for startups, bootstrapped ventures, and early funded companies making their first key hires to shape culture and drive growth.",
      points: [
        "Founder-level attention",
        "Cultural fit focus",
        "Flexible engagement",
        "Unlimited Hiring, One Fixed Cost",
      ],
    },
    {
      img: "/images/handshake2.png", // Replace with your image
      title: "Building your first GTM team",
      subtitle: "Series A to Series B",
      description:
        "Scale your go-to-market efforts with dedicated recruiters who understand your growth trajectory and market needs.",
      points: [
        "GTM expertise",
        "Rapid scaling",
        "Market knowledge",
        "Performance tracking",
      ],
    },
    {
      img: "/images/handshake3.png", // Replace with your image
      title: "Scaling your GTM team",
      subtitle: "Series C to IPO / Private Equity",
      description:
        "Enterprise-level recruitment solutions for mature companies looking to scale efficiently and maintain quality.",
      points: [
        "Enterprise solutions",
        "Global reach",
        "Executive search",
        "Strategic partnership",
      ],
    },
    // Add more slides if needed
  ];

  // const [current, setCurrent] = useState(0);

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  // };

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // ✅ Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [current]); // runs whenever current changes
  return (
    <div>
      <section className="py-12 px-6 text-[#1B084C]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-museo">
            Who We Built RaaS For
          </h2>
          <p className=" mt-2">
            For founders and leaders who can’t afford slow or risky hires, RaaS
            is your embedded hiring engine — delivering the right people, faster
            and smarter.
          </p>
        </div>

        {/* Slide */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center relative h-[400px] md:h-[450px]">
          <motion.div
            key={current}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col md:flex-row w-full h-full absolute"
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={slides[current].img}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-left">
              <h3 className="text-xl font-bold text-purple-900 mb-2">
                {slides[current].title}
              </h3>
              <p className="text-[#6A1FFF] font-semibold mb-4">
                {slides[current].subtitle}
              </p>
              <p className="mb-4">{slides[current].description}</p>

              <ul className="space-y-2 mb-4">
                {slides[current].points.map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-[#6A1FFF]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 text-purple-800 hover:bg-purple-300"
          >
            <ChevronLeft size={18} />
          </button>

          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-purple-600" : "bg-purple-300"
              }`}
            ></span>
          ))}

          <button
            onClick={nextSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 text-purple-800 hover:bg-purple-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div
          className="  text-white relative overflow-hidden py-16"
          style={{
            backgroundImage: `url('/images/trasfrom.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"
          />

          <h3 className="text-3xl sm:text-4xl  mb-4 font-museo font-bold">
            Ready to Hire
            <span className="font-normal"> Without Limits?</span>
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto font-inter">
            Let’s build your next growth driving team — faster, smarter, and
            without hiring headaches.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="text-[#1B084C] bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Get Started Today </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

