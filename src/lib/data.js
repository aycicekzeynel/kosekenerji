// Kösek Enerji — Service & project data

export const SERVICES = [
  {
    slug: 'yuksek-gerilim',
    icon: 'Tower',
    title: 'Yüksek Gerilim Tesisleri',
    short: 'OG/AG şalt sahaları, trafo merkezleri ve enerji nakil hatları için anahtar teslim çözümler.',
    long: 'Orta ve yüksek gerilim sistemlerinde proje tasarımından devreye almaya kadar tüm süreçleri yönetiyoruz. TEDAŞ onaylı projeler, EMO mühendis kadromuzla.',
    bullets: ['OG/AG şalt sahaları', 'Trafo merkezi kurulumu', 'Enerji nakil hatları', 'TEDAŞ onaylı projeler', 'Topraklama tesisatı', 'Koruma & röle ayarları'],
    tags: ['Endüstriyel', 'Altyapı']
  },
  {
    slug: 'pano-imalati',
    icon: 'Panel',
    title: 'Endüstriyel Pano İmalatı',
    short: 'OG/AG dağıtım, kompanzasyon, MCC ve kontrol panoları — kendi atölyemizde IEC standartlarında.',
    long: 'Kendi imalat atölyemizde, IEC 61439 standartlarına uygun her tipte pano üretimi yapıyoruz. Tip testli, sertifikalı ve özel projelere göre tasarlanır.',
    bullets: ['AG dağıtım panoları', 'Kompanzasyon panoları', 'MCC motor kontrol', 'PLC kontrol panoları', 'IEC 61439 sertifikalı', 'Özel ölçü tasarım'],
    tags: ['İmalat', 'Endüstriyel']
  },
  {
    slug: 'ges',
    icon: 'Sun',
    title: 'Güneş Enerjisi Santralleri',
    short: 'Çatı ve arazi GES projeleri. Fizibiliteden devreye almaya, izin süreçlerinden bakıma.',
    long: 'Lisanssız ve lisanslı GES projeleri için anahtar teslim hizmet. Ön fizibilite, mühendislik, kurulum ve 25 yıllık performans takibi.',
    bullets: ['Çatı GES', 'Arazi tipi GES', 'Lisanssız projeler', 'EPC anahtar teslim', 'Bakım & izleme', 'Performans garantisi'],
    tags: ['Yenilenebilir', 'Sürdürülebilir']
  },
  {
    slug: 'otomasyon',
    icon: 'Cpu',
    title: 'Otomasyon & SCADA',
    short: 'PLC, SCADA, HMI ve süreç otomasyonu çözümleri. Siemens, Schneider, ABB sertifikalı kadro.',
    long: 'Üretim hatlarınızı, enerji yönetim sistemlerinizi ve altyapınızı dijitalleştiriyoruz. Uzaktan izleme, alarm yönetimi ve raporlama.',
    bullets: ['PLC programlama', 'SCADA sistemleri', 'HMI tasarımı', 'Enerji izleme', 'Endüstriyel IoT', 'Sistem entegrasyonu'],
    tags: ['Otomasyon', 'Yazılım']
  },
  {
    slug: 'aydinlatma',
    icon: 'Bulb',
    title: 'Aydınlatma Projeleri',
    short: 'İç ve dış mekan profesyonel aydınlatma. DIALux hesaplamalı, LED dönüşüm ve akıllı kontrol.',
    long: 'Endüstriyel tesis, ofis, AVM, yol ve dekoratif aydınlatma çözümleri. DIALux yazılımı ile lüks hesaplamalı tasarım.',
    bullets: ['Endüstriyel aydınlatma', 'Yol & sokak aydınlatması', 'Dekoratif aydınlatma', 'LED dönüşüm', 'DIALux projelendirme', 'Akıllı kontrol sistemleri'],
    tags: ['Aydınlatma', 'Verimlilik']
  },
  {
    slug: 'bakim-onarim',
    icon: 'Wrench',
    title: 'Bakım & Onarım',
    short: '7/24 acil servis, periyodik bakım, termal kamera ölçümü ve enerji kalitesi analizi.',
    long: 'İşletmenizi durdurmadan kestirimci bakım hizmeti. Termografi, harmonik analiz, kaçak akım testi ve risk raporlaması.',
    bullets: ['7/24 acil servis', 'Periyodik bakım', 'Termal kamera ölçümü', 'Harmonik analizi', 'Topraklama testi', 'Risk değerlendirme'],
    tags: ['Servis', 'Güvenlik']
  }
];

export const PROJECTS = [
  { tag: 'GES', title: 'Konya Karatay Çatı GES', loc: '2.4 MWp · 2025', cat: 'yenilenebilir', color1: '#FFD400', color2: '#FF6B00' },
  { tag: 'Endüstriyel', title: 'Ankara OSB Trafo Merkezi', loc: '3×1600 kVA · 2024', cat: 'endustriyel', color1: '#00D4FF', color2: '#0066FF' },
  { tag: 'Otomasyon', title: 'Kayseri Tekstil Fabrikası', loc: 'SCADA & PLC · 2024', cat: 'otomasyon', color1: '#A855F7', color2: '#EC4899' },
  { tag: 'Aydınlatma', title: 'İstanbul Lojistik Merkezi', loc: '85.000 m² · 2024', cat: 'aydinlatma', color1: '#FFD400', color2: '#84CC16' },
  { tag: 'Endüstriyel', title: 'Bursa Otomotiv Tesisi', loc: 'MCC & Kompanzasyon · 2023', cat: 'endustriyel', color1: '#FF4D4D', color2: '#FF8A00' },
  { tag: 'GES', title: 'Adana Tarımsal GES', loc: '1.8 MWp · 2023', cat: 'yenilenebilir', color1: '#84CC16', color2: '#FFD400' }
];

