export type BlogFaq = {
  question: string;
  answer: string;
};

export const BLOG_POST_FAQS: Record<string, BlogFaq[]> = {
  "klima-gazi-ne-zaman-doldurulur": [
    {
      question: "Klima gazı ne zaman doldurulur?",
      answer:
        "Klima gazı, basınç ölçümüyle eksiklik doğrulandıktan ve varsa kaçak onarıldıktan sonra doldurulur. Takvime bağlı yıllık dolum, kaçaksız sistemde gerekli değildir.",
    },
    {
      question: "Klima gazı kaç yılda bir doldurulur?",
      answer:
        "Sabit bir yıl aralığı yoktur. Kaçak yoksa soğutucu akışkan yıllarca eksilmez. Her sezon dolum ihtiyacı genellikle kapanmamış kaçak işaretidir.",
    },
    {
      question: "Klima gazı bittiği nasıl anlaşılır?",
      answer:
        "Kesin yöntem yerinde basınç ölçümüdür. Zayıf soğutma, dış ünite borusunda buzlanma, yağ izi ve artan elektrik tüketimi şüphe uyandırır; fan veya kart arızası aynı tabloyu taklit edebilir.",
    },
    {
      question: "Kaçak onarılmadan gaz doldurulur mu?",
      answer:
        "Doldurulmamalıdır. Kaçak kapanmadan yapılan dolum kısa sürede biter, nem sistemde kalır ve kompresör zorlanır. Doğru sıra onarım, vakum, ardından dolumdur.",
    },
    {
      question: "Klima gaz doldurma evde yapılır mı?",
      answer:
        "Hayır. Yanlış gaz cinsi, aşırı basınç ve vakumsuz dolum cihazı bozar. R32 gazlı cihazlarda ev tipi tüp denemesi yangın riski taşır.",
    },
  ],
};
