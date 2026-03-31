import { Lock } from "lucide-react";

interface CTAButtonProps {
  text: string;
  variant?: "green" | "gold";
  showSecurityText?: boolean;
  className?: string;
}

export function CTAButton({
  text,
  variant = "green",
  showSecurityText = true,
  className = "",
}: CTAButtonProps) {
  const bgColor =
    variant === "green"
      ? "bg-[#159D48] hover:bg-[#158F43] shadow-[0_4px_20px_rgba(21,157,72,0.4)]"
      : "bg-[#C99713] hover:bg-[#D6A11A] shadow-[0_4px_20px_rgba(201,151,19,0.4)]";

  return (
    <div className={`px-4 ${className}`}>
      <a
        href="#"
        className={`block w-full ${bgColor} text-white font-bold text-sm uppercase py-4 px-6 rounded-xl text-center transition-all transform hover:scale-[1.02]`}
      >
        {text}
      </a>
      {showSecurityText && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          <Lock className="w-3.5 h-3.5 text-[#6B6B6B]" />
          <span className="text-[#6B6B6B] text-xs">Compra 100% segura</span>
        </div>
      )}
    </div>
  );
}
