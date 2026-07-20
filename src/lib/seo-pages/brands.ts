import { BRAND_SERVICE_SEEDS, type BrandServiceSeed } from "./brand-services";

export type BrandHubSeed = {
  brandSlug: string;
  brandName: string;
  serviceSlugs: string[];
  deviceSlugs: string[];
  focusKeyphrase: string;
  uniqueIntro: string;
  sections: { id: string; title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

const BRAND_HUB_INTROS: Record<string, string> = {
  bosch:
    "Bosch; çamaşır ve bulaşık makinelerinden klimalara ve kombilere kadar geniş bir ürün yelpazesine sahiptir. Alman mühendisliği ve sessiz çalışma özellikleriyle bilinen markada motor, pompa, inverter kart ve elektronik arızalar yerinde teşhis gerektirir. Kerem Teknik Servis, İstanbul genelinde Bosch cihazları için bağımsız özel teknik servis hizmeti sunar; yetkili servis değildir.",
  siemens:
    "Siemens beyaz eşyada iQdrive motor teknolojisi ve dengeli yıkama performansıyla öne çıkar. Çamaşır ve bulaşık makinelerinde pompa, ısıtıcı ve elektronik kart arızaları model serisine göre farklılık gösterir. Kerem Teknik Servis, Siemens cihaz kullanıcılarına İstanbul'da bağımsız özel servis desteği sağlar.",
  profilo:
    "Profilo, Türkiye pazarına uygun yerli üretim çamaşır ve bulaşık makineleri sunar. Yedek parça erişilebilirliği ve pratik kullanım avantajlarıyla bilinir; bazı modellerde Bosch/Siemens grubu parça uyumluluğu sınırlı olabilir. Kerem Teknik Servis, Profilo cihazlarında bağımsız özel servis olarak yerinde onarım hizmeti verir.",
  arcelik:
    "Arçelik; çamaşır makinesi, bulaşık makinesi, buzdolabı ve klima kategorilerinde geniş model çeşitliliği sunar. Yerli üretim ve fiyat-performans dengesiyle Türkiye'de yaygın kullanılır. Kerem Teknik Servis, Arçelik cihazlarında pompa, kompresör, kart ve sensör arızalarında bağımsız özel servis hizmeti sunar.",
  beko:
    "Beko; çamaşır makinesi, bulaşık makinesi ve klima segmentinde ekonomik ve orta segment modelleriyle bilinir. Arçelik grubu elektronik yapısı model yılına göre değişir. Kerem Teknik Servis, İstanbul genelinde Beko cihazları için yetkili servis olmadan bağımsız teknik destek sağlar.",
  vestel:
    "Vestel çamaşır makinesi ve klima kategorilerinde yerli üretim ve erişilebilir fiyat segmentiyle öne çıkar. Elektronik kart ve sensör arızalarında model serisi doğrulaması önemlidir. Kerem Teknik Servis, Vestel cihazlarında bağımsız özel servis olarak yerinde teşhis ve onarım yapar.",
  miele:
    "Miele premium Alman segmentinde çamaşır ve bulaşık makineleri üretir. Uzun ömürlü mekanik yapı ve hassas program kontrolü sunar; parça ve kalibrasyon hassasiyeti yüksektir. Kerem Teknik Servis, Miele cihazlarında bağımsız özel servis deneyimiyle İstanbul'da hizmet verir.",
  samsung:
    "Samsung buzdolaplarında Digital Inverter kompresör teknolojisi ve akıllı sensörler öne çıkar. Soğutma, defrost ve kart arızalarında model bazlı teşhis gerekir. Kerem Teknik Servis, Samsung buzdolabı kullanıcılarına bağımsız özel servis desteği sunar.",
  "general-electric":
    "General Electric buzdolapları geniş hacimli modeller ve dayanıklı soğutma üniteleriyle bilinir. Eski ve yeni serilerde gaz tipi ile kart yapısı farklılık gösterebilir. Kerem Teknik Servis, General Electric buzdolabı arızalarında İstanbul genelinde bağımsız teknik servis hizmeti verir.",
  westinghouse:
    "Westinghouse buzdolapları no-frost sistemli modellerde dengeli soğutma sunar. Türkiye'deki eski stok modellerde parça tedariki planlı yapılmalıdır. Kerem Teknik Servis, Westinghouse buzdolabı kompresör ve defrost sorunlarında bağımsız özel servis olarak çalışır.",
  mitsubishi:
    "Mitsubishi Electric klimaları Japon inverter teknolojisi ve verimli kompresör yapısıyla bilinir. R32 gazlı yeni nesil modellerde kaçak testi özel ekipman gerektirir. Kerem Teknik Servis, Mitsubishi klima bakım ve onarımında bağımsız servis desteği sağlar.",
  daikin:
    "Daikin klima sektöründe uzmanlaşmış global bir markadır; inverter teknolojisi ve geniş kapasite aralığı sunar. Split ve farklı seriler farklı servis prosedürleri gerektirir. Kerem Teknik Servis, Daikin klima arızalarında İstanbul'da bağımsız özel servis hizmeti verir.",
  midea:
    "Midea uygun fiyatlı inverter klima modelleri ve hızlı yedek parça erişimiyle yaygınlaşmaktadır. Carrier ve diğer OEM markalarla ortak platform kullanımı sık görülür. Kerem Teknik Servis, Midea klima gaz, fan ve kart arızalarında bağımsız servis olarak destek sunar.",
  baymak:
    "Baymak, Türkiye'nin en yaygın yerli kombi markalarından biridir. Yoğuşmalı ve hermetik modellerde bakım aralıkları farklıdır; basınç, pompa ve ateşleme arızaları sık başvuru nedenleridir. Kerem Teknik Servis, Baymak kombi kullanıcılarına bağımsız özel servis hizmeti sunar.",
  demirdokum:
    "Demirdöküm kombileri Türkiye'de köklü bir ısıtma markasıdır. Atron, Nitron gibi serilerde kart ve pompa kodları değişir. Kerem Teknik Servis, Demirdöküm kombi eşanjör, sensör ve ateşleme arızalarında İstanbul genelinde bağımsız teknik destek sağlar.",
  eca:
    "ECA yoğuşmalı kombi segmentinde fiyat-performans odaklı modeller sunar. Proteus ve Confeo serilerinde elektronik kart versiyonları farklıdır. Kerem Teknik Servis, ECA kombi sıcak su ve petek ısıtma sorunlarında bağımsız özel servis olarak hizmet verir.",
  buderus:
    "Buderus Alman ısıtma teknolojisiyle yüksek verimli yoğuşmalı kombiler üretir. Bosch grubu parça uyumluluğu bazı modellerde geçerlidir. Kerem Teknik Servis, Buderus kombi bakım ve onarımında bağımsız servis desteği sunar.",
  vaillant:
    "Vaillant premium Alman kombi segmentinde ecoTEC serileriyle bilinir. Sensör kalibrasyonu ve yoğuşma sistemi hassas bakım gerektirir. Kerem Teknik Servis, Vaillant kombi arızalarında İstanbul'da bağımsız özel servis hizmeti verir.",
  protherm:
    "Protherm, Vaillant grubuna bağlı kompakt yoğuşmalı kombi modelleri sunar. Ortak platform kullanan modellerde parça kodları benzer olabilir. Kerem Teknik Servis, Protherm kombi basınç ve pompa arızalarında bağımsız teknik servis olarak çalışır.",
  ferroli:
    "Ferroli İtalyan kökenli kombi üreticisidir; Divatech ve Bluehelix serilerinde kart yapısı farklılık gösterir. Kerem Teknik Servis, Ferroli kombi ateşleme, eşanjör ve pompa sorunlarında bağımsız özel servis desteği sağlar.",
  viessmann:
    "Viessmann premium Alman ısıtma sistemleriyle Vitodens serilerinde yüksek verim sunar. Servis yazılımı ile teşhis tercih edilir. Kerem Teknik Servis, Viessmann kombi bakım ve onarımında İstanbul genelinde bağımsız özel servis hizmeti verir.",
};

function buildHubSections(
  brandName: string,
  deviceTitles: string[],
): { id: string; title: string; body: string }[] {
  const deviceList = deviceTitles.join(", ");
  return [
    {
      id: "marka-kapsam",
      title: "Marka servis kapsamı",
      body: `Kerem Teknik Servis, ${brandName} markasına ait ${deviceList} cihazlarında arıza tespiti, onarım ve bakım hizmeti sunar. Motor, pompa, kompresör, eşanjör, elektronik kart, sensör ve conta değişimleri model uyumluluğu kontrol edilerek yapılır. Bağımsız özel servis olduğumuz için üretici garantisi kapsamındaki işlemler için marka yetkili servisine yönlendirme yapılabilir.`,
    },
    {
      id: "marka-surec",
      title: "Hizmet süreci",
      body: `${brandName} cihazınız için arıza kaydı oluşturduktan sonra İstanbul'daki adresinize uygun randevu planlanır. Teknisyen yerinde güvenli kontrolleri yapar, arıza teşhisini gerçekleştirir ve onayınız olmadan parça değişimi uygulamaz. Onarım sonrası test çalıştırması yapılarak cihaz teslim edilir; kullanılan parça ve işçilik hakkında bilgi verilir.`,
    },
    {
      id: "marka-notlar",
      title: "Bağımsız servis notu",
      body: `Kerem Teknik Servis, ${brandName} markasının yetkili servisi değildir. Marka adı yalnızca hangi cihazlarda teknik destek verdiğimizi açıklamak için kullanılır. Elektrikli cihazlarda fişi çekmeden iç aksama müdahale etmeyin; gaz ve su kaçağı şüphesinde cihazı kapatıp servis çağırın.`,
    },
  ];
}

function buildHubFaqs(
  brandName: string,
  serviceSlugs: string[],
): { question: string; answer: string }[] {
  const serviceCount = serviceSlugs.length;
  return [
    {
      question: `Kerem Teknik Servis ${brandName} yetkili servisi mi?`,
      answer: `Hayır. Bağımsız özel teknik servis olarak hizmet veriyoruz; ${brandName} markasının yetkili servisi değiliz. Garanti kapsamındaki cihazlar için üretici yetkili servisine başvurmanız gerekir.`,
    },
    {
      question: `${brandName} için hangi cihazlarda servis veriyorsunuz?`,
      answer: `${brandName} markası için ${serviceCount} farklı cihaz kategorisinde yerinde teşhis ve onarım desteği sunuyoruz. İlgili cihaz sayfasından arıza türleri, güvenli kontroller ve servis kapsamı hakkında ayrıntılı bilgi alabilirsiniz.`,
    },
    {
      question: `İstanbul'da ${brandName} servisi nasıl talep edilir?`,
      answer: `İletişim kanallarımızdan arıza kaydı oluşturabilir veya telefon ile ulaşabilirsiniz. İlçe ve uygunluk durumuna göre randevu planlanır; bağımsız özel servis olarak yerinde hizmet verilir.`,
    },
  ];
}

function buildBrandHubs(seeds: BrandServiceSeed[]): BrandHubSeed[] {
  const grouped = new Map<string, BrandServiceSeed[]>();

  for (const seed of seeds) {
    const existing = grouped.get(seed.brandSlug) ?? [];
    existing.push(seed);
    grouped.set(seed.brandSlug, existing);
  }

  return [...grouped.entries()]
    .map(([brandSlug, brandSeeds]) => {
      const brandName = brandSeeds[0].brandName;
      const serviceSlugs = [...new Set(brandSeeds.map((s) => s.servisSlug))];
      const deviceSlugs = [...new Set(brandSeeds.map((s) => s.deviceSlug))];
      const deviceTitles = [...new Set(brandSeeds.map((s) => s.deviceTitle))];

      return {
        brandSlug,
        brandName,
        serviceSlugs,
        deviceSlugs,
        focusKeyphrase: `${brandName} Servisi`,
        uniqueIntro:
          BRAND_HUB_INTROS[brandSlug] ??
          `${brandName} cihazlarında arıza ve bakım taleplerinde Kerem Teknik Servis, İstanbul genelinde bağımsız özel teknik servis hizmeti sunar. Yetkili servis değiliz; marka adı yalnızca servis kapsamını açıklamak için kullanılır.`,
        sections: buildHubSections(brandName, deviceTitles),
        faqs: buildHubFaqs(brandName, serviceSlugs),
      };
    })
    .sort((a, b) => a.brandName.localeCompare(b.brandName, "tr"));
}

export const BRAND_HUB_SEEDS: BrandHubSeed[] = buildBrandHubs(BRAND_SERVICE_SEEDS);

export function getBrandHubSeed(brandSlug: string): BrandHubSeed | undefined {
  return BRAND_HUB_SEEDS.find((hub) => hub.brandSlug === brandSlug);
}

export function getBrandServiceSeedsForBrand(brandSlug: string): BrandServiceSeed[] {
  return BRAND_SERVICE_SEEDS.filter((seed) => seed.brandSlug === brandSlug);
}
