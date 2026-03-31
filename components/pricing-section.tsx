"use client";

import Image from "next/image";
import { Check, X, Eye, Lock, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export function PricingSection() {
  const [countdown, setCountdown] = useState({
    days: 5,
    hours: 3,
    minutes: 36,
    seconds: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F5EFE6] py-10 px-4">
      {/* Title */}
      <h2 className="text-center font-extrabold text-2xl text-[#161616] mb-4">
        Escolha Seu Kit de Páscoa
      </h2>

      {/* Countdown Pill */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-full py-2.5 px-4 shadow-sm border border-[#E8D4AB]">
          <span className="text-sm text-[#161616]">
            Faltam{" "}
            <span className="text-[#D32323] font-bold">
              {countdown.days}d {String(countdown.hours).padStart(2, "0")}h{" "}
              {String(countdown.minutes).padStart(2, "0")}m{" "}
              {String(countdown.seconds).padStart(2, "0")}s
            </span>{" "}
            para Páscoa 2026
          </span>
        </div>
      </div>

      {/* Basic Plan Card */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
        <h3 className="font-bold text-lg text-[#161616] mb-1">Kit Básico</h3>
        <p className="text-[#6B6B6B] text-sm mb-4">Para começar</p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-[#159D48]" />
            <span>Moldes Simples Editáveis no Canva</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-[#159D48]" />
            <span>Não precisa saber design</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-[#159D48]" />
            <span>Acesso imediato após a compra</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <X className="w-4 h-4 text-[#D32323]" />
            <span>Sem 3 bônus inclusos</span>
          </li>
        </ul>

        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-[#161616]">R$10,00</span>
        </div>

        <a
          href="#"
          className="block w-full bg-gray-200 text-[#161616] font-semibold text-sm py-3.5 px-6 rounded-xl text-center"
        >
          Quero o Kit Básico
        </a>
      </div>

      {/* Complete Plan Card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#C99713] relative">
        {/* Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C99713] text-white text-xs font-bold py-1.5 px-4 rounded-full">
          MAIS VENDIDO
        </div>

        <h3 className="font-bold text-xl text-[#161616] mb-1 mt-2">
          Kit Completo
        </h3>
        <p className="text-[#6B6B6B] text-sm mb-2">
          TODOS OS MOLDES + 3 BÔNUS EXCLUSIVOS
        </p>

        {/* Urgency Text */}
        <div className="flex items-center gap-1.5 mb-4">
          <Eye className="w-4 h-4 text-[#D32323]" />
          <span className="text-[#D32323] text-xs font-medium">
            26 pessoas visualizando esse kit agora
          </span>
        </div>

        {/* Product Thumbnails */}
        <div className="flex gap-2 mb-5">
          <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="/images/produto-1.jpeg"
              alt="Produto"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="/images/produto-2.jpeg"
              alt="Produto"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="/images/produto-3.jpeg"
              alt="Produto"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Benefits */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2 text-sm">
            <div className="w-5 h-5 bg-[#C99713]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#C99713]" />
            </div>
            <span>Acesso a TODOS os moldes + 3 Bônus</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <div className="w-5 h-5 bg-[#C99713]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#C99713]" />
            </div>
            <span>
              Mais variedade de estilos pra criar algo realmente único
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <div className="w-5 h-5 bg-[#C99713]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#C99713]" />
            </div>
            <span>Personalização completa (nome, foto, mensagem)</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <div className="w-5 h-5 bg-[#C99713]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#C99713]" />
            </div>
            <span>Ideias criativas prontas (não precisa pensar em nada)</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <div className="w-5 h-5 bg-[#C99713]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#C99713]" />
            </div>
            <span>Resultado MUITO mais impactante na entrega</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <div className="w-5 h-5 bg-[#C99713]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#C99713]" />
            </div>
            <span>Vídeo montagem passo a passo</span>
          </li>
        </ul>

        {/* Bonus Box */}
        <div className="bg-[#F5EFE6] rounded-xl p-4 mb-6">
          <h4 className="font-bold text-sm text-[#161616] mb-3 text-center">
            3 BÔNUS EXCLUSIVOS
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white rounded-lg p-3">
              <span className="text-xs">
                Receita simples para fazer ovos de Páscoa em casa
              </span>
              <span className="bg-[#DDF6E1] text-[#159D48] text-[10px] font-bold py-1 px-2 rounded">
                GRÁTIS
              </span>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-3">
              <span className="text-xs">+100 Moldes Buquê de Chocolate</span>
              <span className="bg-[#DDF6E1] text-[#159D48] text-[10px] font-bold py-1 px-2 rounded">
                GRÁTIS
              </span>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-3">
              <span className="text-xs">Receba o acesso pelo WhatsApp</span>
              <span className="bg-[#DDF6E1] text-[#159D48] text-[10px] font-bold py-1 px-2 rounded">
                GRÁTIS
              </span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[#6B6B6B] text-sm line-through">
              R$67,00
            </span>
            <span className="bg-[#D32323] text-white text-xs font-bold py-0.5 px-2 rounded">
              63% OFF
            </span>
          </div>
          <span className="text-3xl font-bold text-[#159D48]">R$24,90</span>
          <div className="mt-2">
            <span className="bg-[#DDF6E1] text-[#159D48] text-xs font-medium py-1.5 px-3 rounded-full">
              Você Economiza R$42,10
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="block w-full bg-[#C99713] hover:bg-[#D6A11A] text-white font-bold text-sm uppercase py-4 px-6 rounded-xl text-center transition-all shadow-[0_4px_20px_rgba(201,151,19,0.4)]"
        >
          QUERO O KIT COMPLETO
        </a>

        {/* Trust */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#6B6B6B]" />
            <span className="text-[10px] text-[#6B6B6B]">
              PAGAMENTO 100% SEGURO
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-[#6B6B6B]" />
            <span className="text-[10px] text-[#6B6B6B]">
              7 DIAS DE GARANTIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
