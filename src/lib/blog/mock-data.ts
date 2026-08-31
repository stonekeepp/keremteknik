import type { BlogPost } from "./types";

const now = "2026-01-15T10:00:00.000Z";
const publishedAug2026 = "2026-08-24T18:00:00.000Z";
const publishedAug28 = "2026-08-28T10:00:00.000Z";
const publishedAug31 = "2026-08-31T10:00:00.000Z";

export const SEED_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-7",
    title: "Klima Su Damlatıyor: Nedenleri ve Ne Yapmalı?",
    slug: "klima-su-damlatiyor-nedenleri",
    excerpt:
      "İç üniteden su damlamasının en sık nedenleri drenaj tıkanıklığı, kirli filtre ve eğim hatasıdır. Güvenli kontroller ve ne zaman servis çağıracağınız.",
    content: `Klima su damlatıyor şikâyeti yazın en sık gelen çağrılardan biridir. Salon duvarındaki iç ünitenin altından damlayan su, mobilyayı ıslatır; panik “cihaz bozuldu, gaz bitti” refleksini tetikler. Çoğu zaman sorun soğutucu gaz değil, yoğuşma suyunun dışarı çıkamamasıdır.

> **Kısa cevap:** İç üniteden su sızıyorsa önce cihazı kapatın, suyun elektronik karta ulaşmasını engelleyin. En sık neden tıkanmış drenaj hattı, kirli filtre veya bozuk iç ünite eğimidir. Hortuma tel sokmak veya panel sökmek risklidir; güvenli kontrollerden sonra yerinde teşhis gerekir.

Yoğuşma normaldir: soğutma modunda iç ünite bataryası soğur, odadaki nem suya dönüşür ve drenaj tavası + hortum üzerinden dışarı akar. Su **iç mekâna** sızıyorsa tahliye yolu tıkanmış veya yönü bozulmuş demektir. Soğutmama şikâyeti ayrı bir listedir; genel kontrol için [klima soğutmuyor rehberine](/ariza-rehberi/klima/sogutmuyor) bakın. Burada konu yalnızca su sızıntısıdır.

## İç ünite damlaması ile dış ünite damlaması aynı şey değildir

Dış ünite veya tahliye hortumunun dış ucundan damlayan su, doğru montajda beklenen bir sonuçtur: iç mekândaki yoğuşma dışarı taşınır. Hortum ucu tıkalıysa veya yukarı kıvrılmışsa su geri basar; o zaman klima su damlatıyor tablosu içeride görülür.

İç ünitenin altından, yanından veya duvar birleşiminden gelen su normal sayılmaz. Elektronik kart ıslanmadan önce fişi çekin veya sigortayı kapatın. Su + elektrik bir arada güvenlik riskidir; “biraz daha çalışsın, oda soğusun” yaklaşımı kartı bozabilir.

Üretici rehberleri de aynı ayrımı yapar: [Bosch Home Comfort — klima neden su akıtır](https://www.bosch-homecomfort.com/tr/tr/residential/bilgiler/klima-rehberi/klima-neden-su-akitir-/) tahliye tıkanıklığı, filtre ve montaj eğimini öne çıkarır.

Split cihazlarda yoğuşma miktarı oda nemine, hedef sıcaklığa ve çalışma süresine bağlıdır. Nemli yaz günlerinde tava daha hızlı dolar; hat kısmen tıkalıysa taşma erken başlar. Kışın ısıtma modunda iç ünite damlaması nadirdir; görürseniz farklı bir kaçak (yoğuşma dışı) ihtimali yükselir.

## Klima su damlatıyor: en sık nedenler

Tek belirti tek teşhis değildir; saha sırası genelde şöyledir.

### 1. Drenaj hattı tıkanıklığı

Toz, yosun, küf ve böcek kalıntısı hortumu daraltır veya tıkar. Klima uzun çalıştıkça tava dolar, taşar. Belirti: dış uçtan su gelmezken iç ünite damlar; bazen şıpırtı sesi veya küf kokusu eşlik eder. Bu, klima drenaj tıkanıklığı aramalarının da karşılığıdır.

### 2. Kirli filtre ve bozulmuş hava akışı

Filtre tıkalıysa batarya aşırı soğuyabilir, buz tutar; cihaz kapanınca buz erir ve tavayı aşar. Aynı anda soğutma zayıfsa önce filtre, sonra basınç bakılır. Gaz şüphesi için [klima gazı ne zaman doldurulur](/blog/klima-gazi-ne-zaman-doldurulur) yazısına geçin; suyun tek başına “gaz bitmiş” demek olmadığını unutmayın.

### 3. İç ünite eğimi veya montaj hatası

İç ünite tahliye tarafına hafif eğimli olmalıdır. Yanlış terazide su tavayı aşar; montajdan hemen sonra başlayan damlama sık bu gruptadır. Sonradan duvar dübellerinin gevşemesi de eğimi bozabilir.

### 4. Drenaj tavası / hortum hasarı

Tava çatlamış, yerinden oynamış veya hortum ezilmiş, delinmiş olabilir. Koku ile birlikte damlama biyofilm birikimine işaret eder; yüzeysel silmek kök nedeni çözmez. Hijyen odaklı temizlik [klima bakımı](/hizmetlerimiz/klima-bakimi) ve [klima temizliği](/hizmetlerimiz/klima-temizligi) kapsamındadır.

### 5. Buzlanma sonrası ani taşma

Düşük gaz, kirli filtre veya zayıf hava akışı bataryada buz bırakır. Erime ani ve yoğundur; tava kapasitesini aşar. Buzlu çalıştırmaya devam etmeyin; cihazı kapatıp erimesini bekleyin.

## Evde güvenli kontroller

**Yapın**

- Cihazı kapatın; suyu karttan uzak tutun, zemini kurulayın
- Kullanım kılavuzuna göre filtreyi çıkarıp yıkayın / kurulayın
- Dışarıdaki drenaj hortumu ucuna bakın: kıvrık mı, tıkaç var mı, su damlıyor mu?
- İç ünite duvara göre belirgin bir yana yatık mı, gözle not edin
- Koku var mı, buz görünüyor mu kaydedin

**Yapmayın**

- Hortuma tel, askı teli veya sivri cisim sokmayın (delinme riski)
- Panel söküp tava “temizliği” için bilinmeyen kimyasal dökmeyin
- Açık alev veya kaynar su ile buz eritmeye çalışmayın
- Su varken cihazı zorla çalıştırmayın

Görünür dış uç tıkanıklığı bazen elle açılır; hat içindeki jel kıvamındaki birikinti basınçlı temizlik ister. “Sirke döküp kapatalım” denemeleri yanlış eğimde veya delik hortumda işe yaramaz.

## Apartman balkonu ile site hattı

Alibeyköy ve Eyüpsultan apartman stoğunda iç ünite çoğu zaman salon duvarında, hortum balkona iner; kısa hat, hızlı tıkanma. Dar sokak tozu filtre aralığını kısaltır. Göktürk ve site adreslerinde dış ünite çatı veya otopark katındaysa uzun drenaj, güvenlik kaydı ve erişim randevu süresini uzatır.

İlçe planı [Eyüpsultan klima servisi](/servis-bolgeleri/eyupsultan/klima-servisi), semt ofis yakınlığı [Alibeyköy klima servisi](/servis-bolgeleri/alibeykoy/klima-servisi) sayfasındadır. Bu yazı konum landing’i değildir; su şikâyetinin bilgi rehberidir.

## Bakım ile acil su sızıntısı ayrımı

Periyodik bakım filtre, serpantin, drenaj akış testi ve performans kontrolünü kapsar; taşmayı önler. Zamanlama için [klima bakımı ne zaman yapılmalı](/blog/klima-bakimi-ne-zaman-yapilmali) yazısına bakın. Su hâlihazırda akıyorsa “sonraki bakıma bırakayım” demeyin: kart ıslanması onarımı büyütür.

Yerinde teşhis [klima servisi](/hizmetlerimiz/klima-servisi) kapsamındadır. Tıkanıklık açılır, eğim düzeltilir, gerekirse hortum veya tava değişir; onayınız olmadan parça takılmaz. Bağımsız özel teknik servisiz; markaların yetkili servisi değiliz.

## Sık sorulan sorular

### Klima su damlatıyor neden olur?

En sık neden drenaj hattı tıkanıklığıdır. Kirli filtre, yanlış eğim, çatlak tava ve buz erimesi de aynı belirtiyi verir.

### Klima su akıtıyor ise gaz mı bitmiş?

Çoğu zaman hayır. Gaz eksikliği buzlanma yoluyla dolaylı taşma yapabilir; asıl sık neden tahliye tıkanıklığıdır. Basınç ölçümü olmadan gaz basmak doğru değildir.

### Dış üniteden su damlaması normal mi?

Doğru montajda dış tahliye ucundan damlama beklenen yoğuşma tahliyesidir. İç üniteden damlama normal değildir.

### Drenaj hortumunu kendim temizleyebilir miyim?

Dış uçtaki görünür tıkaç bazen temizlenebilir. Hortum içine tel sokmak, panel sökmek veya bilinmeyen kimyasal dökmek önerilmez.

### Ne zaman servis çağırmalıyım?

Su tekrarlıyorsa, koku veya buz varsa, filtre temizliği yetmiyorsa, elektrik/ıslanma riski varsa cihazı kapatıp servis alın.

## Ne zaman servis çağırmalısınız?

İç üniteden damlama filtre + dış uç kontrolünden sonra devam ediyorsa kompresörü veya kartı riske atmayın. Randevu için [iletişim](/iletisim) formunu veya 0551 397 25 26 hattını kullanın.

Kerem Teknik Servis, Alibeyköy Uygar Sokak No:8 A merkezli bağımsız özel teknik servistir. Markaların yetkili servisi değildir. Su sızıntısında önce güvenlik, sonra kök neden.`,
    coverImage: "/images/services/hero-klima-servisi.webp",
    category: "Klima",
    tags: ["klima su damlatıyor", "klima drenaj", "klima su akıtıyor"],
    status: "published",
    metaTitle: "Klima Su Damlatıyor: Nedenleri ve Ne Yapmalı?",
    metaDescription:
      "Klima su damlatıyor? Drenaj tıkanıklığı, kirli filtre ve eğim hatalarını ayırın. Güvenli kontroller ve ne zaman servis çağıracağınız.",
    canonicalUrl: null,
    readingTime: 5,
    publishedAt: publishedAug28,
    createdAt: publishedAug28,
    updatedAt: publishedAug28,
  },
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
- İç üniteden su damlar; drenaj açık olsa bile yoğuşma düzensizdir ([klima su damlatıyor rehberi](/blog/klima-su-damlatiyor-nedenleri))
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
      "Ev tipi klimalarda yılda en az bir kez, yoğun kullanımda iki kez bakım önerilir. Yaz öncesi Nisan–Mayıs, ısıtma kullanıyorsanız Eylül–Ekim ideal dönemdir.",
    content: `Klima bakımı ne zaman yapılmalı sorusunun cevabı, cihazı ne kadar ve hangi modda kullandığınıza bağlıdır. Takvimde tek bir “bakım günü” yoktur; doğru zaman, cihazın en yoğun çalışacağı sezondan hemen öncedir. Bakımı ertelemek, yazın ortasında soğutma düşüşü, koku veya su damlatma şikâyetiyle karşılaşmanız anlamına gelir.

> **Kısa cevap:** Konut kullanımında yılda en az bir kez profesyonel klima bakımı yapılmalıdır; ideal dönem yaz öncesi Nisan–Mayıs’tır. Klimayı kışın ısıtma modunda da kullanıyorsanız Eylül–Ekim’de ikinci kontrol önerilir. Evde yalnızca filtre temizliği yapılır; gaz, drenaj ve serpantin işlemleri servis kapsamındadır.

Düzenli bakım cihaz ömrünü uzatır, elektrik tüketimini kontrol altında tutar ve sezon ortası arızaları azaltır. Bakım ile [klima gazı dolumu](/blog/klima-gazi-ne-zaman-doldurulur) aynı iş değildir: sağlam sistemde gaz dokunulmaz, filtre ve drenaj temizlenir. Soğutma şikâyeti için önce [klima soğutmuyor rehberine](/ariza-rehberi/klima/sogutmuyor) bakın; burada konu yalnızca bakım zamanlamasıdır.

## Mevsimlik bakım takvimi

Türkiye’de ev tipi split klimalar çoğunlukla yazın soğutma, bir kısmı kışın ısıtma için çalışır. Bakım takvimi bu kullanıma göre kurulur.

### Yaz sezonu öncesi (Nisan – Mayıs)

Kış boyunca kapalı veya seyrek kullanılan cihazda toz, küf ve kuru kir birikir. Bahar bakımı, yaz sıcakları başlamadan filtre, serpantin ve drenaj hattını temizler. Soğutma performansı sezonun ilk gününden ölçülür; kompresör zorlanmadan oda hedefe iner.

Bu dönem randevu yoğunluğu artar; Mayıs ortasına bırakmak aynı gün servis bulmayı zorlaştırabilir. Nisan sonu – Mayıs başı genelde en rahat penceredir.

### Kış / ısıtma öncesi (Eylül – Ekim)

Isıtma modu kullanıyorsanız yaz birikintisi temizlenmeli; nemli serpantin kışın odaya küflü hava üfleyebilir. Isıtma performansı ve drenaj testi yapılır. Yalnızca yazın soğutma kullanan konutlarda ikinci bakım şart değildir; yılda bir kez yaz öncesi yeterli olabilir.

### Yoğun kullanımda sıklık

Günde birkaç saatten fazla çalışan, evcil hayvanlı, tozlu veya kalabalık evlerde altı ayda bir kontrol mantıklıdır. Ofis, dükkân ve sürekli açık işyerleri ayrı planlama ister; bu yazı ev tipi konut odaklıdır.

## Profesyonel bakımda neler yapılır?

[Klima bakımı](/hizmetlerimiz/klima-bakimi) ve [klima temizliği](/hizmetlerimiz/klima-temizligi) kapsamında yerinde tipik adımlar şunlardır:

1. **Filtre kontrolü ve temizlik** — tıkanıklık hava akışını bozar, buzlanma ve zayıf soğutma yapar.
2. **İç serpantin ve fan temizliği** — toz tabakası ısı transferini düşürür, koku üretir.
3. **Drenaj hattı akış testi** — tıkanıklık [klima su damlatıyor](/blog/klima-su-damlatiyor-nedenleri) tablosunun öncüsüdür.
4. **Dış ünite görsel kontrolü** — fan, kanat temizliği, hortum ve montaj eğimi.
5. **Elektrik bağlantıları ve kumanda testi** — gevşek klemens, mod ve sıcaklık ayarı doğrulaması.
6. **Performans gözlemi** — soğutma/ısıtma düşüşü, anormal ses veya koku not edilir.

Gaz basıncı şüphe varsa ayrı ölçüm yapılır; rutin bakım paketine “otomatik gaz dolumu” dahil değildir. Ölçümde eksik yoksa dolum önerilmez.

## Evde yapılabilecek güvenli kontroller

**Yapın**

- Kullanım kılavuzuna göre filtreyi çıkarıp yıkayın veya süpürün; tam kuruyana kadar bekleyin
- Kumandanın soğutma/ısıtma modunu ve hedef sıcaklığı kontrol edin
- İç ünitede koku, ses, su izi veya performans düşüşü olup olmadığını not edin
- Dış ünite önünün kapalı olmadığını, hortum ucunun tıkalı olmadığını gözle kontrol edin

**Yapmayın**

- Panel söküp serpantine kimyasal dökmeyin
- Drenaj hortumuna tel veya sivri cisim sokmayın
- “Bakım” adı altında evde gaz tüpü bağlamayın
- Koku veya su varken cihazı zorla çalıştırmayın

Ayda bir filtre kontrolü ev kullanıcısının yapabileceği tek düzenli işlemdir. Serpantin yıkama, basınçlı temizlik ve elektrik testi ekipman ister.

## Bakım gerektiren belirtiler (takvim dışı)

Sezon öncesi beklemeyin; aşağıdakilerden biri varsa erken bakım veya arıza teşhisi gerekir:

- Klimadan küf, ekşi veya yanık koku
- Soğutma veya ısıtma belirgin zayıfladı; cihaz uzun süre çalışıyor, oda inmiyor
- Tıkırtı, gıcırtı veya anormal titreşim
- İç üniteden su damlatma — ayrıntı: [klima su damlatıyor nedenleri](/blog/klima-su-damlatiyor-nedenleri)
- Son bakımdan bir yıldan uzun süre geçti ve performans düştü

Tek belirti tek teşhis değildir. Zayıf soğutma gaz, filtre veya kart kaynaklı olabilir; [klima gazı ne zaman doldurulur](/blog/klima-gazi-ne-zaman-doldurulur) yazısında ölçüm şartı anlatılır.

## Bakım ile acil arıza ayrımı

Periyodik bakım önleyicidir; su sızıntısı, yanık kokusu, sigorta attırma veya sürekli arıza kodu acildir. “Zaten bakım randevusu aldım, bir hafta daha çalışsın” yaklaşımı kart ıslanması veya kompresör zorlanması riskini büyütür.

Su şikâyeti varsa önce cihazı kapatın; bakım tarihini beklemeyin. Koku ve performans için kısa süreli kullanım tolere edilebilir; yine de randevuyu öne çekmek daha güvenlidir.

## Apartman ve site farkı

Alibeyköy ve Eyüpsultan apartman stoğunda iç ünite salon duvarında, dış ünite balkondadır; erişim kısa, filtre tozu hızlı birikir. Site ve Göktürk tipi adreslerde dış ünite çatı veya otopark katında olabilir; erişim ve güvenlik kaydı randevu süresini uzatır.

Bölge planı [Eyüpsultan klima servisi](/servis-bolgeleri/eyupsultan/klima-servisi) ve [Alibeyköy klima servisi](/servis-bolgeleri/alibeykoy/klima-servisi) sayfalarındadır. Bu yazı konum landing’i değildir; bakım zamanlaması bilgi rehberidir.

## Sık sorulan sorular

### Klima bakımı ne zaman yapılmalı?

Konut kullanımında yılda en az bir kez; ideal dönem yaz öncesi Nisan–Mayıs. Isıtma modu kullanılıyorsa Eylül–Ekim’de ikinci kontrol önerilir.

### Klima bakımı kaç ayda bir yapılır?

Normal ev kullanımında yılda bir kez yeterlidir. Günde saatlerce çalışan veya tozlu ortamda altı ayda bir düşünülebilir.

### Evde klima bakımı yapılır mı?

Yalnızca filtre temizliği ve görsel kontrol evde yapılır. Serpantin, drenaj, gaz ve elektrik işlemleri servis kapsamındadır.

### Klima bakımında gaz dolumu yapılır mı?

Hayır, rutin bakımın parçası değildir. Gaz yalnızca basınç ölçümüyle eksiklik doğrulandığında ve kaçak onarıldıktan sonra doldurulur.

### Ne zaman servis çağırmalıyım?

Sezon öncesi planlı bakım için veya koku, su, ses, performans düşüşü ve bir yılı aşan bakımsızlık için. Acil su veya yanık kokusunda beklemeyin.

## Ne zaman servis çağırmalısınız?

Nisan–Mayıs veya Eylül–Ekim penceresinde [periyodik bakım](/hizmetlerimiz/periyodik-bakim) veya [klima servisi](/hizmetlerimiz/klima-servisi) randevusu alın. Belirti varsa takvimi beklemeyin. Randevu için [iletişim](/iletisim) formunu veya 0551 397 25 26 hattını kullanın.

Kerem Teknik Servis, Alibeyköy Uygar Sokak No:8 A merkezli bağımsız özel teknik servistir. Markaların yetkili servisi değildir. Bakım ölçüm ve temizlik işidir; gereksiz gaz dolumu önerilmez.`,
    coverImage: "/images/services/hero-klima-servisi.webp",
    category: "Klima",
    tags: ["klima bakım", "periyodik bakım", "klima bakımı ne zaman"],
    status: "published",
    metaTitle: "Klima Bakımı Ne Zaman Yapılmalı?",
    metaDescription:
      "Klima bakımı ne zaman yapılmalı? Yaz öncesi Nisan–Mayıs, ısıtma kullanıyorsanız Eylül–Ekim. Yılda kaç kez, evde ne yapılır, gaz dolumu ayrımı.",
    canonicalUrl: null,
    readingTime: 7,
    publishedAt: "2026-01-10T09:00:00.000Z",
    createdAt: now,
    updatedAt: publishedAug31,
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
    metaTitle: "Kombi Bakımı Neden Önemlidir?",
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
