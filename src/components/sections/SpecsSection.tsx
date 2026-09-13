"use client";

import React from "react";

export default function SpecsSection() {
  const specs = [
    { category: "Case", details: "Forged 316L Steel / Grade 5 Titanium, 40.0mm Diameter, 10.5mm Thickness, 47.0mm Lug-to-Lug" },
    { category: "Crystal", details: "Double-domed scratch-resistant sapphire crystal with multi-layer interior anti-reflective coating" },
    { category: "Movement", details: "Calibre 60P High-Beat Automatic Chronometer, 28,800 vph (4 Hz), 26 Rubies" },
    { category: "Power Reserve", details: "Approx. 38 hours autonomy, bi-directional heavy tungsten winding rotor" },
    { category: "Dial & Hands", details: "Diamond-cut multi-facet hands, satin-brushed galvanic dial, Grade X1 Super-LumiNova" },
    { category: "Water Resistance", details: "10 ATM / 100 Metres (330 Feet), screw-down crown with double gasket sealing system" },
    { category: "Strap & Clasp", details: "Integrated 3-link architectural bracelet with concealed butterfly deployant clasp" },
    { category: "Finishing", details: "Alternating vertical satin brushing with hand-polished mirror anglage bevels" },
  ];

  return (
    <section id="specs" className="relative w-full py-32 px-6 lg:px-16 pointer-events-none flex items-center">
      <div className="max-w-5xl mx-auto w-full pointer-events-auto bg-white/80 backdrop-blur-lg border border-black/10 p-8 lg:p-14 rounded-3xl shadow-sm">
        <div className="mb-10">
          <span className="font-inter text-xs uppercase tracking-[0.25em] text-black/50 block mb-2">
            Technical Ledger
          </span>
          <h2 className="font-nekst text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
            Specifications
          </h2>
        </div>

        <div className="divide-y divide-black/10">
          {specs.map((item, idx) => (
            <div key={idx} className="py-4.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <span className="font-nekst font-bold text-xs uppercase tracking-wider text-black sm:w-1/3">
                {item.category}
              </span>
              <span className="font-inter text-xs sm:text-sm text-black/70 sm:w-2/3 leading-relaxed">
                {item.details}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
