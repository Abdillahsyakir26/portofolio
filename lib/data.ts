// Semua isi situs ada di sini. Edit file ini saja untuk mengganti teks, project, dan skill.

export const profile = {
  name: "Abdillah Syakir",
  role: "Web Developer & Software Enthusiast",
  intro:
    "Fokus membangun website modern, sistem ERP, dan aplikasi akuntansi yang benar-benar bermanfaat bagi bisnis.",
  location: "Pekalongan, Indonesia",
  whatsapp: "https://wa.me/6289666625759",
  email: "abdlhsyakir@gmail.com",
  photo: "/22.jpg",
}

export const stats = [
  { value: "5", label: "Bisnis UMKM terbantu" },
  { value: "3", label: "Bidang layanan" },
  { value: "6", label: "Bahasa pemrograman" },
];

// Angka "level" hanya contoh. Ubah sesuai kemampuanmu (0-100).
export type SkillGroup = {
  title: string;
  icon: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "🎨",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      { name: "PHP", level: 85 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Pemrograman Umum",
    icon: "💻",
    items: [{ name: "C++", level: 65 }],
  },
];

// Project di dalam tiap kategori masih contoh berdasarkan deskripsimu.
// Ganti judul, deskripsi, dan teknologinya dengan project aslimu.
export type Project = {
  title: string;
  desc: string;
  tech: string[];
  link?: string; // tambahkan baris ini
};

export type Category = {
  id: string;
  title: string;
  desc: string;
  image: string;
  projects: Project[];
};

export const categories: Category[] = [
  {
    id: "web",
    title: "Web",
    desc: "Website company profile, personal website, dan artikel.",
    image: "/website.png",
    projects: [
      {
        title: "Website Company Profile",
        desc: "Website profil perusahaan yang rapi dan responsif untuk memperkenalkan bisnis, layanan, dan kontak ke calon pelanggan.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Personal Website",
        desc: "Website pribadi untuk menampilkan profil, karya, dan portofolio dengan tampilan modern.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Website Artikel",
        desc: "Website artikel dengan pengelolaan konten yang mudah. Hubungi saya langsung untuk contoh dan detailnya.",
        tech: ["PHP", "CSS", "JavaScript"],
      },
    ],
  },
  {
    id: "akuntansi",
    title: "Aplikasi Akuntansi",
    desc: "Aplikasi keuangan untuk perusahaan maupun UMKM.",
    image: "/akuntansi.png",
    projects: [
      {
        title: "Aplikasi Keuangan UMKM",
        desc: "Aplikasi pencatatan keuangan untuk UMKM. Saat ini sudah membantu 5 bisnis UMKM untuk berkembang.",
        tech: ["PHP", "JavaScript", "MySQL"],
      },
      {
        title: "Aplikasi Keuangan Perusahaan",
        desc: "Sistem akuntansi untuk kebutuhan keuangan perusahaan, dari pencatatan transaksi sampai laporan.",
        tech: ["PHP", "JavaScript", "MySQL"],
      },
    ],
  },
  {
    id: "erp",
    title: "ERP Perusahaan",
    desc: "sistem perangkat lunak terintegrasi yang digunakan organisasi untuk mengotomatisasi dan mengelola berbagai proses bisnis inti dalam satu platform terpusat. ",
    image: "/ERP.png",
    projects: [
      {
        title: "Sistem ERP Terpadu",
        desc: "Sistem ERP lengkap yang menyatukan proses bisnis dalam satu aplikasi yang terinegrasi.",
        tech: ["PHP", "JavaScript", "MySQL"],
      },
      {
        title: "Manajemen Hak Akses",
        desc: "Pengaturan akses untuk setiap bagian kerja, sehingga setiap pengguna hanya melihat data yang menjadi tanggung jawabnya.",
        tech: ["PHP", "MySQL"],
      },
    ],
  },
  
];

export const store = {
  title: "Produk Sandang",
  desc: "Toko sandang berkualitas, dikelola langsung dengan sepenuh hati.",
  image: "/image.png",
  link: "https://shopee.co.id/sandangandalan", // ganti dengan link tokomu
  button: "Kunjungi Toko Shopee",
};

export const navLinks = [
  { label: "Tentang", href: "#home" },
  { label: "Skill", href: "#skill" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Toko", href: "#toko" },
  { label: "Kontak", href: "#kontak" },
];