import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BeforeAfter() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-center gap-2">
        {/* Before Card */}
        <div className="flex-1 max-w-[160px]">
          <div className="bg-[#D32323] text-white text-xs font-bold py-1.5 px-3 rounded-t-xl text-center">
            ANTES
          </div>
          <div className="bg-white rounded-b-xl border border-[#E8D4AB] overflow-hidden shadow-sm">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/chocolate-comum.jpeg"
                alt="Chocolate comum"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs text-[#6B6B6B] py-2 font-medium">
              chocolate comum
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 w-8 h-8 bg-[#C99713] rounded-full flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>

        {/* After Card */}
        <div className="flex-1 max-w-[160px]">
          <div className="bg-[#159D48] text-white text-xs font-bold py-1.5 px-3 rounded-t-xl text-center">
            DEPOIS
          </div>
          <div className="bg-white rounded-b-xl border border-[#E8D4AB] overflow-hidden shadow-sm">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/presente-personalizado.jpeg"
                alt="Presente personalizado"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs text-[#6B6B6B] py-2 font-medium">
              presente personalizado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
