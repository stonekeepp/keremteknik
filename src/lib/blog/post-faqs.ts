export type BlogFaq = {
  question: string;
  answer: string;
};

export const BLOG_POST_FAQS: Record<string, BlogFaq[]> = {
  "klima-su-damlatiyor-nedenleri": [
    {
      question: "Klima su damlatıyor neden olur?",
      answer:
        "En sık neden drenaj hattı tıkanıklığıdır. Kirli filtre, yanlış iç ünite eğimi, çatlak drenaj tavası ve buz erimesi de aynı belirtiyi verebilir.",
    },
    {
      question: "Klima su akıtıyor ise gaz mı bitmiş?",
      answer:
        "Çoğu zaman hayır. Gaz eksikliği buzlanma yoluyla dolaylı taşma yapabilir; asıl sık neden tahliye tıkanıklığıdır. Basınç ölçümü olmadan gaz basmak doğru değildir.",
    },
    {
      question: "Dış üniteden su damlaması normal mi?",
      answer:
        "Doğru montajda dış tahliye ucundan damlama beklenen yoğuşma tahliyesidir. İç üniteden veya duvar birleşiminden damlama normal değildir.",
    },
    {
      question: "Drenaj hortumunu kendim temizleyebilir miyim?",
      answer:
        "Dış uçtaki görünür tıkaç bazen temizlenebilir. Hortum içine tel sokmak, panel sökmek veya bilinmeyen kimyasal dökmek önerilmez; delinme ve elektrik riski vardır.",
    },
    {
      question: "Klima su damlatıyor ne zaman servis çağırmalıyım?",
      answer:
        "Su tekrarlıyorsa, koku veya buz varsa, filtre temizliği yetmiyorsa ya da elektrik/ıslanma riski varsa cihazı kapatıp yerinde servis alın.",
    },
  ],
  "klima-bakimi-ne-zaman-yapilmali": [
    {
      question: "Klima bakımı ne zaman yapılmalı?",
      answer:
        "Konut kullanımında yılda en az bir kez profesyonel bakım önerilir. En ideal dönem yaz sezonu öncesi Nisan–Mayıs’tır. Klimayı kışın ısıtma modunda da kullanıyorsanız Eylül–Ekim’de ikinci kontrol düşünülmelidir.",
    },
    {
      question: "Klima bakımı kaç ayda bir yapılır?",
      answer:
        "Normal ev kullanımında yılda bir kez yeterlidir. Günde birkaç saatten fazla çalışan, evcil hayvanlı veya tozlu ortamlarda altı ayda bir bakım daha doğru olabilir.",
    },
    {
      question: "Evde klima bakımı yapılır mı?",
      answer:
        "Yalnızca filtre temizliği ve görsel kontrol evde güvenle yapılır. Serpantin yıkama, drenaj temizliği, gaz ölçümü ve elektrik kontrolleri servis ekipmanı gerektirir.",
    },
    {
      question: "Klima bakımında gaz dolumu yapılır mı?",
      answer:
        "Hayır. Rutin bakım filtre, temizlik, drenaj ve performans kontrolüdür. Gaz yalnızca basınç ölçümüyle eksiklik doğrulandığında ve varsa kaçak onarıldıktan sonra doldurulur.",
    },
    {
      question: "Klima bakımı ne zaman acil servis gerektirir?",
      answer:
        "İç üniteden su damlatma, yanık kokusu, sigorta attırma veya belirgin performans kaybı varsa planlı bakım tarihini beklemeyin; cihazı zorlamadan servis alın.",
    },
  ],
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
