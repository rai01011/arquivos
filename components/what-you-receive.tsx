"use client";

import Image from "next/image";
import { Gift, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const checklistItems = [
  "+100 moldes de Caixas de bombom personalizadas",
  "Embalagens criativas prontas",
  "Modelos para casal",
  "Modelos para família",
  "Modelos para amigos",
  "Arquivos 100% prontos e editáveis no Canva",
  "Vídeo de passo a passo",
];

const mockupImages = [
  "/images/mockup-editavel.png",
  "/images/mockup-editavel-2.png",
];

export function WhatYouReceive() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-[#F5EFE6] mx-4 rounded-2xl py-8 px-5">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-[#C99713]/20 rounded-full flex items-center justify-center">
          <Gift className="w-6 h-6 text-[#C99713]" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center font-extrabold text-lg mb-6">
        <span className="text-[#161616]">VEJA O QUE VOCÊ VAI RECEBER</span>
        <br />
        <span className="text-[#161616]">DENTRO DO NOSSO KIT</span>
      </h2>

      {/* Checklist Card */}
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
        <ul className="space-y-3">
          {checklistItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-[#DDF6E1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#159D48]" />
              </div>
              <span className="text-sm text-[#161616]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup Image */}
      <div className="bg-gray-100 rounded-xl overflow-hidden mb-4">
        <div className="aspect-[4/3] relative">
          <Image
            src={mockupImages[activeImage]}
            alt="Mockup editável"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Image Dots */}
      <div className="flex justify-center gap-2 mb-6">
        {mockupImages.map((_, index) => (
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

      {/* Pill */}
      <div className="flex items-center justify-center gap-2 border border-[#E8D4AB] rounded-full py-3 px-4 bg-white">
        <ArrowRight className="w-4 h-4 text-[#C99713]" />
        <span className="text-sm font-medium text-[#161616]">
          Tudo editável. Tudo pronto. Sem complicação.
        </span>
      </div>
    </div>
  );
}
