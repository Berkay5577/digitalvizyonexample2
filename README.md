# Digital Vizyon Akademi — Kurumsal Web Sitesi

IT ve kurumsal gelişim eğitimleri sunan **Digital Vizyon Akademi** için çok sayfalı, tam çalışır statik web sitesi. Saf HTML/CSS/JavaScript ile geliştirilmiştir; herhangi bir derleme adımı gerektirmez.

## Öne çıkanlar

- **Yüzen (pill) navigasyon** — kaydırınca daralan, "Kurumsal" açılır menülü
- **Hero slayt gösterisi** (crossfade + ken-burns) ve canlı iç sayfa banner'ları
- **Eğitim kataloğu** — `data.js`'ten dinamik render, canlı filtre + arama, `?q=` / `?cat=` URL desteği
- **Eğitim detay sayfası** — `egitim-detay.html?id=...`
- **Teknoloji bülteni (blog)** — liste + `blog-detay.html?id=...` yazı sayfaları
- **Doğrulamalı iletişim/teklif formu**, SSS akordeon, animasyonlu sayaçlar
- **Referans logo şeridi**, müşteri yorumları, sektör grid
- **Hızlı iletişim çubuğu** (telefon, WhatsApp, e-posta, sosyal)
- Tamamen **responsive** ve `prefers-reduced-motion` uyumlu

## Sayfalar

| Sayfa | Açıklama |
|-------|----------|
| `index.html` | Anasayfa |
| `egitimler.html` | Eğitim kataloğu |
| `egitim-detay.html` | Eğitim detayı (`?id=`) |
| `hakkimizda.html` | Kurumsal / Hakkımızda |
| `operasyon.html` | Operasyon süreci |
| `tamamlanan-egitimler.html` | Tamamlanan eğitimler |
| `referanslar.html` | Referanslar |
| `kurumsal-kimlik.html` | Kurumsal kimlik |
| `teknoloji-bulteni.html` | Teknoloji bülteni (blog) |
| `blog-detay.html` | Blog yazısı (`?id=`) |
| `sss.html` | Sıkça sorulan sorular |
| `iletisim.html` | İletişim |

## Ortak dosyalar

- `style.css` — tüm stiller
- `app.js` — ortak davranışlar; nav/footer/hızlı çubuk enjeksiyonu, katalog & blog render'ı
- `data.js` — eğitim (`window.TRAININGS`) ve blog (`window.POSTS`) verisi
- `logo.svg` — kurum logosu
- `icon/` — referans firma logoları

## Yerel çalıştırma

Göreli yolların (logo, görseller) doğru çözülmesi için basit bir yerel sunucu kullanın:

```bash
python -m http.server 8123
```

Ardından tarayıcıda `http://localhost:8123/` adresini açın.

---

> Not: Bu bir tasarım uyarlaması / örnek çalışmadır. Görseller telifsiz placeholder servislerinden gelmektedir.
