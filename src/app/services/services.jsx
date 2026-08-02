import { UtensilsCrossed, Users, Clock, Heart } from "lucide-react";
import { useRef, useCallback, useMemo, memo } from "react";
import "./services.css";

function useCardTilt() {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.05s ease-out";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.3s ease-out";
    }
  }, []);

  return {
    cardRef,
    handleMouseMove,
    handleMouseLeave,
  };
}

const ServiceCard = memo(function ServiceCard({ service }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <div className="group transition-all duration-500 ease-out h-full w-full">
      <div
        ref={cardRef}
        tabIndex={0}
        className="group relative h-full p-6 sm:px-10 sm:py-8 rounded-3xl bg-black/35 backdrop-blur-md border border-white/20 hover:border-primary/40 shadow-[0_4px_30px_rgba(252,128,25,0.06),inset_0_1px_1px_rgba(252,128,25,0.08)] hover:shadow-2xl transition-all duration-200 overflow-hidden focus:outline-none flex flex-col items-center text-center service-card justify-between"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseLeave}
        onBlur={handleMouseLeave}
        aria-label={service.title}
      >
        {/* Inner subtle highlight */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />

        {/* Liquid glass hover bubble */}
        <div
          className="absolute inset-0 rounded-3xl bg-primary/15 border border-primary/25 scale-[0.85] opacity-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none"
          style={{
            transitionProperty: "all",
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.15, 0.64, 1)"
          }}
        />

        {/* Outer glow blur backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-200 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center space-y-4 h-full w-full justify-start">
          {/* Icon Box */}
          <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-primary/20 flex items-center justify-center border border-white/30 shadow-inner group-hover:bg-primary/30 backdrop-blur-sm transition-colors duration-300 shrink-0">
            <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary drop-shadow-sm group-hover:scale-110 transition-transform duration-200" />
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-200 text-center tracking-wide">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/95 leading-relaxed text-center font-normal">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
});

const services = [
  {
    icon: UtensilsCrossed,
    title: "Daily Tiffin Service",
    description: "Get fresh, घर का खाना in घर का स्वाद delivered daily at your doorstep. Perfect for working professionals and students."
  },
  {
    icon: Users,
    title: "Catering Services",
    description: "From office lunches to house parties to kitty parties to office meetings We've got you all covered."
  },
  {
    icon: Clock,
    title: "3-Time tiffin",
    description: "Choose your preferred meal combination - breakfast, lunch or dinner. We deliver you all."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every meal is prepared with love & care by our mother. We eat the same food we serve our customers."
  }
];

export function Services() {
  const serviceCardsJSX = useMemo(() => {
    return services.map((service) => (
      <ServiceCard key={service.title} service={service} />
    ));
  }, []);

  return (
    <section
      id="services"
      className="pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-36 min-h-[90vh] lg:min-h-screen flex flex-col justify-between items-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      {/* Background Image: /assets/img19.jpg */}
      <img
        src="/assets/img19.jpg"
        alt="Services Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "0px",
          top: "0px",
          right: "0px",
          bottom: "0px",
          objectFit: "cover",
          objectPosition: "center 0%",
          zIndex: 0,
        }}
        className="absolute inset-0 w-full h-full blur-[1px] opacity-60"
        loading="lazy"
        decoding="async"
      />

      {/* Overlays matching liquid glass/dark theme - lightened shade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1536px] mx-auto relative z-10 flex flex-col justify-between flex-1 h-full my-auto">
        {/* Header right near the top */}
        <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-10 transition-all duration-700 ease-out opacity-100 translate-y-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FC8019] drop-shadow-md pb-1">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            From daily tiffins to special events, we've got you all covered
          </p>
        </div>

        {/* Cards centered in wider 2x2 layout */}
        <div className="flex-1 flex items-center justify-center w-full my-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch justify-center w-full max-w-6xl mx-auto">
            {serviceCardsJSX}
          </div>
        </div>
      </div>
    </section>
  );
}
