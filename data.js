/* ===== Digital Vizyon Akademi — eğitim kataloğu verisi ===== */
window.CATEGORIES = [
  {key:'all', label:'Tümü'},
  {key:'it', label:'IT Eğitimleri'},
  {key:'kurumsal', label:'Kurumsal Gelişim'},
  {key:'kalite', label:'Kalite & Standartlar'}
];

window.TRAININGS = [
  {
    id:'azure-fundamentals', title:'Microsoft Azure Fundamentals (AZ-900)',
    category:'it', categoryLabel:'Bulut Bilişim', tag:'IT Eğitimi',
    duration:'2 gün', level:'Başlangıç', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-azure/700/500',
    keywords:'azure microsoft bulut cloud fundamentals az-900 iaas paas saas',
    tags:['Azure','Cloud','IaaS/PaaS','AZ-900'],
    summary:'Microsoft Azure bulut hizmetlerine giriş; temel kavramlar, güvenlik, uyumluluk ve fiyatlandırma modelleri.',
    description:[
      'Microsoft Azure Fundamentals eğitimi, buluta yeni başlayan katılımcılar için Azure ekosistemini uçtan uca tanıtan temel bir programdır. Bulut bilişimin temel prensiplerinden başlayarak Azure’un sunduğu hizmetleri, mimari bileşenleri ve yönetim araçlarını uygulamalı örneklerle ele alır.',
      'Katılımcılar; IaaS, PaaS ve SaaS modellerini, Azure bölgelerini, kaynak gruplarını ve temel hizmetleri kavrar. Ayrıca güvenlik, uyumluluk, kimlik yönetimi ve maliyet yönetimi konularında sağlam bir temel edinir.',
      'Eğitim, AZ-900 sertifikasyon sınavına hazırlık için de güçlü bir zemin oluşturur ve kurumların bulut dönüşüm yolculuğuna başlaması için gereken kavramsal altyapıyı sağlar.'
    ],
    outcomes:[
      'Bulut bilişim modellerini (IaaS, PaaS, SaaS) ve avantajlarını açıklama',
      'Azure temel hizmetlerini ve mimari bileşenlerini tanıma',
      'Azure güvenlik, kimlik ve uyumluluk araçlarını kavrama',
      'Azure fiyatlandırma ve maliyet yönetimi mantığını anlama',
      'AZ-900 sınavına hazırlık için temel yetkinlik kazanma'
    ],
    audience:['Buluta yeni başlayan IT profesyonelleri','Sistem ve altyapı yöneticileri','Proje yöneticileri ve teknik karar vericiler','Azure sertifikasyonuna hazırlananlar'],
    outline:[
      {t:'Bulut Bilişime Giriş', d:'Bulut kavramları, dağıtım ve hizmet modelleri.'},
      {t:'Azure Temel Mimarisi', d:'Bölgeler, kullanılabilirlik alanları, kaynak grupları.'},
      {t:'Azure Temel Hizmetleri', d:'Compute, Storage, Networking ve veritabanı hizmetleri.'},
      {t:'Güvenlik, Kimlik ve Uyumluluk', d:'Azure AD, güvenlik merkezi, uyumluluk araçları.'},
      {t:'Maliyet ve Yönetim', d:'Fiyatlandırma, SLA, maliyet yönetim araçları.'}
    ]
  },
  {
    id:'azure-solutions', title:'Architecting Microsoft Azure Solutions',
    category:'it', categoryLabel:'Bulut Bilişim', tag:'IT Eğitimi',
    duration:'4 gün', level:'İleri', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-azuresol/700/500',
    keywords:'azure architect çözüm mimari altyapı infrastructure solutions',
    tags:['Azure','Mimari','Altyapı','Ölçeklenebilirlik'],
    summary:'Azure üzerinde ölçeklenebilir, güvenli ve yüksek erişilebilir çözüm mimarileri tasarlama.',
    description:[
      'Bu ileri seviye eğitim, Azure üzerinde kurumsal çözümler tasarlayacak mimarlar ve kıdemli sistem uzmanları için hazırlanmıştır. Uçtan uca çözüm tasarımı, ölçeklenebilirlik, yüksek erişilebilirlik ve felaket kurtarma senaryoları uygulamalı olarak işlenir.',
      'Katılımcılar; sanal ağ tasarımı, kimlik yönetimi, veri depolama stratejileri ve otomasyon konularında derinlemesine bilgi edinir. Gerçek dünya senaryolarıyla mimari kararların iş sonuçlarına etkisi tartışılır.',
      'Eğitim sonunda katılımcılar, güvenlik ve maliyet optimizasyonunu gözeterek kurumsal ölçekte Azure çözümleri tasarlayabilecek yetkinliğe ulaşır.'
    ],
    outcomes:[
      'Ölçeklenebilir ve yüksek erişilebilir Azure mimarileri tasarlama',
      'Sanal ağ, kimlik ve depolama stratejilerini planlama',
      'Felaket kurtarma ve iş sürekliliği senaryoları kurgulama',
      'Otomasyon ve altyapı yönetimini optimize etme',
      'Güvenlik ve maliyet dengesini gözeten kararlar alma'
    ],
    audience:['Çözüm mimarları','Kıdemli sistem/altyapı uzmanları','DevOps mühendisleri','Bulut danışmanları'],
    outline:[
      {t:'Çözüm Mimarisi Prensipleri', d:'İyi tasarlanmış çerçeve ve mimari kararlar.'},
      {t:'Ağ ve Bağlantı Tasarımı', d:'VNet, VPN, ExpressRoute, yük dengeleme.'},
      {t:'Kimlik ve Güvenlik', d:'Azure AD, RBAC, Key Vault, güvenlik stratejileri.'},
      {t:'Veri ve Depolama', d:'Depolama seçenekleri, veritabanı çözümleri, yedekleme.'},
      {t:'Yüksek Erişilebilirlik & DR', d:'Ölçeklendirme, felaket kurtarma, izleme.'}
    ]
  },
  {
    id:'docker', title:'Docker ve Konteyner Teknolojileri Eğitimi',
    category:'it', categoryLabel:'Konteyner', tag:'IT Eğitimi',
    duration:'2 gün', level:'Başlangıç / Orta', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-docker/700/500',
    keywords:'docker konteyner container image dockerfile compose registry',
    tags:['Docker','Container','Dockerfile','Compose'],
    summary:'Konteyner teknolojilerinin temelleri; imaj oluşturma, ağ, hacim yönetimi ve Docker Compose.',
    description:[
      'Docker ve Konteyner Teknolojileri eğitimi, modern uygulama dağıtımının temeli olan konteynerleştirmeyi uygulamalı olarak öğretir. Katılımcılar konteyner kavramını, avantajlarını ve sanal makinelerden farklarını kavrar.',
      'Eğitimde Dockerfile ile imaj oluşturma, imaj katmanları, konteyner ağı, hacim (volume) yönetimi ve registry kullanımı uygulamalı örneklerle ele alınır. Docker Compose ile çok konteynerli uygulamalar yönetilir.',
      'Program sonunda katılımcılar, uygulamalarını konteynerleştirip taşınabilir ve tekrarlanabilir ortamlar oluşturabilecek pratik yetkinliğe ulaşır.'
    ],
    outcomes:[
      'Konteyner ve imaj kavramlarını uygulamalı olarak kullanma',
      'Dockerfile ile optimize imajlar oluşturma',
      'Konteyner ağı ve hacim yönetimini yapma',
      'Docker Compose ile çok servisli uygulamalar çalıştırma',
      'Registry üzerinden imaj yayınlama ve yönetme'
    ],
    audience:['Yazılım geliştiriciler','Sistem yöneticileri','DevOps’a geçiş yapan ekipler','Test ve QA mühendisleri'],
    outline:[
      {t:'Konteyner Temelleri', d:'Konteyner vs sanal makine, Docker mimarisi.'},
      {t:'İmaj ve Dockerfile', d:'İmaj katmanları, Dockerfile yazımı, optimizasyon.'},
      {t:'Ağ ve Hacim Yönetimi', d:'Network sürücüleri, volume, veri kalıcılığı.'},
      {t:'Docker Compose', d:'Çok konteynerli uygulama tanımı ve yönetimi.'},
      {t:'Registry & Güvenlik', d:'İmaj yayınlama, registry, temel güvenlik.'}
    ]
  },
  {
    id:'kubernetes', title:'Kubernetes ile Docker Orkestrasyonu Eğitimi',
    category:'it', categoryLabel:'Konteyner & Orkestrasyon', tag:'IT Eğitimi',
    duration:'3 gün', level:'Orta / İleri', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-k8s/700/500',
    keywords:'kubernetes k8s orkestrasyon pod deployment service helm openshift',
    tags:['Kubernetes','Orkestrasyon','Helm','Ölçekleme'],
    summary:'Konteyner tabanlı uygulamaların ölçeklenmesi, dağıtımı ve yönetimi için Kubernetes ekosistemi.',
    description:[
      'Kubernetes ile Docker Orkestrasyonu eğitimi, konteynerleştirilmiş uygulamaların üretim ortamında güvenli ve ölçeklenebilir şekilde yönetilmesini uygulamalı olarak öğretir. Katılımcılar cluster mimarisini ve temel bileşenleri kavrar.',
      'Pod, Deployment, Service, ConfigMap, Secret ve Ingress gibi temel kaynaklar uygulamalı olarak işlenir. Otomatik ölçeklendirme, güncelleme stratejileri ve sağlık kontrolleri ele alınır.',
      'Eğitim sonunda katılımcılar, Kubernetes üzerinde uygulamaları dağıtabilir, ölçekleyebilir ve yönetebilir hale gelir; Helm ile paket yönetimi konusunda pratik kazanır.'
    ],
    outcomes:[
      'Kubernetes cluster mimarisini ve bileşenlerini anlama',
      'Pod, Deployment ve Service kaynaklarını yönetme',
      'Otomatik ölçeklendirme ve güncelleme stratejileri uygulama',
      'ConfigMap, Secret ve Ingress ile yapılandırma yönetme',
      'Helm ile uygulama paketleme ve dağıtma'
    ],
    audience:['DevOps mühendisleri','Sistem ve altyapı uzmanları','Docker deneyimi olan geliştiriciler','Platform mühendisleri'],
    outline:[
      {t:'Kubernetes Mimarisi', d:'Control plane, node, temel bileşenler.'},
      {t:'Temel Kaynaklar', d:'Pod, ReplicaSet, Deployment, Service.'},
      {t:'Yapılandırma Yönetimi', d:'ConfigMap, Secret, namespace, etiketler.'},
      {t:'Ölçekleme & Güncelleme', d:'HPA, rolling update, sağlık kontrolleri.'},
      {t:'Helm & Ekosistem', d:'Helm chart, Ingress, izleme araçları.'}
    ]
  },
  {
    id:'devops', title:'DevOps Fundamentals Eğitimi',
    category:'it', categoryLabel:'Otomasyon & CI/CD', tag:'IT Eğitimi',
    duration:'3 gün', level:'Orta', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-devops/700/500',
    keywords:'devops cicd otomasyon pipeline git jenkins iac kültür',
    tags:['DevOps','CI/CD','Otomasyon','IaC'],
    summary:'Sürekli entegrasyon ve dağıtım kültürü, otomasyon araçları ve DevOps yaşam döngüsü.',
    description:[
      'DevOps Fundamentals eğitimi, geliştirme ve operasyon ekipleri arasındaki iş birliğini artıran DevOps kültürünü ve pratiklerini temelden ele alır. Katılımcılar sürekli entegrasyon ve sürekli dağıtım (CI/CD) yaklaşımlarını kavrar.',
      'Sürüm kontrolü, otomatik derleme ve test, dağıtım hattı (pipeline) oluşturma, altyapının kod olarak yönetimi (IaC) ve izleme konuları uygulamalı örneklerle işlenir.',
      'Program sonunda katılımcılar, yazılım teslim süreçlerini otomatikleştirerek daha hızlı, güvenilir ve tekrarlanabilir dağıtımlar gerçekleştirebilecek yetkinlik kazanır.'
    ],
    outcomes:[
      'DevOps kültürü ve prensiplerini kavrama',
      'CI/CD hattı tasarlama ve uygulama',
      'Otomatik test ve dağıtım süreçlerini kurma',
      'Altyapıyı kod olarak (IaC) yönetme',
      'Sürekli izleme ve geri bildirim döngüsü oluşturma'
    ],
    audience:['Yazılım geliştiriciler','Sistem/operasyon uzmanları','Yayın (release) yöneticileri','Teknik takım liderleri'],
    outline:[
      {t:'DevOps Kültürü', d:'İş birliği, değer akışı, DevOps prensipleri.'},
      {t:'Sürüm Kontrolü & Git', d:'Dallanma stratejileri, kod yönetimi.'},
      {t:'CI/CD Pipeline', d:'Otomatik derleme, test, dağıtım hatları.'},
      {t:'Infrastructure as Code', d:'IaC araçları ve otomasyon.'},
      {t:'İzleme & Geri Bildirim', d:'Monitoring, loglama, sürekli iyileştirme.'}
    ]
  },
  {
    id:'microservices', title:'Microservices Mimarisi Eğitimi',
    category:'it', categoryLabel:'Yazılım Mimarisi', tag:'IT Eğitimi',
    duration:'3 gün', level:'İleri', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-micro/700/500',
    keywords:'microservices mikroservis mimari api gateway kafka reactive',
    tags:['Microservices','API','Mesajlaşma','Dağıtık Sistemler'],
    summary:'Mikroservis mimarisinin tasarım prensipleri, iletişim desenleri ve dağıtık sistem yönetimi.',
    description:[
      'Microservices Mimarisi eğitimi, monolitik uygulamalardan mikroservis mimarisine geçişin prensiplerini ve tasarım desenlerini kapsamlı biçimde ele alır. Katılımcılar servis sınırlarını doğru belirlemeyi öğrenir.',
      'Servisler arası iletişim (senkron/asenkron), API gateway, servis keşfi, veri yönetimi ve dayanıklılık desenleri (circuit breaker, retry) uygulamalı örneklerle işlenir.',
      'Eğitim sonunda katılımcılar, ölçeklenebilir ve bakımı kolay mikroservis mimarileri tasarlayabilecek ve dağıtık sistemlerin zorluklarını yönetebilecek yetkinliğe ulaşır.'
    ],
    outcomes:[
      'Mikroservis tasarım prensiplerini uygulama',
      'Servis sınırlarını ve veri sahipliğini belirleme',
      'Senkron/asenkron iletişim desenlerini kullanma',
      'API gateway ve servis keşfini yapılandırma',
      'Dayanıklılık ve gözlemlenebilirlik sağlama'
    ],
    audience:['Yazılım mimarları','Kıdemli backend geliştiriciler','Teknik liderler','Platform mühendisleri'],
    outline:[
      {t:'Monolitten Mikroservise', d:'Geçiş stratejileri, servis sınırları.'},
      {t:'İletişim Desenleri', d:'REST, gRPC, mesajlaşma, event-driven.'},
      {t:'API Gateway & Keşif', d:'Gateway, servis keşfi, yük dengeleme.'},
      {t:'Veri Yönetimi', d:'Servis başına veritabanı, tutarlılık desenleri.'},
      {t:'Dayanıklılık & İzleme', d:'Circuit breaker, retry, dağıtık izleme.'}
    ]
  },
  {
    id:'cloud-security', title:'Cloud Security — Bulut Güvenliği Eğitimi',
    category:'it', categoryLabel:'Güvenlik', tag:'IT Eğitimi',
    duration:'3 gün', level:'Orta / İleri', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-cloudsec/700/500',
    keywords:'cloud security bulut güvenlik pentest şifreleme iam sızma test',
    tags:['Cloud Security','IAM','Şifreleme','Pentest'],
    summary:'Bulut ortamlarında güvenlik politikaları, kimlik yönetimi, sızma testi ve veri koruma teknikleri.',
    description:[
      'Cloud Security eğitimi, bulut ortamlarında karşılaşılan tehditleri ve bunlara karşı alınabilecek önlemleri kapsamlı olarak ele alır. Katılımcılar bulut güvenliği paylaşılan sorumluluk modelini kavrar.',
      'Kimlik ve erişim yönetimi (IAM), ağ güvenliği, şifreleme, günlük yönetimi ve uyumluluk konuları uygulamalı örneklerle işlenir. Bulut sızma testi yaklaşımları tanıtılır.',
      'Program sonunda katılımcılar, bulut altyapılarını güvenli biçimde yapılandırabilir, riskleri değerlendirebilir ve güvenlik politikaları oluşturabilir hale gelir.'
    ],
    outcomes:[
      'Bulut güvenliği paylaşılan sorumluluk modelini anlama',
      'IAM ve en az yetki prensibini uygulama',
      'Veri şifreleme ve anahtar yönetimini yapılandırma',
      'Ağ güvenliği ve tehdit tespiti kurgulama',
      'Uyumluluk ve güvenlik politikaları oluşturma'
    ],
    audience:['Güvenlik uzmanları','Sistem ve bulut yöneticileri','DevSecOps mühendisleri','BT denetçileri'],
    outline:[
      {t:'Bulut Güvenliği Temelleri', d:'Paylaşılan sorumluluk, tehdit modeli.'},
      {t:'Kimlik & Erişim (IAM)', d:'En az yetki, MFA, rol yönetimi.'},
      {t:'Veri Koruma', d:'Şifreleme, anahtar yönetimi, veri sınıflandırma.'},
      {t:'Ağ Güvenliği', d:'Segmentasyon, güvenlik duvarı, izleme.'},
      {t:'Sızma Testi & Uyumluluk', d:'Bulut pentest, denetim, uyumluluk.'}
    ]
  },
  {
    id:'frontend', title:'Front-End & Modern Web Uygulama Geliştirme',
    category:'it', categoryLabel:'Web Geliştirme', tag:'IT Eğitimi',
    duration:'4 gün', level:'Başlangıç / Orta', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-frontend/700/500',
    keywords:'frontend html5 css javascript web responsive react modern',
    tags:['HTML5','CSS','JavaScript','Responsive'],
    summary:'HTML5, CSS ve JavaScript ile modern, duyarlı (responsive) web arayüzleri geliştirme.',
    description:[
      'Front-End & Modern Web eğitimi, güncel web teknolojileriyle etkileşimli ve duyarlı arayüzler geliştirmeyi uygulamalı olarak öğretir. Katılımcılar semantik HTML5 ve modern CSS düzen tekniklerini kavrar.',
      'Flexbox ve Grid ile responsive tasarım, JavaScript ile DOM manipülasyonu, olay yönetimi ve temel API entegrasyonları uygulamalı projelerle işlenir.',
      'Eğitim sonunda katılımcılar, erişilebilir ve performanslı web arayüzleri geliştirebilecek pratik yetkinliğe ulaşır ve modern framework’lere geçiş için sağlam bir temel edinir.'
    ],
    outcomes:[
      'Semantik HTML5 ve modern CSS kullanma',
      'Flexbox/Grid ile duyarlı tasarım yapma',
      'JavaScript ile etkileşimli arayüzler geliştirme',
      'DOM ve olay yönetimini uygulama',
      'Temel API entegrasyonlarını gerçekleştirme'
    ],
    audience:['Web geliştirmeye başlayanlar','Tasarımdan koda geçmek isteyenler','Backend geliştiriciler','Öğrenci ve yeni mezunlar'],
    outline:[
      {t:'HTML5 & Semantik Yapı', d:'Modern HTML, erişilebilirlik, form.'},
      {t:'Modern CSS', d:'Flexbox, Grid, değişkenler, animasyon.'},
      {t:'Responsive Tasarım', d:'Mobil öncelikli yaklaşım, medya sorguları.'},
      {t:'JavaScript Temelleri', d:'DOM, olaylar, fonksiyonlar, async.'},
      {t:'API & Proje', d:'Fetch API, entegrasyon, mini proje.'}
    ]
  },
  {
    id:'mysql-dba', title:'MySQL for Database Administrators',
    category:'it', categoryLabel:'Veritabanı', tag:'IT Eğitimi',
    duration:'3 gün', level:'Orta', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-mysql/700/500',
    keywords:'mysql veritabanı database dba sql yedekleme performans',
    tags:['MySQL','SQL','DBA','Performans'],
    summary:'MySQL veritabanı yönetimi; kurulum, güvenlik, yedekleme, performans ve replikasyon.',
    description:[
      'MySQL for Database Administrators eğitimi, MySQL veritabanlarını profesyonel biçimde yönetmek isteyen sistem ve veritabanı yöneticileri için hazırlanmıştır. Kurulum, yapılandırma ve güvenlik konuları uygulamalı işlenir.',
      'Kullanıcı ve yetki yönetimi, yedekleme/geri yükleme stratejileri, performans izleme ve sorgu optimizasyonu, replikasyon ve yüksek erişilebilirlik konuları ele alınır.',
      'Program sonunda katılımcılar, MySQL veritabanlarını güvenli, performanslı ve sürdürülebilir biçimde yönetebilecek yetkinliğe ulaşır.'
    ],
    outcomes:[
      'MySQL kurulum ve yapılandırmasını yapma',
      'Kullanıcı, yetki ve güvenlik yönetimi',
      'Yedekleme ve geri yükleme stratejileri uygulama',
      'Performans izleme ve sorgu optimizasyonu',
      'Replikasyon ve yüksek erişilebilirlik kurma'
    ],
    audience:['Veritabanı yöneticileri (DBA)','Sistem yöneticileri','Backend geliştiriciler','DevOps mühendisleri'],
    outline:[
      {t:'Kurulum & Yapılandırma', d:'MySQL mimarisi, kurulum, temel ayarlar.'},
      {t:'Güvenlik & Yetkilendirme', d:'Kullanıcılar, roller, erişim denetimi.'},
      {t:'Yedekleme & Kurtarma', d:'Yedek stratejileri, geri yükleme senaryoları.'},
      {t:'Performans', d:'İndeksleme, sorgu optimizasyonu, izleme.'},
      {t:'Replikasyon & HA', d:'Replikasyon, yük dengeleme, erişilebilirlik.'}
    ]
  },
  {
    id:'python-data', title:'Python ile Veri Analizi ve Otomasyon',
    category:'it', categoryLabel:'Veri & Programlama', tag:'IT Eğitimi',
    duration:'3 gün', level:'Başlangıç / Orta', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-python/700/500',
    keywords:'python veri analizi pandas otomasyon numpy görselleştirme',
    tags:['Python','Pandas','Veri Analizi','Otomasyon'],
    summary:'Python temelleri, Pandas ile veri analizi, görselleştirme ve iş süreçlerinde otomasyon.',
    description:[
      'Python ile Veri Analizi ve Otomasyon eğitimi, programlamaya yeni başlayanlar ve verisini daha etkin kullanmak isteyen profesyoneller için tasarlanmıştır. Python’un temel yapıları uygulamalı olarak öğretilir.',
      'Pandas ile veri temizleme ve analiz, temel görselleştirme ve tekrar eden görevlerin otomasyonu gerçek veri setleri üzerinde işlenir.',
      'Eğitim sonunda katılımcılar, veriden içgörü çıkarabilir ve iş süreçlerindeki manuel işleri Python ile otomatikleştirebilir hale gelir.'
    ],
    outcomes:[
      'Python temel yapılarını kullanma',
      'Pandas ile veri temizleme ve analiz yapma',
      'Verileri görselleştirme',
      'Tekrarlayan görevleri otomatikleştirme',
      'Basit veri işleme akışları oluşturma'
    ],
    audience:['Analistler ve raporlama uzmanları','Programlamaya başlayanlar','Ofis çalışanları','Mühendis ve teknik personel'],
    outline:[
      {t:'Python Temelleri', d:'Değişkenler, veri tipleri, döngü, fonksiyon.'},
      {t:'Veri ile Çalışma', d:'Dosya işlemleri, Pandas veri yapıları.'},
      {t:'Veri Analizi', d:'Filtreleme, gruplama, özetleme.'},
      {t:'Görselleştirme', d:'Temel grafikler ve raporlama.'},
      {t:'Otomasyon', d:'Betik yazımı, tekrarlayan görev otomasyonu.'}
    ]
  },
  {
    id:'liderlik', title:'Etkili Liderlik ve Yöneticilik',
    category:'kurumsal', categoryLabel:'Kurumsal Gelişim', tag:'Kurumsal Gelişim',
    duration:'2 gün', level:'Tüm Seviyeler', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-liderlik/700/500',
    keywords:'liderlik yöneticilik yönetim koçluk motivasyon karar',
    tags:['Liderlik','Yönetim','Motivasyon','Koçluk'],
    summary:'Modern liderlik yaklaşımları, ekip motivasyonu, delegasyon ve etkili karar alma becerileri.',
    description:[
      'Etkili Liderlik ve Yöneticilik eğitimi, yöneticileri ve yönetici adaylarını modern liderlik yaklaşımlarıyla donatır. Katılımcılar kendi liderlik tarzlarını keşfeder ve geliştirir.',
      'Ekip motivasyonu, delegasyon, geri bildirim kültürü, çatışma yönetimi ve etkili karar alma konuları interaktif uygulamalarla işlenir.',
      'Program sonunda katılımcılar, ekiplerini yüksek performansa taşıyacak, güven veren ve sonuç odaklı bir liderlik yaklaşımı geliştirir.'
    ],
    outcomes:[
      'Kendi liderlik tarzını tanıma ve geliştirme',
      'Ekip motivasyonu ve bağlılığı artırma',
      'Etkili delegasyon ve geri bildirim verme',
      'Çatışmaları yapıcı biçimde yönetme',
      'Sonuç odaklı kararlar alma'
    ],
    audience:['Yöneticiler ve takım liderleri','Yönetici adayları','Proje yöneticileri','İK profesyonelleri'],
    outline:[
      {t:'Liderlik Temelleri', d:'Liderlik tarzları, öz farkındalık.'},
      {t:'Motivasyon & Bağlılık', d:'Ekip motivasyonu, güven inşası.'},
      {t:'Delegasyon & Geri Bildirim', d:'Yetki devri, yapıcı geri bildirim.'},
      {t:'Çatışma Yönetimi', d:'Çatışma türleri, çözüm yaklaşımları.'},
      {t:'Karar Alma', d:'Etkili ve hızlı karar süreçleri.'}
    ]
  },
  {
    id:'iletisim', title:'Etkili İletişim ve Beden Dili',
    category:'kurumsal', categoryLabel:'Kurumsal Gelişim', tag:'Kurumsal Gelişim',
    duration:'1 gün', level:'Tüm Seviyeler', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-iletisim/700/500',
    keywords:'iletişim beden dili etkili sunum empati dinleme',
    tags:['İletişim','Beden Dili','Empati','Sunum'],
    summary:'Etkili iletişim teknikleri, aktif dinleme, beden dili ve ikna becerilerinin geliştirilmesi.',
    description:[
      'Etkili İletişim ve Beden Dili eğitimi, iş ve sosyal yaşamda iletişim kalitesini artırmayı hedefler. Katılımcılar iletişim engellerini ve bunları aşma yollarını kavrar.',
      'Aktif dinleme, beden dilini doğru okuma ve kullanma, empati ve ikna teknikleri interaktif uygulamalarla işlenir.',
      'Program sonunda katılımcılar, daha net, etkili ve karşı tarafı anlayan bir iletişim tarzı geliştirir.'
    ],
    outcomes:[
      'İletişim engellerini tanıma ve aşma',
      'Aktif dinleme becerisini geliştirme',
      'Beden dilini doğru okuma ve kullanma',
      'Empati kurma ve ikna teknikleri',
      'Zor konuşmaları etkili yönetme'
    ],
    audience:['Tüm çalışanlar','Müşteri ilişkileri ekipleri','Satış ve pazarlama profesyonelleri','Yöneticiler'],
    outline:[
      {t:'İletişim Modeli', d:'İletişim süreci ve engelleri.'},
      {t:'Aktif Dinleme', d:'Dinleme teknikleri, geri bildirim.'},
      {t:'Beden Dili', d:'Sözsüz iletişim, jest ve mimik.'},
      {t:'Empati & İkna', d:'Empatik iletişim, ikna teknikleri.'},
      {t:'Zor Konuşmalar', d:'Çatışmalı durumlarda iletişim.'}
    ]
  },
  {
    id:'ekip-yonetimi', title:'Ekip Yönetimi ve Takım Çalışması',
    category:'kurumsal', categoryLabel:'Kurumsal Gelişim', tag:'Kurumsal Gelişim',
    duration:'2 gün', level:'Tüm Seviyeler', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-ekip/700/500',
    keywords:'ekip takım çalışması işbirliği performans rol',
    tags:['Ekip','Takım Çalışması','İş Birliği','Performans'],
    summary:'Yüksek performanslı takımlar oluşturma, rol dağılımı, iş birliği ve takım dinamiklerini yönetme.',
    description:[
      'Ekip Yönetimi ve Takım Çalışması eğitimi, verimli ve uyumlu takımlar oluşturmanın prensiplerini ele alır. Katılımcılar takım gelişim aşamalarını ve dinamiklerini kavrar.',
      'Rol ve sorumluluk dağılımı, güven inşası, iş birliği kültürü ve takım performansını artırma teknikleri uygulamalı olarak işlenir.',
      'Program sonunda katılımcılar, takım içi iş birliğini güçlendirecek ve ortak hedeflere ulaşacak yaklaşımlar geliştirir.'
    ],
    outcomes:[
      'Takım gelişim aşamalarını anlama',
      'Rol ve sorumlulukları etkili dağıtma',
      'Takım içi güven ve iş birliği kurma',
      'Takım performansını ölçme ve artırma',
      'Ortak hedef odaklı çalışma kültürü oluşturma'
    ],
    audience:['Takım liderleri','Proje ekipleri','Yöneticiler','Departman sorumluları'],
    outline:[
      {t:'Takım Dinamikleri', d:'Takım gelişim aşamaları, roller.'},
      {t:'Güven & İş Birliği', d:'Güven inşası, iş birliği kültürü.'},
      {t:'Rol & Sorumluluk', d:'Görev dağılımı, sorumluluk netliği.'},
      {t:'Performans Yönetimi', d:'Hedef belirleme, ölçme, geri bildirim.'},
      {t:'Ortak Hedefler', d:'Hedef hizalama, motivasyon.'}
    ]
  },
  {
    id:'zaman-yonetimi', title:'Zaman ve Toplantı Yönetimi',
    category:'kurumsal', categoryLabel:'Kurumsal Gelişim', tag:'Kurumsal Gelişim',
    duration:'1 gün', level:'Tüm Seviyeler', format:'Online / Yüz Yüze', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-zaman/700/500',
    keywords:'zaman yönetimi verimlilik önceliklendirme toplantı planlama',
    tags:['Zaman Yönetimi','Verimlilik','Önceliklendirme','Planlama'],
    summary:'Zamanı etkin kullanma, önceliklendirme teknikleri ve verimli toplantı yönetimi.',
    description:[
      'Zaman ve Toplantı Yönetimi eğitimi, iş yaşamında verimliliği artırmak için zamanı etkin kullanma becerilerini geliştirir. Katılımcılar zaman tuzaklarını ve bunları aşma yollarını öğrenir.',
      'Önceliklendirme teknikleri (Eisenhower matrisi vb.), planlama, erteleme ile başa çıkma ve verimli toplantı yönetimi uygulamalı olarak işlenir.',
      'Program sonunda katılımcılar, zamanlarını daha bilinçli yöneterek daha az stresle daha çok sonuç üretebilir hale gelir.'
    ],
    outcomes:[
      'Zaman tuzaklarını fark etme ve azaltma',
      'Etkili önceliklendirme yapma',
      'Planlama ve hedef belirleme',
      'Ertelemeyle başa çıkma',
      'Verimli ve kısa toplantılar yönetme'
    ],
    audience:['Tüm çalışanlar','Yöneticiler','Proje ekipleri','Yoğun tempoda çalışan profesyoneller'],
    outline:[
      {t:'Zaman Farkındalığı', d:'Zaman tuzakları, öz değerlendirme.'},
      {t:'Önceliklendirme', d:'Eisenhower matrisi, ABC yöntemi.'},
      {t:'Planlama', d:'Günlük/haftalık planlama, hedefler.'},
      {t:'Erteleme Yönetimi', d:'Erteleme nedenleri ve çözümleri.'},
      {t:'Toplantı Yönetimi', d:'Gündem, süre, karar ve takip.'}
    ]
  },
  {
    id:'entegre-lojistik', title:'Entegre Lojistik Destek (ILS) Temel İlkeleri',
    category:'kurumsal', categoryLabel:'Sektörel Program', tag:'Referans Eğitim',
    duration:'2 gün', level:'Orta', format:'Yüz Yüze / Online', certificate:'Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-ils/700/500',
    keywords:'entegre lojistik destek ils desteklenebilirlik savunma sanayi sasad',
    tags:['ILS','Desteklenebilirlik','Savunma Sanayii','Analiz'],
    summary:'Savunma ve sanayi projeleri için entegre lojistik destek ve desteklenebilirlik analizi temelleri.',
    description:[
      'Entegre Lojistik Destek (ILS) eğitimi, ürün yaşam döngüsü boyunca desteklenebilirliği güvence altına alan disiplinleri ele alır. SASAD gibi kurumlarla gerçekleştirdiğimiz referans programlar bu içerikle uyumludur.',
      'Desteklenebilirlik analizi, bakım planlaması, yedek parça yönetimi, teknik dokümantasyon ve ILS elemanlarının entegrasyonu ele alınır.',
      'Program sonunda katılımcılar, projelerinde ILS prensiplerini uygulayarak yaşam döngüsü maliyetlerini optimize edecek yaklaşımlar geliştirir.'
    ],
    outcomes:[
      'ILS kavramını ve elemanlarını anlama',
      'Desteklenebilirlik analizinin temellerini kavrama',
      'Bakım ve yedek parça planlaması yapma',
      'Yaşam döngüsü maliyetini değerlendirme',
      'Teknik dokümantasyon süreçlerini yönetme'
    ],
    audience:['Savunma sanayii profesyonelleri','Proje ve lojistik yöneticileri','Sistem mühendisleri','Kalite ve destek ekipleri'],
    outline:[
      {t:'ILS’e Giriş', d:'Kavram, kapsam, ILS elemanları.'},
      {t:'Desteklenebilirlik Analizi', d:'Analiz yaklaşımları, güvenilirlik.'},
      {t:'Bakım Planlama', d:'Bakım konsepti, seviyeler.'},
      {t:'Yedek Parça & Dokümantasyon', d:'Yedek yönetimi, teknik doküman.'},
      {t:'Yaşam Döngüsü Maliyeti', d:'LCC değerlendirmesi, optimizasyon.'}
    ]
  },
  {
    id:'iso-9001', title:'ISO 9001 Kalite Yönetim Sistemi Temeli Eğitimi',
    category:'kalite', categoryLabel:'Kalite Yönetimi', tag:'Kalite & Standartlar',
    duration:'2 gün', level:'Başlangıç', format:'Online / Yüz Yüze', certificate:'PECB Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-iso9001/700/500',
    keywords:'iso 9001 kalite yönetim sistemi pecb standart süreç denetim',
    tags:['ISO 9001','Kalite','Süreç','Denetim'],
    summary:'Kalite yönetim sistemlerinin temel ilkeleri, süreç yaklaşımı, dokümantasyon ve denetim.',
    description:[
      'ISO 9001 Kalite Yönetim Sistemi Temeli eğitimi, kurumların kalite süreçlerini uluslararası standartlara uygun biçimde yapılandırmasına yardımcı olur. Katılımcılar standardın temel gerekliliklerini kavrar.',
      'Süreç yaklaşımı, risk temelli düşünme, dokümantasyon gereklilikleri, iç denetim ve sürekli iyileştirme (PUKÖ döngüsü) uygulamalı örneklerle işlenir.',
      'Program sonunda katılımcılar, ISO 9001 standardının gerekliliklerini anlayarak kurumlarında kalite yönetim sistemine katkı sağlayabilecek yetkinliğe ulaşır.'
    ],
    outcomes:[
      'ISO 9001 temel kavram ve prensiplerini anlama',
      'Süreç yaklaşımı ve risk temelli düşünmeyi uygulama',
      'Dokümantasyon gerekliliklerini kavrama',
      'İç denetim mantığını anlama',
      'Sürekli iyileştirme (PUKÖ) döngüsünü uygulama'
    ],
    audience:['Kalite yönetim temsilcileri','Süreç sahipleri ve yöneticiler','İç denetçi adayları','Standarda geçiş yapan kurumlar'],
    outline:[
      {t:'Kalite & ISO 9001’e Giriş', d:'Kalite kavramı, standart tarihçesi.'},
      {t:'Süreç Yaklaşımı', d:'Süreçler, girdi-çıktı, etkileşim.'},
      {t:'Standart Gereklilikleri', d:'Madde madde temel gereklilikler.'},
      {t:'Dokümantasyon', d:'Dokümante bilgi, kayıt yönetimi.'},
      {t:'İç Denetim & İyileştirme', d:'PUKÖ, iç denetim, düzeltici faaliyet.'}
    ]
  },
  {
    id:'iso-27001', title:'ISO 27001 Bilgi Güvenliği Yönetim Sistemi',
    category:'kalite', categoryLabel:'Bilgi Güvenliği', tag:'Kalite & Standartlar',
    duration:'2 gün', level:'Orta', format:'Online / Yüz Yüze', certificate:'PECB Katılım Sertifikası',
    image:'https://picsum.photos/seed/dv-iso27001/700/500',
    keywords:'iso 27001 bilgi güvenliği isms risk kontrol standart',
    tags:['ISO 27001','Bilgi Güvenliği','Risk','ISMS'],
    summary:'Bilgi güvenliği yönetim sistemi (BGYS) kurulumu, risk değerlendirme ve kontrol uygulamaları.',
    description:[
      'ISO 27001 eğitimi, kurumların bilgi varlıklarını korumak için bir Bilgi Güvenliği Yönetim Sistemi (BGYS) kurmasına rehberlik eder. Katılımcılar standardın yapısını ve gerekliliklerini kavrar.',
      'Risk değerlendirme ve işleme, güvenlik kontrolleri (Annex A), politika oluşturma ve sürekli iyileştirme konuları uygulamalı örneklerle işlenir.',
      'Program sonunda katılımcılar, bilgi güvenliği risklerini yönetebilecek ve BGYS süreçlerine katkı sağlayabilecek yetkinliğe ulaşır.'
    ],
    outcomes:[
      'BGYS kavramını ve ISO 27001 yapısını anlama',
      'Bilgi varlıklarını sınıflandırma',
      'Risk değerlendirme ve işleme yapma',
      'Güvenlik kontrollerini (Annex A) tanıma',
      'Politika ve sürekli iyileştirme süreçlerini kavrama'
    ],
    audience:['Bilgi güvenliği sorumluları','BT yöneticileri','Kalite ve uyum ekipleri','İç denetçi adayları'],
    outline:[
      {t:'BGYS’e Giriş', d:'Bilgi güvenliği kavramları, ISO 27001 yapısı.'},
      {t:'Varlık Yönetimi', d:'Bilgi varlıkları, sınıflandırma.'},
      {t:'Risk Yönetimi', d:'Risk değerlendirme ve işleme.'},
      {t:'Güvenlik Kontrolleri', d:'Annex A kontrolleri, uygulama.'},
      {t:'Politika & İyileştirme', d:'Politikalar, iç denetim, iyileştirme.'}
    ]
  }
];

