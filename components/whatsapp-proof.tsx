"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const whatsappImages = [
  "/images/whatsapp-jhonatan.png",
  "/images/whatsapp-2.png",
  "/images/whatsapp-3.png",
  "/images/whatsapp-lari.png",
  "/images/whatsapp-rayane.png",
];

export function WhatsAppProof() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="px-4 py-10">
      {/* Title */}
      <h2 className="text-center font-extrabold text-xl mb-3">
        <span className="text-[#161616]">ANTES DE DECIDIR,</span>
        <br />
        <span className="text-[#161616]">VEJA </span>
        <span className="bg-[#2A1408] text-white px-2 py-0.5 rounded">
          ISSO AQUI
        </span>
      </h2>

      {/* Chevron */}
      <div className="flex justify-center mb-6">
        <ChevronDown className="w-6 h-6 text-[#C99713]" />
      </div>

      {/* WhatsApp Screenshot */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div className="relative">
          <Image
            src={whatsappImages[activeImage]}
            alt="Depoimento WhatsApp"
            width={400}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {whatsappImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeImage ? "bg-[#C99713]" : "bg-gray-300"
            }`}
            aria-label={`Depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
