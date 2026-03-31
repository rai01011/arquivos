"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/presente-personalizado.jpeg",
  "/images/social-proof.jpeg",
];

export function SocialProofNumber() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="px-4 py-8">
      <div className="bg-white rounded-2xl p-6 border border-[#E8D4AB] shadow-sm text-center">
        {/* Number */}
        <span className="text-5xl font-extrabold text-[#C99713]">+1.300</span>

        {/* Text */}
        <p className="text-sm text-[#6B6B6B] mt-3 mb-6">
          Mais de 1.300 pessoas já criaram presentes com esses moldes nos
          últimos dias.
        </p>

        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-4">
          <Image
            src={images[activeImage]}
            alt="Presentes criados"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeImage ? "bg-[#C99713]" : "bg-gray-300"
              }`}
              aria-label={`Imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