/* ===== Teknoloji Bülteni — blog yazıları ===== */
window.POSTS = [
  {
    id:'windows-server-networking', title:'Windows Server Networking: İşletmeler İçin Stratejik Yaklaşımlar',
    category:'Ağ & Altyapı', date:'03 Eylül 2026', read:'6 dk', featured:true,
    image:'https://picsum.photos/seed/dv-blog-feat/1200/700',
    excerpt:'Kurumsal ağ altyapısının doğru yapılandırılması güvenlik ve performansın temelidir. Windows Server ağ yönetiminin işletmelere sağladığı stratejik avantajları ele alıyoruz.',
    body:[
      {p:'Kurumsal ağ altyapısı, bir işletmenin dijital operasyonlarının bel kemiğidir. Doğru yapılandırılmış bir ağ; güvenliği, performansı ve sürekliliği doğrudan etkiler. Windows Server, sunduğu ağ hizmetleriyle işletmelere merkezi ve yönetilebilir bir altyapı kurma imkânı verir.'},
      {h:'Neden Stratejik Bir Konu?'},
      {p:'Ağ yönetimi yalnızca teknik bir konu değil, aynı zamanda iş sürekliliğini ilgilendiren stratejik bir alandır. Kesintiler, güvenlik açıkları ve performans sorunları doğrudan verimlilik kaybına yol açar.'},
      {ul:['Merkezi kimlik ve erişim yönetimi (Active Directory)','DNS ve DHCP ile ölçeklenebilir adres yönetimi','Grup ilkeleri ile tutarlı güvenlik politikaları','Yük dengeleme ve yüksek erişilebilirlik']},
      {h:'İşletmelere Sağladığı Avantajlar'},
      {p:'Doğru kurgulanmış bir Windows Server ağ altyapısı; yönetim maliyetlerini düşürür, güvenliği artırır ve büyümeye hazır bir temel sunar. Otomasyon ve izleme araçlarıyla proaktif yönetim mümkün hâle gelir.'},
      {p:'Digital Vizyon Akademi olarak, ekiplerinizin bu yetkinlikleri uygulamalı biçimde kazanması için kuruma özel Windows Server ve ağ yönetimi eğitimleri sunuyoruz.'}
    ]
  },
  {
    id:'buluta-giris', title:'Bulut Bilişime Giriş: Nereden Başlamalı?',
    category:'Bulut', date:'28 Ağustos 2026', read:'5 dk',
    image:'https://picsum.photos/seed/dv-blog1/1200/700',
    excerpt:'Kurumların bulut yolculuğuna güvenli ve planlı bir şekilde başlaması için bilmesi gereken temel kavramlar.',
    body:[
      {p:'Bulut bilişim, işletmelerin altyapı maliyetlerini düşürürken esnekliğini artıran bir dönüşüm sunar. Ancak bu yolculuğa plansız başlamak, beklenen faydayı geciktirebilir.'},
      {h:'Temel Hizmet Modelleri'},
      {ul:['IaaS — Altyapı hizmeti (sunucu, depolama, ağ)','PaaS — Uygulama geliştirme platformu','SaaS — Hazır yazılım hizmetleri']},
      {h:'Nereden Başlamalı?'},
      {p:'İlk adım, mevcut iş yüklerinizi ve hedeflerinizi analiz etmektir. Hangi uygulamaların buluta taşınacağı, güvenlik gereksinimleri ve maliyet beklentileri netleştirilmelidir.'},
      {p:'Bulut Fundamentals ve Azure eğitimlerimizle ekiplerinizin doğru temelle başlamasını sağlıyoruz.'}
    ]
  },
  {
    id:'cicd-5-adim', title:'CI/CD Hattı Kurmanın 5 Temel Adımı',
    category:'DevOps', date:'21 Ağustos 2026', read:'7 dk',
    image:'https://picsum.photos/seed/dv-blog2/1200/700',
    excerpt:'Sürekli entegrasyon ve dağıtım hattınızı sıfırdan kurarken dikkat etmeniz gereken temel adımlar.',
    body:[
      {p:'CI/CD, yazılım teslim süreçlerini otomatikleştirerek daha hızlı, güvenilir ve tekrarlanabilir dağıtımlar sağlar. İyi kurgulanmış bir hat, ekiplerin verimliliğini belirgin biçimde artırır.'},
      {h:'5 Temel Adım'},
      {ul:['Sürüm kontrolü ve dallanma stratejisinin belirlenmesi','Otomatik derleme (build) sürecinin kurulması','Otomatik test aşamalarının eklenmesi','Dağıtım (deployment) otomasyonu','İzleme ve geri bildirim döngüsünün kurulması']},
      {h:'Dikkat Edilmesi Gerekenler'},
      {p:'Her adımda otomasyonu artırırken, güvenlik ve kalite kontrollerini de hatta dâhil etmek gerekir. Başarısız dağıtımlarda hızlı geri dönüş (rollback) mekanizmaları kritik önemdedir.'},
      {p:'DevOps Fundamentals eğitimimizde bu adımları uygulamalı olarak deneyimliyorsunuz.'}
    ]
  },
  {
    id:'kubernetes-neden-onemli', title:'Kubernetes Neden Bu Kadar Önemli?',
    category:'Konteyner', date:'14 Ağustos 2026', read:'6 dk',
    image:'https://picsum.photos/seed/dv-blog3/1200/700',
    excerpt:'Konteyner orkestrasyonunun kurumsal uygulamalara kattığı değeri ve Kubernetes’in öne çıkma nedenlerini inceliyoruz.',
    body:[
      {p:'Konteyner teknolojileri uygulama dağıtımını kolaylaştırırken, çok sayıda konteynerin yönetimi ayrı bir zorluk oluşturur. Kubernetes tam da bu noktada devreye girer.'},
      {h:'Kubernetes Ne Sağlar?'},
      {ul:['Otomatik ölçeklendirme ve yük dağıtımı','Kendi kendini iyileştirme (self-healing)','Kesintisiz güncelleme (rolling update)','Yapılandırma ve gizli bilgi yönetimi']},
      {h:'Kurumsal Değeri'},
      {p:'Kubernetes, uygulamaların taşınabilirliğini ve dayanıklılığını artırır; farklı bulut ve şirket içi ortamlar arasında tutarlı bir çalışma zemini sunar. Bu da uzun vadede maliyet ve risk avantajı demektir.'},
      {p:'Kubernetes ile Docker Orkestrasyonu eğitimimizde bu yetkinlikleri uygulamalı kazanabilirsiniz.'}
    ]
  },
  {
    id:'bulut-guvenlik-sorumluluk', title:'Bulut Güvenliğinde Paylaşılan Sorumluluk Modeli',
    category:'Güvenlik', date:'07 Ağustos 2026', read:'8 dk',
    image:'https://picsum.photos/seed/dv-blog4/1200/700',
    excerpt:'Bulut sağlayıcı ile kurum arasındaki güvenlik sorumluluklarının doğru dağılımı neden kritik?',
    body:[
      {p:'Bulut güvenliğinde en sık yapılan hatalardan biri, tüm sorumluluğun sağlayıcıya ait olduğunu varsaymaktır. Oysa güvenlik, paylaşılan bir sorumluluktur.'},
      {h:'Sorumluluk Nasıl Bölünür?'},
      {p:'Bulut sağlayıcı; fiziksel altyapı, ağ ve temel hizmetlerin güvenliğinden sorumludur. Kurum ise verilerinin, kimlik yönetiminin ve uygulama yapılandırmalarının güvenliğinden sorumludur.'},
      {ul:['Kimlik ve erişim yönetimi (en az yetki)','Veri şifreleme ve anahtar yönetimi','Yapılandırma ve yama yönetimi','İzleme ve tehdit tespiti']},
      {h:'Sonuç'},
      {p:'Sorumluluk sınırlarını net biçimde anlamak, güvenlik açıklarını önlemenin ilk adımıdır. Cloud Security eğitimimiz bu modeli uygulamalı senaryolarla ele alır.'}
    ]
  },
  {
    id:'iso-9001-fayda', title:'ISO 9001’in Kuruma Kattığı 6 Fayda',
    category:'Kalite', date:'31 Temmuz 2026', read:'5 dk',
    image:'https://picsum.photos/seed/dv-blog5/1200/700',
    excerpt:'Kalite yönetim sisteminin operasyonel verimlilik ve müşteri memnuniyeti üzerindeki somut etkileri.',
    body:[
      {p:'ISO 9001, yalnızca bir belge değil; kurum kültürüne yerleşen bir kalite yönetim yaklaşımıdır. Doğru uygulandığında somut faydalar sağlar.'},
      {h:'6 Temel Fayda'},
      {ul:['Süreçlerde standardizasyon ve tutarlılık','Müşteri memnuniyetinde artış','Hata ve tekrar iş oranında azalma','Risk temelli düşünme ile önleyici yaklaşım','Sürekli iyileştirme kültürü','Kurumsal itibar ve rekabet avantajı']},
      {p:'ISO 9001 Kalite Yönetim Sistemi Temeli eğitimimizle ekiplerinizin standardı doğru yorumlamasını sağlıyoruz.'}
    ]
  },
  {
    id:'uzaktan-ekip-iletisim', title:'Uzaktan Ekiplerde Etkili İletişim',
    category:'Kurumsal Gelişim', date:'24 Temmuz 2026', read:'6 dk',
    image:'https://picsum.photos/seed/dv-blog6/1200/700',
    excerpt:'Hibrit ve uzaktan çalışma düzeninde takım iletişimini güçlü ve verimli tutmanın yolları.',
    body:[
      {p:'Uzaktan çalışma esneklik sağlarken, iletişim kalitesini korumak ekstra çaba gerektirir. Yanlış anlaşılmalar ve kopukluklar verimliliği düşürebilir.'},
      {h:'Güçlü İletişim İçin İpuçları'},
      {ul:['Net ve yazılı iletişimi önceliklendirin','Toplantıları amaç ve süre odaklı yönetin','Asenkron iletişim araçlarını doğru kullanın','Geri bildirim kültürünü sürdürün','Takım bağını güçlendiren ritüeller oluşturun']},
      {h:'Yöneticilere Düşen Rol'},
      {p:'Uzaktan ekiplerde güven ve şeffaflık her zamankinden önemlidir. Yöneticilerin açık iletişim modellemesi, tüm ekibin iletişim kalitesini yükseltir.'},
      {p:'Kurumsal gelişim eğitimlerimizle ekiplerinizin iletişim becerilerini güçlendiriyoruz.'}
    ]
  }
];

