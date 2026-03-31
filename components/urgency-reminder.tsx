import { Clock } from "lucide-react";

export function UrgencyReminder() {
  return (
    <div className="px-4 py-6">
      <div className="bg-[#F5EFE6] rounded-2xl p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-[#C99713]/20 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-[#C99713]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-[#161616] mb-2">
          A Páscoa já tá chegando...
        </h3>

        {/* Text */}
        <p className="text-sm text-[#6B6B6B] mb-4">
          E quanto mais você espera, menos tempo tem pra preparar algo especial.
        </p>

        {/* Highlight */}
        <div className="border border-[#E8D4AB] rounded-xl py-3 px-4 bg-white">
          <p className="text-sm text-[#161616]">
            Não deixa pra última hora e acaba dando{" "}
            <span className="font-medium">&quot;só mais um chocolate&quot;</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
