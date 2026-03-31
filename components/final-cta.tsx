import { Gift, Lock } from "lucide-react";

export function FinalCTA() {
  return (
    <div className="px-4 py-8">
      <div className="bg-gradient-to-b from-[#3A1F0E] to-[#1C1008] rounded-2xl p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-[#C99713]/20 rounded-full flex items-center justify-center">
            <Gift className="w-7 h-7 text-[#C99713]" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-white font-bold text-xl mb-3 leading-tight">
          Clique agora e comece a criar um presente que realmente marca.
        </h2>

        {/* Subtext */}
        <p className="text-white/70 text-sm mb-6">
          Acesso imediato assim que confirmar
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="block w-full bg-[#159D48] hover:bg-[#158F43] text-white font-bold text-sm uppercase py-4 px-6 rounded-xl text-center transition-all shadow-[0_4px_20px_rgba(21,157,72,0.4)]"
        >
          QUERO BAIXAR O KIT AGORA
        </a>

        {/* Security */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <Lock className="w-3.5 h-3.5 text-white/60" />
          <span className="text-white/60 text-xs">Compra 100% segura</span>
        </div>

        {/* Final Line */}
        <p className="mt-8 text-sm">
          <span className="text-white">Transforme um simples chocolate... </span>
          <span className="text-[#C99713] font-semibold">
            em algo inesquecível.
          </span>
        </p>
      </div>
    </div>
  );
}