export const CLIENTS = ['ARÇINLAR', 'TEKNOSAN', 'EGE PLAS', 'AYDIN OSB', 'KARMET', 'NOVA HOLDING'];

export const VALUES = [
  { i: 'Shield', n: '01', t: 'Güvenlik Önce', d: 'Her sahada, her ekipte iş güvenliği protokolleri taviz vermeden uygulanır. Sıfır iş kazası hedefimizdir.' },
  { i: 'Bolt', n: '02', t: 'Mühendislik Disiplini', d: 'Her proje hesaplanır, her tasarım denetlenir, her uygulama kontrol edilir. EMO sertifikalı kadromuzla.' },
  { i: 'Clock', n: '03', t: 'Söze Sadakat', d: 'Verilen tarih, verilen söz. 24 yılda bitirdiğimiz 340+ projede zamanında teslimat oranımız %97.' },
  { i: 'Wrench', n: '04', t: 'Sürekli Destek', d: 'Devreye alma bizim için bitiş değil, başlangıç. Bakım ve servis ekibimiz 7/24 yanınızda.' },
  { i: 'Cpu', n: '05', t: 'Teknolojiye Açıklık', d: 'PLC, SCADA, IoT, dijital ikiz... Her yeni teknolojiyi öğrenir, sahada uygulanabilir hale getiririz.' },
  { i: 'Sun', n: '06', t: 'Sürdürülebilirlik', d: 'Yenilenebilir enerji, verimlilik ve LED dönüşüm projelerimizle düşük karbonlu geleceğin parçasıyız.' }
];

export const TIMELINE = [
  { y: '2001', t: 'Kuruluş', d: 'Kurucumuz İbrahim Kösek tarafından OSTİM\'de küçük bir elektrik tesisat atölyesi olarak kuruldu.' },
  { y: '2007', t: 'Pano İmalat Atölyesi', d: 'Kendi pano imalat tesisimiz devreye alındı. İlk yıl 120 panoluk üretim kapasitesine ulaşıldı.' },
  { y: '2012', t: 'OG/AG Yetki Belgeleri', d: 'TEDAŞ ve EMO onaylı OG/AG müteahhitlik yetkileri alındı. Trafo merkezi projelerine başlandı.' },
  { y: '2017', t: 'GES Departmanı', d: 'Yenilenebilir enerji bölümü kuruldu. İlk lisanssız çatı GES projesi (480 kWp) tamamlandı.' },
  { y: '2021', t: 'Otomasyon & SCADA', d: 'Endüstri 4.0 odaklı otomasyon ekibi kuruldu. Siemens ve Schneider sertifikalı çözüm ortağı olduk.' },
  { y: '2024', t: '340. Proje', d: 'Bursa Otomotiv Tesisi ile 340. projemizi tamamladık. Toplam kurulu GES gücümüz 185 MW\'ı aştı.' }
];

export const PROCESS_STEPS = [
  { t: 'KEŞİF & ANALİZ', d: 'Sahanızı ziyaret eder, mevcut elektrik altyapınızı analiz eder ve ihtiyacınıza özel çözüm haritası çıkarırız.' },
  { t: 'MÜHENDİSLİK TASARIM', d: 'EMO yetkili mühendisler eşliğinde, ilgili standartlara (TS EN, IEC) uygun proje ve hesaplamaları hazırlarız.' },
  { t: 'TEDARİK & İMALAT', d: 'Onaylı tedarikçi ağımız ve kendi pano imalat atölyemizle, malzemeleri kalite kontrol süreçlerinden geçiririz.' },
  { t: 'SAHA UYGULAMA', d: 'Sertifikalı ekiplerimizle iş güvenliği protokollerine uygun, planlı ve denetimli saha çalışması yürütürüz.' },
  { t: 'TEST & DEVREYE ALMA', d: 'TEDAŞ kabul testleri, izolasyon, topraklama ve fonksiyon testleri sonrası sistemi devreye alırız.' },
  { t: 'BAKIM & DESTEK', d: 'Devreye alma sonrası periyodik bakım, 7/24 acil servis ve garanti süreçleriyle yanınızdayız.' }
];

export const TESTIMONIALS = [
  { q: 'Üretim hattımızın enerji altyapısını sıfırdan kurdular. 6 aylık projede tek bir gün gecikme yaşamadık. Mühendislik kalitesi olağanüstü.', n: 'Mehmet Yıldırım', r: 'Üretim Müdürü · Karmet Otomotiv' },
  { q: '2.4 MWp çatı GES projemizde, fizibiliteden devreye almaya kadar her adımda yanımızdaydılar. Performans hedeflerini ilk yıl %108 geçti.', n: 'Ayşe Demir', r: 'Genel Müdür · Ege Plastik' }
];

export const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/kurumsal', label: 'Kurumsal' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/iletisim', label: 'İletişim' }
];
