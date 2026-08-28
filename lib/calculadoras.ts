export type Calculator = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "coche" | "estudios" | "dinero";
  emoji: string;
};

export const tools: Calculator[] = [
  // 🚗 COCHE
  {
    id: "coste-combustible",
    title: "Coste de combustible",
    description:
      "Calcula cuánto gastarás en combustible durante un viaje.",
    href: "/coche/coste-combustible",
    category: "coche",
    emoji: "⛽",
  },
  {
    id: "consumo-coche",
    title: "Consumo del coche",
    description:
      "Calcula el consumo de tu coche en litros cada 100 kilómetros.",
    href: "/coche/consumo",
    category: "coche",
    emoji: "🚗",
  },
  {
    id: "coste-km",
    title: "Coste por kilómetro",
    description:
      "Calcula cuánto te cuesta recorrer cada kilómetro.",
    href: "/coche/coste-km",
    category: "coche",
    emoji: "📏",
  },
  {
    id: "coste-viaje",
    title: "Coste de viaje",
    description:
      "Calcula el coste total de combustible de un viaje.",
    href: "/coche/coste-viaje",
    category: "coche",
    emoji: "🛣️",
  },

  // 🎓 ESTUDIOS
  {
    id: "nota-media",
    title: "Nota media",
    description:
      "Calcula la media de tus notas de forma rápida y sencilla.",
    href: "/estudios/nota-media",
    category: "estudios",
    emoji: "📚",
  },
  {
    id: "media-ponderada",
    title: "Media ponderada",
    description:
      "Calcula tu media teniendo en cuenta el peso o los créditos de cada asignatura.",
    href: "/estudios/media-ponderada",
    category: "estudios",
    emoji: "🎓",
  },
  {
    id: "nota-necesaria",
    title: "Nota necesaria",
    description:
      "Descubre qué nota necesitas para alcanzar tu objetivo.",
    href: "/estudios/nota-necesaria",
    category: "estudios",
    emoji: "🎯",
  },
  {
    id: "nota-final",
    title: "Nota final",
    description:
      "Calcula qué nota final obtendrás según tus resultados.",
    href: "/estudios/nota-final",
    category: "estudios",
    emoji: "📊",
  },

  // 💰 DINERO
  {
    id: "ahorro",
    title: "Calculadora de ahorro",
    description:
      "Descubre cuánto dinero puedes acumular ahorrando una cantidad cada mes.",
    href: "/dinero/ahorro",
    category: "dinero",
    emoji: "💰",
  },
  {
    id: "interes-compuesto",
    title: "Interés compuesto",
    description:
      "Calcula cómo podría crecer tu dinero con una rentabilidad determinada.",
    href: "/dinero/interes-compuesto",
    category: "dinero",
    emoji: "📈",
  },
];