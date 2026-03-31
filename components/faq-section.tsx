"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso saber editar ou ter experiência?",
    answer:
      "Não! Os moldes são 100% editáveis no Canva, uma ferramenta gratuita e super fácil de usar. Você só precisa trocar o nome, foto e pronto!",
  },
  {
    question: "Quanto tempo leva para fazer?",
    answer:
      "Em poucos minutos você personaliza e já pode imprimir. É super rápido e prático!",
  },
  {
    question: "Vou precisar gastar muito pra montar?",
    answer:
      "Não! Você só precisa imprimir os moldes (pode ser em casa ou numa papelaria) e comprar o chocolate. Gasta menos de R$10 no total!",
  },
  {
    question: "O acesso é imediato?",
    answer:
      "Sim! Assim que o pagamento for confirmado, você recebe o acesso automaticamente por e-mail e WhatsApp.",
  },
  {
    question: "Posso usar no celular?",
    answer:
      "Sim! O Canva funciona perfeitamente no celular. Você pode editar de qualquer lugar!",
  },
  {
    question: "O que exatamente eu vou receber?",
    answer:
      "Você vai receber mais de 100 moldes de caixas de bombom personalizadas, modelos para casal, família e amigos, vídeo de passo a passo e 3 bônus exclusivos!",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se por qualquer razão não gostar, devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Funciona para qualquer pessoa?",
    answer:
      "Sim! Os moldes são perfeitos para qualquer pessoa: namorado(a), esposo(a), mãe, pai, filhos, amigos, avós... Qualquer um vai amar!",
  },
  {
    question: "Isso realmente fica bonito mesmo sendo simples?",
    answer:
      "Com certeza! Os moldes já vêm com design profissional. Você só personaliza e o resultado fica incrível, como se fosse feito por um designer!",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-4 py-10">
      {/* Title */}
      <h2 className="text-center font-extrabold text-xl mb-6">
        <span className="text-[#161616]">Perguntas </span>
        <span className="text-[#C99713]">Frequentes</span>
      </h2>

      {/* Accordion */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#E8D4AB] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-sm font-medium text-[#161616] pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#C99713] flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-sm text-[#6B6B6B]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
