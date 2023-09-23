const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


const contactSection = document.querySelector("section.contact");
const contacth4 = contactSection.querySelector("h4");
contacth4.textContent = siteContent.iletisim["iletişim-h4"];

const contactPs = contactSection.querySelectorAll("p");
contactPs.forEach((p, i) => {
  p.textContent = Object.values(siteContent.iletisim)[i + 1];
})

const footer = document.querySelector("footer a");
footer.textContent = "Copyright Bir Şirket Sitesi 2022"
footer.classList.add("bold")

const navAlinks = document.querySelectorAll("header nav a");
const items = Object.values(siteContent.nav)
navAlinks.forEach((nav, i) => {
  nav.classList.add("italic");
  nav.textContent = items[i]
})

const ctaText = document.querySelector("section.cta .cta-text");
const ctaH1 = ctaText.querySelector("h1");
ctaH1.textContent = "Bu DOM Mükemmel"
const ctaButton = ctaText.querySelector("button");
ctaButton.textContent = "Başlayın"

const sirketLogo = document.getElementById("logo-img");
sirketLogo.setAttribute("src", siteContent.images["logo-img"]);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.images["cta-img"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent.images["accent-img"]);





const anaContent = Object.values(siteContent["ana-içerik"])
const anaIcerik = document.querySelectorAll(".text-content");

anaIcerik.forEach((c, i) => {
  c.querySelector("h4").textContent = anaContent[i * 2];
  c.querySelector("p").textContent = anaContent[i * 2 + 1];


})




