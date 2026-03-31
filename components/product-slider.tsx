"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/hero-product.jpeg",
  "/images/produto-lacta.png",
  "/images/produto-bis.png",
  "/images/produto-familia.png",
];

export function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-4 py-4">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E8D4AB]/50">
        <div className="aspect-[4/3] relative">
          <Image
            src={images[activeIndex]}
            alt="Produto personalizado"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#C99713]" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
