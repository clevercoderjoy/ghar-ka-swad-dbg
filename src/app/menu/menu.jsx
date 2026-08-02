import { Sun, Moon, Check } from "lucide-react";
import { useRef, useCallback, useMemo, memo } from "react";
import "./menu.css";

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

const menuItems = [
  {
    day: "Monday",
    lunch: "Dal, Rice, Seasonal Veggie, Salad, Achar",
    dinner: "5 Chapatis, Sewai, Seasonal Sabji"
  },
  {
    day: "Tuesday",
    lunch: "Dal, Rice, Aloo Bhujia, Chutney, Papad/Tarua, Achar, Salad",
    dinner: "5 Chapatis, Dal Fry"
  },
  {
    day: "Wednesday",
    lunch: "Dal, Rice, Achar, Seasonal Veggie, Salad",
    dinner: "5 Chapatis, Seasonal Veggie, Bhujia/Chana Fry"
  },
  {
    day: "Thursday",
    lunch: "Dal, Rice, Achar, Seasonal Veggie, Salad",
    dinner: "Poori, Veggie, Kheer"
  },
  {
    day: "Friday",
    lunch: "Dal Fry/Rajma, Jeera Rice, Bhujia, Salad, Achar",
    dinner: "5 Chapatis, Seasonal Veggie"
  },
  {
    day: "Saturday",
    lunch: "Veg-Khichdi, Achar, Chokha, Papad",
    dinner: "5 Chapatis, Seasonal Veggie"
  },
  {
    day: "Sunday",
    lunch: "Fried Rice, Dal, Achar, Seasonal Veggie, Salad/Raita",
    dinner: "8 Pooris, Paneer Veggie"
  },
  {
    day: "Food Standards",
    isStandards: true,
    standards: [
      "Clean & hygienic kitchen & utensils",
      "Fresh ingredients, washed before cooking",
      "RO water for cooking",
      "Minimal & fresh cooking oil used",
      "No reheating or use of leftover food",
      "Healthy meals for good health",
      "Leak-proof, food-grade containers used",
      "We eat what we serve our customers",
    ]
  },
  {
    day: "Note",
    isNote: true,
    note: [
      "Proudly serving Darbhanga.",
      "Menu may change based on availability of food items.",
      "Advance payment is required for all subscription plans.",
      "Special requests can be accommodated with prior notice. (Chargable)",
      "Food cancellation after it goes out for delivery is fully chargable.",
      "Extra chapaties ₹6/Piece"
    ]
  }
];

