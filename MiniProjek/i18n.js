/**
 * i18n.js — Sistem ganti bahasa sederhana untuk website
 * Cara pakai:
 * 1. Sertakan file ini di HTML: <script src="i18n.js"></script>
 * 2. Tambahkan atribut data-i18n="key" pada elemen yang ingin diterjemahkan.
 *    Untuk placeholder/title, gunakan data-i18n-attr="placeholder:key".
 * 3. Panggil setLanguage('en') di tombol atau elemen pilihan bahasa.
 */

// 1. Kamus semua bahasa dalam satu tempat
const translations = {
  id: {
    navLinks: "Selamat Datang",
    hero: "Website ini mendukung banyak bahasa.",
    profile: "Mulai Sekarang",
    searchPlaceholder: "Cari sesuatu..."
  },
  en: {
    navLinks: "Welcome",
    hero: "This website supports multiple languages.",
    profile: "Get Started",
    searchPlaceholder: "Search something..."
  }
};

// 2. Fungsi utama: terapkan bahasa ke seluruh halaman
function setLanguage(lang) {
  const dict = translations[lang] || translations.id;

  // Ganti teks biasa: <p data-i18n="desc">
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Ganti atribut seperti placeholder/title: <input data-i18n-attr="placeholder:searchPlaceholder">
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
    if (dict[key]) el.setAttribute(attr, dict[key]);
  });

  // Tandai tombol bahasa aktif (opsional, kalau pakai class .lang-btn)
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("preferredLang", lang);
  document.documentElement.lang = lang;
}

// 3. Pasang otomatis ke semua tombol dengan class .lang-btn dan atribut data-lang
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Muat bahasa tersimpan, atau default "id"
  const savedLang = localStorage.getItem("preferredLang") || "id";
  setLanguage(savedLang);
});