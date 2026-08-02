import { UtensilsCrossed, Users, Clock, Heart, Sparkles, Phone, Headphones } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./broucher.css";

const vegMenu = [
  { day: "Monday", lunch: "दाल, चावल, सीज़नल सब्ज़ी, सलाद, अचार", dinner: "5 रोटी, सेवई, सीज़नल सब्ज़ी" },
  { day: "Tuesday", lunch: "दाल, चावल, आलू भुजिया, अचार, चटनी, पापड़/तरुआ, सलाद", dinner: "5 रोटी, दाल फ्राई" },
  { day: "Wednesday", lunch: "दाल, चावल, अचार, सीज़नल सब्ज़ी, सलाद", dinner: "5 रोटी, सीज़नल सब्ज़ी, भुजिया/चना फ्राई" },
  { day: "Thursday", lunch: "दाल, चावल, अचार, सीज़नल सब्ज़ी, सलाद", dinner: "पुरी, सब्ज़ी, खीर" },
  { day: "Friday", lunch: "दाल फ्राई/राजमा, जीरा राइस, भुजिया, सलाद, अचार", dinner: "5 रोटी, सीज़नल सब्ज़ी" },
  { day: "Saturday", lunch: "वेज खिचड़ी, अचार, चोखा, पापड़", dinner: "5 रोटी, सीज़नल सब्ज़ी" },
  { day: "Sunday", lunch: "फ्राइड राइस, दाल, सीज़नल सब्ज़ी, अचार, सलाद/रायता", dinner: "8 पूरी, पनीर सब्ज़ी" },
];

const notes = [
  "Proudly serving Darbhanga.",
  "भोजन सामग्री की उपलब्धता के आधार पर मेनू में बदलाव हो सकता है।",
  "सभी सब्सक्रिप्शन प्लान के लिए एडवांस भुगतान अनिवार्य है।",
  "विशेष अनुरोध पूर्व सूचना पर स्वीकार किए जा सकते हैं (शुल्क लागू)।",
  "डिलीवरी के लिए निकलने के बाद भोजन रद्द करने पर पूरा शुल्क देय होगा।",
  "Extra chapaties ₹6/Piece",
];

