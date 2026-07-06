export const SERVICE_NAV_GROUPS = [
  {
    label: "İklimlendirme",
    icon: "ac_unit",
    slugs: ["klima-servisi", "kombi-servisi"],
  },
  {
    label: "Beyaz Eşya",
    icon: "kitchen",
    slugs: [
      "beyaz-esya-servisi",
      "camasir-makinesi-servisi",
      "buzdolabi-servisi",
      "bulasik-makinesi-servisi",
      "firin-ocak-servisi",
    ],
  },
  {
    label: "Bakım & Destek",
    icon: "handyman",
    slugs: ["periyodik-bakim", "yedek-parca-iscilik"],
  },
] as const;
