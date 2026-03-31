const objections = [
  {
    question: "Não sei mexer nisso",
    answer: "Mais fácil que mexer no Instagram",
  },
  {
    question: "Vai dar trabalho",
    answer: "Leva minutos.",
  },
  {
    question: "Não sou criativo",
    answer: "Os modelos já estão prontos.",
  },
];

export function ObjectionCards() {
  return (
    <div className="px-4 py-8 space-y-4">
      {objections.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
        >
          <p className="font-bold text-[#161616] mb-2">{item.question}</p>
          <p className="text-[#C99713] font-medium">
            <span className="mr-1">👉</span>
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