export function BroucherPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start py-4 px-1 bg-background text-foreground overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body, html, main {
            background: #0c0804 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-scheme: dark !important;
          }
          /* Replace backdrop blurs with high contrast solids for clean print */
          .backdrop-blur-md {
            backdrop-filter: none !important;
            background-color: rgba(18, 12, 6, 0.97) !important;
          }
          /* Remove drop shadows that cause black box rendering bugs in print */
          .drop-shadow-md, .drop-shadow-lg, [class*="drop-shadow-"] {
            filter: none !important;
            text-shadow: none !important;
          }
          /* Prevent page breaks inside cards */
          .rounded-xl, .rounded-3xl, .rounded-lg, .menu-card {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          /* Keep text clean and crisp */
          span, h1, h2, h3, li, p {
            text-rendering: optimizeLegibility !important;
            -webkit-font-smoothing: antialiased !important;
          }
        }
      `}} />
      <img
        src="/assets/img.png"
        alt="Hero Background"
        style={{ objectFit: "cover", objectPosition: "center top", zIndex: 0, width: "100%", height: "100%" }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        fetchpriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Logo and Brand */}
        <div className="flex flex-col items-center mb-4 mt-2 gap-3">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none">
            <span className="text-white drop-shadow-lg">Ghar ka Swad</span>
          </h2>
          <div className="flex items-center justify-center overflow-hidden rounded-full border border-white/10" style={{ width: 140, height: 140 }}>
            <img src="/logo.svg.svg" alt="घर का स्वाद Logo" width={140} height={140} className="w-full h-full object-cover" decoding="async" />
          </div>
          <p className="text-base font-bold italic text-white drop-shadow-md leading-none">
            by
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-none uppercase -mt-2">
            <span className="text-[#FC8019] drop-shadow-md">Sanskriti Raj</span>
          </h1>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-14 my-4 w-full px-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-primary drop-shadow-md">1000+</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-wide">Happy Stomachs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-primary drop-shadow-md">Daily</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-wide">Fresh Meals</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-primary drop-shadow-md">2.5+</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-wide">Years of Service</span>
          </div>
        </div>

        {/* Bento Grid — 12 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 w-full my-3 px-4">

          {/* ROW 1: Why, Ratings, Food Standards, Note (4 compact cards) */}

          {/* Why घर का स्वाद */}
          <div className="col-span-1 md:col-span-4 bg-black/15 rounded-xl p-4 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <h2 className="text-2xl sm:text-[27px] font-extrabold mb-2.5 text-white text-center">Why <span className="text-primary">घर का स्वाद</span> ?</h2>
            <ul className="space-y-1 flex-1 flex flex-col justify-between pt-0.5">
              {[
                "रोज़ाना ताज़ा और उत्तम सामग्री से तैयार",
                "घर के खाने जैसा शुद्ध और स्वादिष्ट स्वाद",
                "साफ़-सुथरे होम किचन में हाइजीनिक तैयारी",
                "प्रीमियम भोजन, किफ़ायती पैकेज",
                "आपकी पसंद के अनुसार कस्टमाइज़्ड भोजन",
                "समय पर डिलीवरी (ट्रैफ़िक या मौसम के कारण थोड़ा समय बदल सकता है)",
                "प्रामाणिक पारंपरिक और स्थानीय रेसिपीज़",
                "कोई प्रिजर्वेटिव या कृत्रिम मिलावट नहीं",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[17px] sm:text-[18.5px] text-white font-medium leading-snug">
                  <span className="text-primary mt-0.5 shrink-0">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Food Standards */}
          <div className="col-span-1 md:col-span-4 bg-black/15 rounded-xl p-4 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <h2 className="text-2xl sm:text-[27px] font-extrabold mb-2 text-primary text-center">Food Standards</h2>
            <ul className="space-y-1 flex-1 flex flex-col justify-between pt-0.5">
              {[
                "साफ़ और हाइजीनिक किचन व बर्तन",
                "पकाने से पहले अच्छी तरह धुली ताज़ा सामग्री",
                "खाना पकाने के लिए RO पानी का उपयोग",
                "कम और ताज़े कुकिंग ऑयल का प्रयोग",
                "बचा हुआ या बासी खाना कभी नहीं परोसा जाता",
                "उत्तम स्वास्थ्य के लिए पौष्टिक भोजन",
                "लीक-प्रूफ़ और फ़ूड-ग्रेड डिब्बों का उपयोग",
                "हम वही खाते हैं जो अपने ग्राहकों को परोसते हैं",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[17px] sm:text-[18.5px] text-white font-medium leading-snug">
                  <span className="text-primary mt-0.5 shrink-0">✦</span>
                  <span className={point.startsWith("हम वही खाते") ? "text-primary font-black" : ""}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <div className="col-span-1 md:col-span-4 bg-black/15 rounded-xl pt-2 px-4 pb-4 backdrop-blur-md border border-white/20 flex flex-col justify-start">
            <h2 className="text-[26px] sm:text-[32px] font-extrabold mb-1 text-primary text-center">Note</h2>
            <ul className="space-y-1.5 text-lg sm:text-[20px] text-white pt-0.5 font-medium leading-snug">
              {notes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-1.5 justify-start text-left">
                  <span className="text-primary mt-1 shrink-0">✦</span>
                  <span className={note.includes("Extra chapaties") ? "text-primary font-bold" : ""}>
                    {note.includes("Darbhanga") ? (
                      <>
                        Proudly serving <span className="text-[#FC8019] font-bold">Darbhanga</span>.
                      </>
                    ) : (
                      note
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div className="col-span-1 md:col-span-12 bg-black/15 rounded-xl pt-2 px-4 pb-3 sm:pt-2 sm:px-5 sm:pb-4 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-primary text-center">Weekly Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5 flex-1 items-stretch">
              {vegMenu.map((item, idx) => (
                <div key={idx} className="flex flex-col bg-black/25 rounded-xl p-3.5 sm:p-4 border border-white/10 hover:border-primary/40 transition-colors text-left justify-between min-h-[230px] sm:min-h-[260px]">
                  <div>
                    <span className="text-lg sm:text-2xl font-black text-[#FC8019] border-b border-white/15 pb-1 mb-2.5 text-center block tracking-wide">
                      {item.day}
                    </span>
                    <div className="space-y-3">
                      <div>
                        <span className="font-extrabold text-orange-400 block text-sm sm:text-base uppercase tracking-wider mb-1">
                          ☀️ Lunch
                        </span>
                        <span className="text-[17px] sm:text-[19px] lg:text-[20px] text-white font-bold leading-relaxed block">
                          {item.lunch}
                        </span>
                      </div>
                      <div>
                        <span className="font-extrabold text-orange-400 block text-sm sm:text-base uppercase tracking-wider mb-1">
                          🌙 Dinner
                        </span>
                        <span className="text-[17px] sm:text-[19px] lg:text-[20px] text-white font-bold leading-relaxed block">
                          {item.dinner}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ratings & Trust */}
          <div className="col-span-1 md:col-span-7 bg-black/15 rounded-xl py-2 px-4 backdrop-blur-md border border-white/20 flex flex-col items-center text-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-2.5 text-primary text-center">The trust we've earned</h2>
            <div className="flex flex-row flex-wrap justify-between items-center gap-4 w-full flex-1">
              <div className="flex-1 min-w-[120px] pb-1.5 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-[28px] font-black text-primary block leading-none">20,000 +</span>
                <span className="text-[14.5px] sm:text-base text-white/95 font-bold leading-tight mt-1">Delicious Meals Delivered</span>
              </div>
              <div className="flex-1 min-w-[120px] pb-1.5 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-[28px] font-black text-primary block leading-none">1,000 +</span>
                <span className="text-[14.5px] sm:text-base text-white/95 font-bold leading-tight mt-1">Delighted Customers</span>
              </div>
              <div className="flex-1 min-w-[120px] pb-1.5 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-[28px] font-black text-primary block leading-none">100 +</span>
                <span className="text-[14.5px] sm:text-base text-white/95 font-bold leading-tight mt-1">Currently Active Subscribers</span>
              </div>
              <div className="flex-1 min-w-[120px] pb-1.5 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-[28px] font-black text-primary block leading-none">2.5 +</span>
                <span className="text-[14.5px] sm:text-base text-white/95 font-bold leading-tight mt-1">Years of Trust Service</span>
              </div>
              <div className="flex-1 min-w-[120px] pb-1.5 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-[28px] font-black text-primary block leading-none">4.8 ★★★★</span>
                <span className="text-[14.5px] sm:text-base text-white/95 font-bold leading-tight mt-1">Google Verified Ratings</span>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="col-span-1 md:col-span-5 bg-black/15 rounded-xl pt-2 px-4 pb-3 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-2 text-primary text-center">Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 items-stretch">
              {/* 1 Day Meal */}
              <div className="flex flex-col bg-black/10 rounded-lg py-2 px-2 border border-white/10 hover:border-primary/30 transition-colors text-center justify-between">
                <span className="text-base sm:text-lg font-black text-white">1 Day Meal</span>
                <span className="text-lg sm:text-xl font-black text-primary my-1">₹75/- Meal</span>
                <span className="text-xs text-white/80 font-bold">Try out our meal</span>
              </div>

              {/* Monthly Veg */}
              <div className="relative flex flex-col bg-black/10 rounded-lg py-2 px-2 border border-primary/40 hover:border-primary transition-colors text-center justify-between bg-primary/10 pt-2">
                <div className="absolute -top-2 -right-1 bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider border border-white/20 whitespace-nowrap z-10 flex items-center justify-center text-center">
                  Most Popular
                </div>
                <span className="text-base sm:text-lg font-black text-white">Monthly Veg</span>
                <span className="text-lg sm:text-xl font-black text-primary my-1">₹3300/-</span>
                <span className="text-xs text-white/80 font-bold">30 Days Package</span>
              </div>

              {/* Event Catering */}
              <div className="flex flex-col bg-black/10 rounded-lg py-2 px-2 border border-white/10 hover:border-primary/30 transition-colors text-center justify-between">
                <span className="text-base sm:text-lg font-black text-white">Event Catering</span>
                <span className="text-lg sm:text-xl font-black text-primary my-1">Custom Quote</span>
                <span className="text-xs text-white/80 font-bold">For Special Occasions</span>
              </div>
            </div>
          </div>

          {/* ROW 3: Get In Touch full width */}
          <div className="col-span-1 md:col-span-12 bg-black/15 rounded-xl py-3 px-4 backdrop-blur-md border border-white/20 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-primary text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch flex-1">
              
              {/* Left Side: 4 Contact Info Cards (2x2 grid) */}
              <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full items-stretch">
                {/* Phone */}
                <div className="flex items-center justify-center gap-3.5 bg-black/10 rounded-xl py-2.5 px-3 border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                  <div className="flex flex-col text-left justify-center">
                    <span className="text-base sm:text-lg text-white/80 font-bold">Phone</span>
                    <a href="tel:+916202744741" className="text-xl sm:text-2xl font-black text-white hover:text-primary transition-colors">+91 6202744741</a>
                  </div>
                </div>

                {/* Whatsapp */}
                <div className="flex items-center justify-center gap-3.5 bg-black/10 rounded-xl py-2.5 px-3 border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <FaWhatsapp className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                  <div className="flex flex-col text-left justify-center">
                    <span className="text-base sm:text-lg text-white/80 font-bold">WhatsApp</span>
                    <a href="https://wa.me/+916202744741" target="_blank" rel="noreferrer" className="text-xl sm:text-2xl font-black text-white hover:text-primary transition-colors">+91 6202744741</a>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="flex items-center justify-center gap-3.5 bg-black/10 rounded-xl py-2.5 px-3 border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Headphones className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                  <div className="flex flex-col text-left justify-center">
                    <span className="text-base sm:text-lg text-white/80 font-bold">Support Hours</span>
                    <span className="text-xl sm:text-2xl font-black text-white">9 AM - 9 PM Daily</span>
                  </div>
                </div>

                {/* Delivery Hours */}
                <div className="flex items-center justify-center gap-3.5 bg-black/10 rounded-xl py-2.5 px-3 border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                  <div className="flex flex-col text-left justify-center">
                    <span className="text-base sm:text-lg text-white/80 font-bold">Delivery Hours</span>
                    <span className="text-xl sm:text-2xl font-black text-white">9 AM - 9 PM Daily</span>
                  </div>
                </div>
              </div>

              {/* Right Side: QR Codes (Expanded Width & Height) */}
              <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-black/10 rounded-xl p-3 border border-white/10 items-center justify-center justify-items-center h-full">
                {/* 1. Website QR: Know More About Us */}
                <a href="https://gkssr-darbhanga.netlify.app/" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline w-full max-w-[170px]">
                  <div className="w-[160px] h-[160px] bg-white p-0 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/qr-web.svg"
                      alt="Know More About Us QR"
                      width={160}
                      height={160}
                      style={{ imageRendering: "pixelated" }}
                      className="w-full h-full object-cover scale-[1.10] transform [image-rendering:crisp-edges] [image-rendering:pixelated]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <span className="mt-2 text-sm sm:text-base text-white font-extrabold whitespace-nowrap text-center">Know More About Us</span>
                </a>

                {/* 2. Google Review QR: Find us on Google */}
                <a href="https://share.google/r0eOTOo74xxTEOvTy" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline w-full max-w-[170px]">
                  <div className="w-[160px] h-[160px] bg-white p-0 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/qr-google.svg"
                      alt="Find us on Google QR"
                      width={160}
                      height={160}
                      style={{ imageRendering: "pixelated" }}
                      className="w-full h-full object-cover scale-[1.06] transform [image-rendering:crisp-edges] [image-rendering:pixelated]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <span className="mt-2 text-sm sm:text-base text-white font-extrabold whitespace-nowrap text-center">Find us on Google</span>
                </a>

                {/* 3. WhatsApp QR: Order on Whatsapp */}
                <a href="https://wa.me/+916202744741" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline w-full max-w-[170px]">
                  <div className="w-[160px] h-[160px] bg-white p-0 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/qr-chat.svg"
                      alt="Order on Whatsapp QR"
                      width={160}
                      height={160}
                      style={{ imageRendering: "pixelated" }}
                      className="w-full h-full object-cover scale-[1.09] transform [image-rendering:crisp-edges] [image-rendering:pixelated]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <span className="mt-2 text-sm sm:text-base text-white font-extrabold whitespace-nowrap text-center">Order on Whatsapp</span>
                </a>

                {/* 4. Call QR: Scan to Call */}
                <a href="tel:+916202744741" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center no-underline w-full max-w-[170px]">
                  <div className="w-[160px] h-[160px] bg-white p-0 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/qr-call.svg"
                      alt="Scan to Call QR"
                      width={160}
                      height={160}
                      style={{ imageRendering: "pixelated" }}
                      className="w-full h-full object-cover scale-[0.95] transform [image-rendering:crisp-edges] [image-rendering:pixelated]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <span className="mt-2 text-sm sm:text-base text-white font-extrabold whitespace-nowrap text-center">Scan to Call</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="relative w-full mt-1.5 mb-1 px-4 flex flex-col md:flex-row items-center justify-between gap-4 pt-3.5 pb-0.5 border-t border-white/10">
          {/* Left: Logo Pill (far left) */}
          <div className="group relative flex items-center gap-2.5 p-0 h-11 pr-4 rounded-full bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_4px_30px_rgba(252,128,25,0.06),inset_0_1px_1px_rgba(252,128,25,0.08)] hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
            <div 
              className="absolute inset-0 rounded-full bg-primary/15 border border-primary/25 scale-[0.85] opacity-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none" 
              style={{
                transitionProperty: 'all',
                transitionDuration: '500ms',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.15, 0.64, 1)'
              }}
            />
            <img
              src="/logo.svg.svg"
              alt="Ghar ka Swad Logo"
              style={{ width: 44, height: 44 }}
              className="relative z-10 rounded-full object-cover border border-white/10"
              decoding="async"
            />
            <div className="relative z-10 flex flex-col justify-center items-center select-none text-center gap-0 leading-tight pr-1">
              <span className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide whitespace-nowrap">
                Ghar ka Swad
              </span>
              <span className="text-[13px] sm:text-[14px] font-black text-[#FC8019] tracking-wider uppercase whitespace-nowrap">
                Sanskriti Raj
              </span>
            </div>
          </div>

          {/* Center: Copyright (dead-centered horizontally & vertically) */}
          <div className="md:absolute md:left-1/2 md:top-[55%] md:-translate-x-1/2 md:-translate-y-1/2 text-base sm:text-lg text-white text-center font-bold whitespace-nowrap">
            © 2026 <span className="text-primary font-extrabold">Ghar ka Swad</span> | All rights reserved
          </div>

          {/* Right: Made with love Pill (far right) */}
          <div className="group relative flex items-center gap-2 h-11 px-5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_4px_30px_rgba(252,128,25,0.06),inset_0_1px_1px_rgba(252,128,25,0.08)]">
            <span className="relative z-10 text-sm sm:text-base text-white font-semibold">Made with</span>
            <Heart className="relative z-10 w-4.5 h-4.5 text-red-500 fill-red-500 border-red-500 animate-pulse" />
            <span className="relative z-10 text-sm sm:text-base text-white font-semibold">by <a href="https://clevercoderjoy.bio.link/" target="_blank" rel="noopener noreferrer" className="text-[#FC8019] drop-shadow-md no-underline transition-colors font-extrabold">clevercoderjoy</a></span>
          </div>
        </div>
      </div>
    </main>
  );
}
export default BroucherPage;
