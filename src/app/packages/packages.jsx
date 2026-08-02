import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useRef, useCallback, useMemo, memo } from "react";
import "./packages.css";

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
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;
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

const PackageCard = memo(function PackageCard({ pkg }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <div className="flex-1 flex flex-col group transition-all duration-500 ease-out h-full">
      <div
        ref={cardRef}
        tabIndex={0}
        className={`group relative flex-1 min-h-[460px] flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-black/35 backdrop-blur-md border border-white/20 hover:border-[#FC8019]/40 shadow-[0_4px_30px_rgba(252,128,25,0.06),inset_0_1px_1px_rgba(252,128,25,0.08)] hover:shadow-2xl transition-all duration-200 overflow-hidden focus:outline-none package-card ${
          pkg.popular ? "border-[#FC8019]/50 bg-black/45 shadow-[#FC8019]/10" : ""
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseLeave}
        onBlur={handleMouseLeave}
        aria-label={pkg.name}
      >
        {/* Inner subtle highlight */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#FC8019]/8 via-transparent to-transparent pointer-events-none" />

        {/* Liquid glass hover bubble */}
        <div
          className="absolute inset-0 rounded-3xl bg-[#FC8019]/15 border border-[#FC8019]/25 scale-[0.85] opacity-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none"
          style={{
            transitionProperty: "all",
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.15, 0.64, 1)"
          }}
        />

        {/* Outer glow blur backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FC8019]/20 via-accent/20 to-[#FC8019]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-200 pointer-events-none" />

        {/* Popular Top Badge */}
        {pkg.popular && (
          <div className="absolute top-0 right-0 bg-[#FC8019] text-white px-4 py-1 text-xs font-bold rounded-bl-2xl flex items-center gap-1.5 z-10 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Most Popular
          </div>
        )}

        <div className="relative z-10 flex flex-col flex-1 justify-between h-full space-y-6">
          {/* Header */}
          <div className="space-y-3 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">{pkg.name}</h3>
            <div className="space-y-1">
              <div className="flex flex-col items-center justify-center">
                {pkg.price && (
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FC8019] tracking-tight">{pkg.price}</span>
                )}
                {pkg.originalPrice && (
                  <div className="flex flex-row items-center gap-2 mt-1">
                    <span className="text-base sm:text-lg font-bold text-[#FC8019]">Festive Offer</span>
                    <span className="text-base sm:text-lg font-semibold text-white/60 line-through">{pkg.originalPrice}</span>
                  </div>
                )}
              </div>
              <p className="text-sm sm:text-base text-white/80 text-center leading-relaxed pt-1">{pkg.description}</p>
            </div>
          </div>

          {/* Features List */}
          <div className="flex-grow flex flex-col justify-start py-2">
            <ul className="space-y-3 text-left">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FC8019]/20 flex items-center justify-center shrink-0 border border-[#FC8019]/30">
                    <Check className="w-3 h-3 text-[#FC8019]" />
                  </div>
                  <span className="text-sm sm:text-base text-white/90 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer / Button */}
          <div className="pt-2">
            {pkg.popular ? (
              <Button
                className="w-full rounded-full font-bold text-base py-3 bg-[#FC8019] hover:bg-[#e07016] text-white shadow-lg shadow-[#FC8019]/30 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            ) : (
              <Button
                className="w-full rounded-full font-semibold text-base py-3 bg-white/5 backdrop-blur-xl border border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105"
                variant="ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const packages = [
  {
    name: "1 Day Meal",
    price: "₹75/- Meal",
    originalPrice: "₹130/- Meal",
    description: "Perfect for trying out our meal",
    features: [
      "Advanced Payment",
      "Two meal a day",
      "Fresh preparation",
      "On-time delivery",
      "Standard menu"
    ],
    popular: false
  },
  {
    name: "Monthly Veg",
    price: "₹3300/-",
    originalPrice: "₹3600/-",
    description: "Most popular among our vegetarian customers",
    features: [
      "Advanced Payment",
      "30 days of delicious meals",
      "Best value pricing",
      "On-time delivery",
      "Standard Menu",
      "sweets 3 days a week",
      "Weekend specials"
    ],
    popular: true
  },
  {
    name: "Event Catering",
    price: "Custom Quote",
    originalPrice: null,
    description: "For your special occasions",
    features: [
      "Customized menu",
      "Any number of guests",
      "Professional setup",
      "Multiple cuisines",
      "Dedicated service staff"
    ],
    popular: false
  }
];

export function Packages() {
  const packageCardsJSX = useMemo(() => {
    return packages.map((pkg, index) => (
      <div
        key={`${pkg.name}-${index}`}
        className="transition-all duration-500 ease-out flex flex-col w-full"
      >
        <PackageCard pkg={pkg} />
      </div>
    ));
  }, []);

  return (
    <section id="packages" className="py-28 sm:py-36 md:py-48 relative overflow-hidden bg-cover bg-center bg-no-repeat">
      <img
        src="/assets/img2.jpg"
        alt="Packages Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "0px",
          top: "0px",
          right: "0px",
          bottom: "0px",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 0,
        }}
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 transition-all duration-700 ease-out opacity-100 translate-y-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FC8019] drop-shadow-md pb-3">
            Our Packages
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Affordable monthly packages & custom event catering designed for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {packageCardsJSX}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 md:h-16 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}