const DayMenuCard = memo(function DayMenuCard({ item }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardTilt();

  const lunchList = useMemo(() => item.lunch.split(", "), [item.lunch]);
  const dinnerList = useMemo(() => item.dinner.split(", "), [item.dinner]);

  return (
    <div className="group transition-all duration-500 ease-out w-[350px] max-w-full h-auto flex flex-col">
      <div
        ref={cardRef}
        tabIndex={0}
        className="group relative rounded-3xl bg-black/35 backdrop-blur-md border border-white/20 hover:border-primary/40 shadow-[0_4px_30px_rgba(252,128,25,0.06),inset_0_1px_1px_rgba(252,128,25,0.08)] hover:shadow-2xl transition-all duration-200 overflow-hidden focus:outline-none flex flex-col px-4 sm:px-5 pb-4 sm:pb-5 pt-2 sm:pt-2.5 select-none menu-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseLeave}
        onBlur={handleMouseLeave}
        aria-label={`${item.day} menu card`}
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

        <div className="relative z-10 flex flex-col w-full space-y-2.5">
          {/* Card Header: Day Title */}
          <div className="text-center pb-1.5 border-b border-white/15 w-full">
            <h3 className="font-bold text-2xl tracking-wide text-[#FC8019] drop-shadow-md">
              {item.day}
            </h3>
          </div>

          {/* 2 Columns: Lunch & Dinner */}
          <div className="grid grid-cols-2 gap-4 items-start w-full">
            {/* Lunch Column */}
            <div className="space-y-2 flex flex-col">
              <div className="flex items-center gap-1.5 pb-0.5">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 backdrop-blur-sm flex items-center justify-center border border-white/10 shrink-0">
                  <Sun className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <span className="font-bold text-white text-sm sm:text-base">Lunch</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-white/90 font-medium">
                {lunchList.map((food, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-snug">
                    <span className="text-[#FC8019] font-bold text-xs shrink-0 mt-0.5">•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dinner Column */}
            <div className="space-y-2 flex flex-col">
              <div className="flex items-center gap-1.5 pb-0.5">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 backdrop-blur-sm flex items-center justify-center border border-white/10 shrink-0">
                  <Moon className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <span className="font-bold text-white text-sm sm:text-base">Dinner</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-white/90 font-medium">
                {dinnerList.map((food, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-snug">
                    <span className="text-[#FC8019] font-bold text-xs shrink-0 mt-0.5">•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const ExtraCard = memo(function ExtraCard({ item }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardTilt();

  if (item.isStandards) {
    return (
      <div className="group transition-all duration-500 ease-out w-[350px] max-w-full h-auto flex flex-col">
        <div
          ref={cardRef}
          tabIndex={0}
          className="group relative rounded-3xl bg-black/35 backdrop-blur-md border border-white/20 hover:border-primary/40 shadow-[0_4px_30px_rgba(252,128,25,0.06),inset_0_1px_1px_rgba(252,128,25,0.08)] hover:shadow-2xl transition-all duration-200 overflow-hidden focus:outline-none flex flex-col px-4 sm:px-5 pb-4 sm:pb-5 pt-2 sm:pt-2.5 menu-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseLeave}
          onBlur={handleMouseLeave}
          aria-label="Food Standards card"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 rounded-3xl bg-primary/15 border border-primary/25 scale-[0.85] opacity-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none"
            style={{
              transitionProperty: "all",
              transitionDuration: "500ms",
              transitionTimingFunction: "cubic-bezier(0.34, 1.15, 0.64, 1)"
            }}
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-200 pointer-events-none" />

          <div className="relative z-10 flex flex-col w-full space-y-3">
            <div className="text-center pb-2 border-b border-white/15 w-full">
              <h3 className="font-bold text-2xl tracking-wide text-[#FC8019] drop-shadow-md">
                Food Standards
              </h3>
            </div>
            <ul className="space-y-2 text-left w-full pt-1">
              {item.standards.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className={`text-[15px] sm:text-base ${point.startsWith("We eat") ? "text-primary font-bold" : "text-white/90 font-medium"}`}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (item.isNote) {
    return (
      <div className="group transition-all duration-500 ease-out w-[350px] max-w-full h-auto flex flex-col">
        <div
          ref={cardRef}
          tabIndex={0}
          className="group relative rounded-3xl bg-black/35 backdrop-blur-md border border-white/20 hover:border-primary/40 shadow-[0_4px_30px_rgba(252,128,25,0.06),inset_0_1px_1px_rgba(252,128,25,0.08)] hover:shadow-2xl transition-all duration-200 overflow-hidden focus:outline-none flex flex-col px-4 sm:px-5 pb-4 sm:pb-5 pt-2 sm:pt-2.5 menu-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseLeave}
          onBlur={handleMouseLeave}
          aria-label="Note card"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 rounded-3xl bg-primary/15 border border-primary/25 scale-[0.85] opacity-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none"
            style={{
              transitionProperty: "all",
              transitionDuration: "500ms",
              transitionTimingFunction: "cubic-bezier(0.34, 1.15, 0.64, 1)"
            }}
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-200 pointer-events-none" />

          <div className="relative z-10 flex flex-col w-full space-y-3">
            <div className="text-center pb-2 border-b border-white/15 w-full">
              <h3 className="font-bold text-2xl tracking-wide text-[#FC8019] drop-shadow-md">
                Note
              </h3>
            </div>
            <ul className="text-white/90 text-[15px] sm:text-base space-y-1.5 text-left w-full pt-1 font-medium">
              {item.note.map((point, idx) => (
                <li key={idx} className={`flex items-start gap-1.5 ${point.includes("Extra chapaties") ? "text-primary font-bold" : ""}`}>
                  <span className="text-primary mt-1 shrink-0 text-xs">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
});

export function Menu() {
  const menuCardsJSX = useMemo(() => {
    return menuItems.map((item, idx) => {
      if (item.isStandards || item.isNote) {
        return <ExtraCard key={idx} item={item} />;
      }
      return <DayMenuCard key={idx} item={item} />;
    });
  }, []);

  return (
    <section id="menu" className="py-24 sm:py-32 md:py-48 relative overflow-hidden bg-cover bg-center bg-no-repeat">
      <img
        src="/assets/img.png"
        alt="Menu Background"
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

      <div className="container px-4 relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 transition-all duration-700 ease-out opacity-100 translate-y-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FC8019] drop-shadow-md pb-3">
            Our Veg Menu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-none md:whitespace-nowrap mx-auto px-4">
            Truly homemade meals freshly prepared with love, care and less oil
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-8 max-w-[1600px] mx-auto">
          {menuCardsJSX}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 md:h-16 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}
