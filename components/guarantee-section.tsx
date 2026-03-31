import Image from "next/image";

export function GuaranteeSection() {
  return (
    <div className="px-4 py-10 text-center">
      {/* Seal */}
      <div className="flex justify-center mb-6">
        <Image
          src="/images/selo-garantia.png"
          alt="Selo de Garantia 7 Dias"
          width={120}
          height={120}
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="font-extrabold text-xl text-[#161616] mb-4">
        Garantia de 7 Dias
      </h2>

      {/* Copy */}
      <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm mx-auto">
        O código de defesa do consumidor (Art. 49) garante 7 dias para solicitar
        reembolso em caso de insatisfação com o produto.
        <br />
        <br />
        E se por{" "}
        <span className="font-bold text-[#161616]">QUALQUER RAZÃO</span> você
        entender que estes moldes não são para você, basta me avisar que te
        devolvo cada centavo que você investiu, sem qualquer questionamento.
        Certo?
      </p>
    </div>
  );
}
