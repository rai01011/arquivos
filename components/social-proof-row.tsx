import Image from "next/image";
import { Star } from "lucide-react";

export function SocialProofRow() {
  return (
    <div className="flex items-center justify-center gap-3 py-4 px-4">
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
          <Image
            src="/images/avatar-1.jpeg"
            alt="Cliente"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
          <Image
            src="/images/avatar-2.jpeg"
            alt="Cliente"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
          <Image
            src="/images/avatar-3.jpeg"
            alt="Cliente"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[#C99713] text-[#C99713]"
          />
        ))}
      </div>
      <span className="text-[#6B6B6B] text-sm">+1300 avaliações</span>
    </div>
  );
}
