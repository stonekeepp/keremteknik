import type { BlogPost } from "./types";

const now = "2026-01-15T10:00:00.000Z";
const publishedAug2026 = "2026-08-24T18:00:00.000Z";

export const SEED_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-6",
    title: "Klima Gazı Ne Zaman Doldurulur?",
    slug: "klima-gazi-ne-zaman-doldurulur",
    excerpt:
      "Klima gazı her yıl bitmez. Eksiklik belirtileri, kaçak onarımı ve doğru dolum sırası; ne zaman servis çağırmanız gerektiği.",
    content: `Klima gazı ne zaman doldurulur sorusunun cevabı takvimde değil, ölçümde durur. Klimanız çalışıyor ama oda eskisi gibi serinlemiyorsa ilk refleks “gaz bitmiş, doldurulsun” oluyor. Bu refleks çoğu zaman yanlıştır. Soğutucu akışkan kapalı bir devrede dolaşır; sistem sızdırmıyorsa yıllarca aynı miktarda kalır.

> **Kısa cevap:** Klima gazı ne zaman doldurulur? Yalnızca manometre ile eksiklik doğrulandıktan ve varsa kaçak onarıldıktan sonra. “Her yıl gaz basılsın” yaklaşımı kalıcı çözüm değildir.

Yerinde [klima servisi](/hizmetlerimiz/klima-servisi) çağıranların çoğu aslında gaz değil, kirli filtre veya yanlış mod ile gelir. Gaz dolumunu gerçekten gerektiren durumu bu üçünden ayırmak, hem faturayı hem kompresörü korur. Soğutma şikâyetinin genel kontrol listesi [klima soğutmuyor rehberinde](/ariza-rehberi/klima/sogutmuyor) durur; burada konu yalnızca soğutucu akışkandır.

## Klima gazı neden kendiliğinden bitmez?

İç ünite ile dış ünite arasındaki bakır hat, kompresör ve serpantin kapalı bir çevrimdir. Gaz burada “yakıt” gibi tüketilmez; ısıyı taşır ve tekrar döner. Üretici kaynakları da aynı noktayı vurgular: [Bosch Home Comfort klima gazı rehberi](https://www.bosch-homecomfort.com/tr/tr/residential/bilgiler/klima-rehberi/klima-gazi-nedir-ve-ne-zaman-yenilenmelidir-/) gazın normal şartlarda yenilenmediğini, eksilmenin kaçak işareti olduğunu yazar.

Saha pratiğinde sık gördüğümüz tablo şudur: geçen yaz “gaz dolduruldu”, bu yaz aynı şikâyet geri geldi. Kaçak kapanmadan yapılan dolum, belirtileri birkaç hafta gizler; kompresörü kuru çalışmaya zorlar ve faturayı iki kez ödetir. Klima gazı ne zaman doldurulur sorusunu “ne sıklıkla” diye sormak bu yüzden yanıltıcıdır. Sıklık yoktur; koşul vardır.

## Soğutmama her zaman gaz eksikliği değildir

Yazın en çok karıştırılan iki durum: kirli filtre ve düşük gaz. İkisi de “üflüyor ama serinletmiyor” hissi verir. Ayırt etmek için önce kullanımı kontrol edin.

- Kumanda **soğutma** modunda mı, yoksa fan / kurutma / otomatikte mi?
- Hedef sıcaklık oda sıcaklığının en az birkaç derece altında mı?
- İç ünite filtresi tozla kapanmış mı?
- Dış ünite önü kasa, çamaşır, klima kapağı veya bitki ile kapanmış mı?

Bu dördü temizse ve hava hâlâ ılık geliyorsa gaz, fan motoru, inverter kart veya sensör gündeme gelir. Kart ve fan arızası gaz basmakla düzelmez; aksine yanlış dolum yeni bir arıza üretir. Dış ünite fanı dönmüyorsa önce elektrik ve motor bakılır; gaz tüpü bağlamak boşuna işçiliktir. Ekranda kod varsa [klima hata kodları](/hata-kodlari/klima) sayfasından modele göre bakın, kodu silmek için cihazı resetleyip tekrar çalıştırmayın.

İnverter cihazlarda “çalışıyor gibi” ses, düşük devirde kompresörün gazı yetmediği anlamına da gelebilir. Bu yüzden “ses geliyor o halde gaz vardır” çıkarımı güvenilir değildir.

## Klima gazı eksikliği belirtileri

Aşağıdaki belirtilerin birkaçı bir aradaysa gaz kaçağı ihtimali yükselir. Tek belirti yeterli teşhis değildir; kesin sonuç basınç ölçümüdür.

- İç ünite çalışır, üflenen hava oda sıcaklığına yakındır
- Cihaz uzun süre çalışır, elektrik tüketimi artar, oda hedefe inmez
- Dış ünite ince bakır borusunda karlanma veya buz görülür
- İç üniteden su damlar; drenaj açık olsa bile yoğuşma düzensizdir
- Bakır ek yerinde yağ izi veya hafif tıslama duyulur
- Kompresör sık açılıp kapanır veya anormal tiz ses çıkarır

Buzlanma “daha çok soğutuyor” anlamına gelmez. Düşük gazda evaporatör aşırı soğur, nem buz tutar, hava yolu kapanır. Buzlu çalıştırmaya devam etmek kompresöre zarar verir; cihazı kapatıp erimesini bekleyin.

## Klima gaz doldurma doğru sırası

Klima gaz doldurma, tüp bağlayıp “biraz basmak” değildir. Evde veya kalitesiz sahada yapılan üstüne ekleme (top-up), nemi ve havayı sisteme hapseder. Kerem Teknik Servis bağımsız özel teknik servis olarak yerinde şu sırayı izler:

1. **Güvenli görsel kontrol.** Filtre, hava akışı, dış ünite fanı, elektrik bağlantısı ve yağ izi.
2. **Basınç ölçümü.** Manometre ile emiş/basma değerleri ortam sıcaklığına göre okunur.
3. **Kaçak tarama.** Elektronik dedektör, köpük veya gerekliyse azot basınç testi. Kaçak yok ve basınç normalse gaz doldurulmaz.
4. **Onarım.** Flare gevşekliği, çatlak boru, servis vanası veya conta. Nokta kapanmadan dolum yapılmaz.
5. **Vakum.** Nem ve hava tahliye edilir. Bu adım atlanırsa kompresör ve yağ bozulur.
6. **Doğru gaz, doğru miktar.** Etiketteki R32 veya R410A karıştırılmaz; miktar tartı ile fabrika değerine çekilir.
7. **Test.** Soğutma düşüşü, akım ve kaçak tekrar kontrol edilir. Onaysız parça değişimi yapılmaz.

Bu sıra, klima gazı ne zaman doldurulur sorusunu pratikte cevaplar: 3. adımda eksiklik yoksa dolum yoktur. 4. adım atlanırsa dolum geçicidir.

## R32 ve R410A karıştırılmaz

Son yıllarda satılan split klimaların çoğu R32, eski stok R410A kullanır. İki gazın basınç eğrisi ve yağ tipi farklıdır. Yanlış tüp bağlamak soğutmayı düzeltmez; kartı, kompresörü ve garanti sürecini riske atar. Etiket iç veya dış ünite gövdesindedir; model yılı tahminle gaz seçilmez.

Bağımsız servis olarak birden fazla markanın ev tipi split ve inverter cihazında bu ölçümü yaparız. Yetkili servis değiliz; marka adları yalnızca cihazı tanımlamak içindir. VRF/VRV veya merkezi sistem ayrı planlama ister.

## Apartman balkonu ile site çatısı aynı iş değildir

Gaz kaçağı çoğu zaman titreşimli flare bağlantısında veya eski bakır hatta çıkar. Teşhis süresi, dış üniteye nasıl ulaşıldığına göre değişir. Bu, yeni bir semt sayfası açmak için değil; randevuda doğru süreyi söylemek içindir.

Eyüpsultan ilçesinde apartman stoğunda iç ünite genelde salon duvarında, dış ünite balkondadır; erişim kısadır. Semt ofisimize yakın Alibeyköy hatlarında toz ve trafik, filtre tıkanmasını gaz şikâyetiyle karıştırır: önce filtre, sonra basınç. Göktürk’te dış ünite sıkça çatı, bahçe veya otopark katındadır; site kaydı ve merdiven/çatı güvenliği randevu notuna yazılır. İlçe planı [Eyüpsultan klima servisi](/servis-bolgeleri/eyupsultan/klima-servisi), apartman yakınlığı [Alibeyköy klima servisi](/servis-bolgeleri/alibeykoy/klima-servisi), villa/site erişimi [Göktürk klima servisi](/servis-bolgeleri/gokturk/klima-servisi) sayfasındadır.

Kemerburgaz ayrı URL değildir; ilçe kapsamında kalır.

## Evde yapılacaklar ve yapılmayacaklar

**Yapın**

- Filtreyi kullanım kılavuzuna göre temizleyin
- Pencereleri kapatıp 15–20 dakika soğutma modunda gözlemleyin
- Dış ünite önünü açın; fanın döndüğünü uzaktan bakarak not edin
- Buz varsa cihazı kapatın

**Yapmayın**

- Tüp, manifold veya “hazır gaz kiti” ile evde doldurmayın
- Kaçak tespiti için açık alev kullanmayın
- Buzlu serpantine sıcak su veya kesici alet uygulamayın
- “Biraz gaz ekleyelim, kaçağa bakmayalım” teklifini kabul etmeyin

Klima gazı ne zaman doldurulur sorusunu evde kesinleştirmek mümkün değildir. Basınç ve kaçak, alet ister.

## Gaz dolumu ile klima bakımı aynı iş değildir

Bakım; filtre, serpantin, drenaj, elektrik bağlantısı ve performans kontrolüdür. Gaz, bakımın otomatik parçası değildir. Sağlam sistemde bakım yapılır, gaz dokunulmaz. Bakım zamanlaması için [klima bakımı ne zaman yapılmalı](/blog/klima-bakimi-ne-zaman-yapilmali) yazısına, sezon öncesi plan için [periyodik bakım](/hizmetlerimiz/periyodik-bakim) sayfasına bakın.

Yılda bir “gaz + bakım paketi” satmak, kaçaksız cihazda gereksiz işlemdir. Biz bu paketi varsayılan ürün olarak sunmuyoruz. Ölçümde eksik yoksa dolum önermeyiz.

## İşlem ne kadar sürer, fiyat nasıl oluşur?

Sadece basınç okuyup kaçak yoksa randevu kısa sürer: cihaz açılır, değerler not edilir, kullanıcıya “dolum yok” denir. Kaçak balkondaki flare’deyse sıkma ve vakum aynı ziyarette bitebilir. Çatıdaki kılcal çatlak, bakır hat değişimi veya kompresör yağının bozulduğu durumlarda iş ikinci güne kalabilir; site yönetimi izni de süreyi uzatır.

Fiyatı önceden tek rakama bağlamak dürüst olmaz. Değişkenler gaz cinsi ve miktarı, kaçak noktası, yedek parça (vana, boru, conta) ve erişimdir. Yerinde teşhis sonrası netleştirilir; onayınız olmadan parça takılmaz. İnternetteki “2026 gaz dolumu 2.000 TL” listeleri cihazınızın etiketi ve kaçağı görmeden yazılmıştır.

Yazın aynı gün randevu, rota ve ekip müsaitliğine bağlıdır. Acil soğutma ihtiyacı varsa cihazı buzlu çalıştırmayın; kısa süreli vantilatör veya oda değişimi, kompresörü kurtarır.

## Sık sorulan sorular

### Klima gazı ne zaman doldurulur?

Klima gazı ne zaman doldurulur? Basınç ölçümü eksikliği gösterdiğinde ve kaçak onarıldıktan sonra. Belirti tek başına yeterli değildir.

### Klima gazı kaç yılda bir doldurulur?

Sabit yıl yoktur. Kaçak yoksa 8–15 yıl dolumsuz çalışan cihaz görülür. Her sezon dolum, genellikle kapanmamış kaçak demektir.

### Klima gazı bittiği nasıl anlaşılır?

Kesin yöntem ölçümdür. Zayıf soğutma, boru buzlanması, yağ izi ve yüksek tüketim şüphe uyandırır; kart veya fan arızası aynı tabloyu taklit edebilir.

### Kaçak onarılmadan gaz doldurulur mu?

Doldurulmamalıdır. Üstüne eklenen gaz kısa sürede kaçar, nem kalır, kompresör zorlanır. Önce nokta, sonra vakum, sonra dolum.

### Klima gaz doldurma evde yapılır mı?

Hayır. Yanlış gaz, aşırı basınç ve vakumsuz dolum cihazı bozar. R32 yanıcı sınıfta değerlendirilir; ev tipi tüp denemesi yangın ve yaralanma riski taşır.

## Ne zaman servis çağırmalısınız?

Filtre ve mod kontrolünden sonra soğutma hâlâ zayıfsa, buz veya yağ izi varsa, cihaz sürekli çalışıp odayı düşüremiyorsa kompresörü zorlamayın. Yerinde teşhis [klima servisi](/hizmetlerimiz/klima-servisi) kapsamındadır; randevu için [iletişim](/iletisim) formunu veya 0551 397 25 26 hattını kullanın.

Kerem Teknik Servis, Alibeyköy Uygar Sokak No:8 A merkezli bağımsız özel teknik servistir. Markaların yetkili servisi değildir. Gaz dolumu vaat değil, ölçüm sonucudur.`,
    coverImage: "/images/blog/klima-gazi-ne-zaman-doldurulur.webp",
    category: "Klima",
    tags: ["klima gazı", "klima gaz doldurma", "klima kaçağı"],
    status: "published",
    metaTitle: "Klima Gazı Ne Zaman Doldurulur?",
    metaDescription:
      "Klima gazı her yıl bitmez. Kaçak, buzlanma ve zayıf soğutma belirtilerini; ölçüm, onarım ve dolum sırasını öğrenin. Yerinde kontrol isteyin.",
    canonicalUrl: null,
    readingTime: 7,
    publishedAt: publishedAug2026,
    createdAt: publishedAug2026,
    updatedAt: publishedAug2026,
  },
  {
    id: "blog-1",
    title: "Klima Bakımı Ne Zaman Yapılmalı?",
    slug: "klima-bakimi-ne-zaman-yapilmali",
    excerpt:
      "Klima bakımının ideal zamanları, düzenli bakımın faydaları ve bakım gerektiren uyarı işaretleri hakkında bilmeniz gerekenler.",
    content: `Klimalar hem yaz hem kış aylarında yoğun kullanılır. Düzenli bakım, cihaz ömrünü uzatır, enerji tüketimini kontrol altında tutar ve sezon ortasında yaşanabilecek arızaları azaltır.

## İdeal Bakım Zamanları

- **İlkbahar (Nisan-Mayıs):** Yaz sezonu öncesi soğutma performansı için ideal dönemdir.
- **Sonbahar (Eylül-Ekim):** Isıtma modu kullanılacaksa ikinci bakım önerilir.

## Evde Yapılabilecek Güvenli Kontroller

- Filtrelerin tozlanıp tozlanmadığını kontrol edin ve kullanım kılavuzuna uygun şekilde temizleyin.
- Kumanda modunun, sıcaklık ayarının ve fan hızının doğru seçildiğinden emin olun.
- İç ünitede kötü koku, anormal ses, su damlatma veya performans düşüşü olup olmadığını gözlemleyin.

## Bakım Gerektiren Belirtiler

- Klimadan kötü koku gelmesi
- Soğutma veya ısıtma performansında düşüş
- Cihazdan anormal sesler
- Su damlatma veya nem artışı

## Ne Zaman Servis Çağırmalısınız?

Su akıtma, yanık kokusu, sigorta attırma, sürekli ses veya belirgin performans kaybı varsa cihazı zorlamayın. Gaz kaçağı, drenaj hattı, fan motoru ve elektronik kart kontrolleri kullanıcı müdahalesiyle yapılmamalıdır.

[Klima servisi](/hizmetlerimiz/klima-servisi) ve [periyodik bakım](/hizmetlerimiz/periyodik-bakim) desteğiyle klimanızı sezon başlamadan kontrol ettirebilirsiniz. Soğutma performansı düşükse [klima soğutmuyor rehberi](/ariza-rehberi/klima/sogutmuyor) ve [klima gazı ne zaman doldurulur](/blog/klima-gazi-ne-zaman-doldurulur) yazısına bakın. Bölge randevusu için [Eyüpsultan klima servisi](/servis-bolgeleri/eyupsultan/klima-servisi) ve [Alibeyköy klima servisi](/servis-bolgeleri/alibeykoy/klima-servisi) sayfalarına göz atabilirsiniz.`,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4H13woV26a2-EfzcfOlw8HERkv_-I5U5q2jhcOCp-yBpu3HGZ3HsrkxJqcJi4ADtG1o5tzVUWW3GB3jurKaMchNkzZAfnWxS-5rVnMZh_aciXW_Kmq9Tn9k1s_F3aQRYHMyRnEgGNk_1n79TM8MjsQotXinz53lwy6c1hYm5IJCy36xwFh7cnqs4Rd-zKQYZwiDhBpCSMhrThKyyDu66If_Jj6V3uYMAWoPFvCzPRLdCG1SllIgQE",
    category: "Klima",
    tags: ["klima bakım", "periyodik bakım"],
    status: "published",
    metaTitle: "Klima Bakımı Ne Zaman Yapılmalı? | Kerem Teknik Servis",
    metaDescription:
      "Klima bakımının ne zaman yapılması gerektiğini, ideal dönemleri ve bakım belirtilerini uzmanlarımızdan öğrenin.",
    canonicalUrl: null,
    readingTime: 4,
    publishedAt: "2026-01-10T09:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "blog-2",
    title: "Kombi Bakımı Neden Önemlidir?",
    slug: "kombi-bakimi-neden-onemlidir",
    excerpt:
      "Kombi bakımının güvenlik, verimlilik ve arıza önleme açısından neden kritik olduğunu anlatıyoruz.",
    content: `Kombi bakımı sadece performans değil, güvenlik açısından da önemlidir. Düzenli bakım yapılmayan kombilerde yakıt tüketimi artabilir, sıcak su konforu düşebilir ve arıza riski yükselir.

## Bakımın Faydaları

- Daha düşük yakıt tüketimi
- Petek ve sıcak su veriminde artış
- Arıza kodlarının önceden tespiti
- Cihaz ömrünün uzaması

## Evde Yapılabilecek Güvenli Kontroller

- Kombi ekranında arıza kodu veya uyarı ışığı olup olmadığını kontrol edin.
- Basınç göstergesini gözlemleyin; sık düşüş veya hızlı yükselme varsa not alın.
- Peteklerin ısınıp ısınmadığını ve sıcak suyun dalgalanıp dalgalanmadığını takip edin.

## Petek Temizliği ile Kombi Bakımı Aynı mı?

Hayır. Kombi bakımı cihazın güvenli ve verimli çalışmasına odaklanır. Petek temizliği ise tesisat içindeki dolaşımı iyileştirmek için ayrı değerlendirilir.

## Ne Zaman Servis Çağırmalısınız?

Gaz kokusu, baca/yanma uyarısı, su kaçağı, sık basınç düşmesi, sıcak su dalgalanması veya tekrarlayan arıza kodu varsa kombiyi zorlamayın. Gaz, baca, yanma ayarı ve iç parça kontrolleri yalnızca yetkili teknik ekip tarafından yapılmalıdır.

Kış sezonu öncesinde [kombi servisi](/hizmetlerimiz/kombi-servisi) veya [periyodik bakım](/hizmetlerimiz/periyodik-bakim) talebi oluşturarak sürpriz arızaların önüne geçebilirsiniz. Su akıtma belirtisi varsa [kombi su akıtıyor rehberi](/ariza-rehberi/kombi/su-akitiyor) ve [Eyüpsultan kombi servisi](/servis-bolgeleri/eyupsultan/kombi-servisi) sayfalarına bakabilirsiniz.`,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVyOnCwNpQ5_8SmWormBHJF1tRTbjSo8KWEvgH3aobFPcxYpRmfReET99mfsUDQwXmN5WwsCjjvTjm1p0ghdC2v2CaT-WLgw1kw1iKwp9IkPM-LNbEf0Q_ONwbicizhH2CuTtNdtyWoC_NC5USQy8Cw2_BD_1wHwoulYhzS_flQVxSXaOaiohtG3GAievde4fTFy5ikZGOpmOLtf8_qk7yNGItL3r-Vz_wzY1E0qW5fdG_nMj_ZF5e",
    category: "Kombi",
    tags: ["kombi bakım", "petek"],
    status: "published",
    metaTitle: "Kombi Bakımı Neden Önemlidir? | Kerem Teknik Servis",
    metaDescription:
      "Kombi bakımının güvenlik, verim ve arıza önleme açısından önemini; evde güvenli kontrolleri ve servis gerektiren durumları öğrenin.",
    canonicalUrl: null,
    readingTime: 5,
    publishedAt: "2026-01-08T09:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "blog-3",
    title: "Buzdolabı Soğutmuyorsa Ne Yapılmalı?",
    slug: "buzdolabi-sogutmuyorsa-ne-yapilmali",
    excerpt:
      "Buzdolabı soğutma problemi yaşandığında kontrol edilmesi gereken noktalar ve ne zaman teknik servis çağrılmalı.",
    content: `Buzdolabının soğutmaması gıda güvenliği açısından hızlı değerlendirme gerektirir. Sorun bazen ayar veya hava dolaşımı kaynaklı olabilir, bazen de fan, motor, gaz veya elektronik kart gibi servis teşhisi isteyen parçalardan kaynaklanabilir.

## Evde Yapılabilecek Güvenli Kontroller

- Termostat ayarının doğru olup olmadığı
- Kapı contasının sıkı kapanıp kapanmadığı
- Fan sesinin duyulup duyulmadığı
- Buzlanma veya aşırı buz birikimi

## Alt Bölme ve Dondurucuyu Ayrı Kontrol Edin

Sadece alt bölüm soğutmuyorsa hava kanalı, fan veya buzlanma kaynaklı bir sorun olabilir. Hem dondurucu hem soğutucu bölüm etkileniyorsa cihazın genel soğutma sistemi yerinde kontrol edilmelidir.

## Ne Zaman Servis Çağırmalısınız?

Motor çalışıyor gibi görünüyor ama soğutma yoksa, fan sesi gelmiyorsa, sürekli buzlanma oluşuyorsa veya kompresör aşırı ısınıyorsa cihazı zorlamayın. Gaz, motor ve elektronik kart arızaları kullanıcı tarafından kesin teşhis edilemez.

Gıda bozulma riski varsa beklemeden [buzdolabı servisi](/hizmetlerimiz/buzdolabi-servisi) için destek alın. [Arıza rehberi](/ariza-rehberi) ve [Arçelik buzdolabı servisi](/markalar/arcelik/buzdolabi-servisi) sayfalarından ilgili kontrol listelerine ulaşabilirsiniz.`,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-wS3qQPls_YG5WJa1fQ-e3zdhGTfCL8UrJLK6mYcBuG_mCKB8BIeScoxIriC6pzQJIEhggMF92aMp6tAM_BD46DnWExRSGHgHOU_68AQ3MM8mypNbiZVzVwoQInWlE4aRMGTc2NYlEmiAZUrpINOqJwSkVbk0afvBSk5fE9QQMvDxqQ2wJXF60Bk4G14WBdjcvZ9jPk-qicGht1oEjHqhrMKIgcPNB-Q7f2M3cs5m-YG5KOJEIvlm",
    category: "Beyaz Eşya",
    tags: ["buzdolabı", "arıza"],
    status: "published",
    metaTitle: "Buzdolabı Soğutmuyorsa Ne Yapılmalı?",
    metaDescription:
      "Buzdolabı soğutmuyorsa termostat, kapı contası, fan ve buzlanma kontrollerini; servis gerektiren arıza belirtilerini öğrenin.",
    canonicalUrl: null,
    readingTime: 5,
    publishedAt: "2026-01-05T09:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "blog-4",
    title: "Çamaşır Makinesi Sıkma Yapmıyorsa Sebebi Ne Olabilir?",
    slug: "camasir-makinesi-sikma-yapmiyorsa-sebebi-ne-olabilir",
    excerpt:
      "Çamaşır makinesi sıkma yapmama sorununun olası nedenleri ve çözüm yolları.",
    content: `Çamaşır makinesinin sıkma yapmaması dengesiz yükleme, yanlış program seçimi, tahliye sorunu, pompa tıkanıklığı veya motor/kayış gibi teknik arızalardan kaynaklanabilir.

## Evde Yapılabilecek Güvenli Kontroller

- Programın sıkma aşaması içerip içermediğini kontrol edin.
- Makineyi aşırı doldurmadığınızdan ve çamaşırların tek tarafa yığılmadığından emin olun.
- Makinenin düz zeminde durup durmadığını kontrol edin.
- Kullanım kılavuzu uygunsa, cihazın enerjisini kestikten sonra filtre kapağında su birikebileceğini dikkate alarak filtreyi kontrol edin.

## Olası Nedenler

- Dengesiz yük veya yanlış program seçimi
- Pompa veya filtre tıkanıklığı
- Tahliye hortumunda bükülme ya da tıkanma
- Motor kayışının gevşemesi veya kopması
- Elektronik kart ya da motor arızası

## Ne Zaman Servis Çağırmalısınız?

Makine suyu boşaltmıyorsa, kazan dönmüyorsa, yanık kokusu varsa, sigorta attırıyorsa veya motor sesi gelip hareket oluşmuyorsa cihazı çalıştırmaya devam etmeyin. Kayış, motor, pompa ve elektronik kart müdahaleleri teknik servis tarafından yapılmalıdır.

Sorun basit yük dengesinden kaynaklanmıyorsa [çamaşır makinesi servisi](/hizmetlerimiz/camasir-makinesi-servisi) için yerinde arıza tespiti isteyebilirsiniz. [Bosch çamaşır makinesi servisi](/markalar/bosch/camasir-makinesi-servisi) ve [Bosch E09 hata kodu](/hata-kodlari/camasir-makinesi/bosch-siemens-profilo/e09) sayfaları sıkma arızalarında yol gösterir.`,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4H13woV26a2-EfzcfOlw8HERkv_-I5U5q2jhcOCp-yBpu3HGZ3HsrkxJqcJi4ADtG1o5tzVUWW3GB3jurKaMchNkzZAfnWxS-5rVnMZh_aciXW_Kmq9Tn9k1s_F3aQRYHMyRnEgGNk_1n79TM8MjsQotXinz53lwy6c1hYm5IJCy36xwFh7cnqs4Rd-zKQYZwiDhBpCSMhrThKyyDu66If_Jj6V3uYMAWoPFvCzPRLdCG1SllIgQE",
    category: "Arıza Rehberi",
    tags: ["çamaşır makinesi", "sıkma"],
    status: "published",
    metaTitle: "Çamaşır Makinesi Sıkma Yapmıyor | Nedenleri",
    metaDescription:
      "Çamaşır makinesi sıkma yapmıyorsa yük dengesi, tahliye, filtre ve servis gerektiren arıza belirtilerini güvenli şekilde kontrol edin.",
    canonicalUrl: null,
    readingTime: 5,
    publishedAt: "2026-01-03T09:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "blog-5",
    title: "Bulaşık Makinesi Neden Koku Yapar?",
    slug: "bulasik-makinesi-neden-koku-yapar",
    excerpt:
      "Bulaşık makinesi kokusu neden oluşur ve nasıl önlenir? Pratik bakım önerileri.",
    content: `Bulaşık makinesi kokusu çoğunlukla filtre, sifon bağlantısı, tahliye hattı veya deterjan kalıntılarından kaynaklanır. Kokunun makineden mi yoksa mutfak giderinden mi geldiğini ayırmak doğru çözüm için önemlidir.

## Koku Nedenleri

- Filtre ve pompa bölgesinde birikim
- Düşük sıcaklıkta yıkama
- Uzun süre kapalı bırakılması
- Sifon tıkanıklığı

## Evde Yapılabilecek Güvenli Kontroller

- Filtreyi çıkarıp kullanım kılavuzuna uygun şekilde temizleyin.
- Kapak fitilinde, iç haznede ve püskürtme kollarında kalıntı olup olmadığını kontrol edin.
- Uygun deterjanla boş ve sıcak bir program çalıştırın.
- Koku giderden geliyorsa sifon bağlantısı veya tesisat kaynaklı olabileceğini unutmayın.

## Ne Zaman Servis Çağırmalısınız?

Makine su tahliye etmiyorsa, giderden geri koku veya su geliyorsa, pompa sesi anormalse, kaçak varsa ya da temizlikten kısa süre sonra koku tekrar ediyorsa teknik kontrol gerekir.

Düzenli temizlik sorunu çözmüyorsa [bulaşık makinesi servisi](/hizmetlerimiz/bulasik-makinesi-servisi) desteği alın. [Musluk işareti rehberi](/ariza-rehberi/bulasik-makinesi/musluk-isareti) ve [Bosch bulaşık makinesi servisi](/markalar/bosch/bulasik-makinesi-servisi) sayfalarından ek kontrol listelerine ulaşabilirsiniz.`,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVyOnCwNpQ5_8SmWormBHJF1tRTbjSo8KWEvgH3aobFPcxYpRmfReET99mfsUDQwXmN5WwsCjjvTjm1p0ghdC2v2CaT-WLgw1kw1iKwp9IkPM-LNbEf0Q_ONwbicizhH2CuTtNdtyWoC_NC5USQy8Cw2_BD_1wHwoulYhzS_flQVxSXaOaiohtG3GAievde4fTFy5ikZGOpmOLtf8_qk7yNGItL3r-Vz_wzY1E0qW5fdG_nMj_ZF5e",
    category: "Bakım Önerileri",
    tags: ["bulaşık makinesi", "koku"],
    status: "published",
    metaTitle: "Bulaşık Makinesi Neden Koku Yapar?",
    metaDescription:
      "Bulaşık makinesi kokusunun filtre, gider, deterjan kalıntısı veya tahliye kaynaklı nedenlerini ve servis gerektiren durumları öğrenin.",
    canonicalUrl: null,
    readingTime: 5,
    publishedAt: "2026-01-01T09:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
];
