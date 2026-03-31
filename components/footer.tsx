export function Footer() {
  return (
    <footer className="bg-[#2A1408] py-8 px-4 text-center">
      {/* Brand */}
      <h3 className="text-[#C99713] font-bold text-lg mb-2">Mais Que Chocolate</h3>

      {/* Copyright */}
      <p className="text-white/50 text-xs mb-4">
        Todos os direitos reservados. Mais Que Chocolate © 2026
      </p>

      {/* Links */}
      <div className="flex items-center justify-center gap-4">
        <a href="#" className="text-white/50 text-xs hover:text-white/70 transition-colors">
          Termos de Uso
        </a>
        <a href="#" className="text-white/50 text-xs hover:text-white/70 transition-colors">
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}
