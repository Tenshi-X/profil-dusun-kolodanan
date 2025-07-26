import { useState } from "react";

function App() {
  const umkmList = [
    {
      nama: "Mie Nyemek Mbok Katar",
      produk: "Kafe",
      kontak: "081328598488",
      maps: "https://maps.app.goo.gl/jdcQ63UXBheXvLwk8",
    },
    {
      nama: "Warung Pak Mamik",
      produk: "Toko Kelontong",
      kontak: "08561851234",
      maps: "https://maps.app.goo.gl/EJMfN2yv4ZPwJAKN8",
    },
    {
      nama: "Warung Mbah Darno",
      produk: "Toko Kelontong",
      kontak: "-",
      maps: "https://maps.app.goo.gl/bLC4VPR6anRFhE1S8",
    },
    {
      nama: "Warung Bu Amini",
      produk: "Toko Kelontong",
      kontak: "-",
      maps: "https://maps.app.goo.gl/m8Gz7QVSsxCtKSoS8",
    },
    {
      nama: "Moko Endok",
      produk: "Peternakan Ayam",
      kontak: "087834758363",
      maps: "https://maps.app.goo.gl/gHay5SiUV76ukJTTA",
    },
    {
      nama: "Warung Mbah Mudo",
      produk: "Kedai Sarapan",
      kontak: "083113099696",
      maps: "https://maps.app.goo.gl/fiprrTjAEMgmrDbv5",
    },
  ];

  const kethoprakImages = [
    `${process.env.PUBLIC_URL}/kethoprak-1.jpg`,
    `${process.env.PUBLIC_URL}/kethoprak-2.jpg`,
    `${process.env.PUBLIC_URL}/kethoprak-3.jpg`,
    `${process.env.PUBLIC_URL}/kethoprak-4.jpg`,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? kethoprakImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === kethoprakImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="font-sans bg-green-50 text-green-900">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Profil Dusun Kolodanan</h1>
        <p className="text-sm mt-1">
          Desa Bligo, Kecamatan Ngluwar, Kabupaten Magelang, Provinsi Jawa
          Tengah
        </p>
      </header>

      {/* Navbar */}
      <nav className="bg-green-600 sticky top-0 z-50 shadow text-white">
        <div className="flex justify-center space-x-6 py-3">
          <a href="#deskripsi" className="hover:underline">
            Deskripsi
          </a>
          <a href="#kesenian" className="hover:underline">
            Kesenian
          </a>
          <a href="#struktur" className="hover:underline">
            Struktur
          </a>
          <a href="#umkm" className="hover:underline">
            UMKM
          </a>
        </div>
      </nav>

      {/* Deskripsi Section */}
      <section id="deskripsi" className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-center">
          Deskripsi Dusun
        </h2>
        <div className="md:flex gap-6 items-start">
          <img
            src={`${process.env.PUBLIC_URL}/foto-dusun.jpg`}
            alt="Foto Dusun"
            className="rounded-md shadow-md w-full md:w-1/2"
          />
          <p className="mt-4 md:mt-0 md:w-1/2 text-justify">
            Dusun Kolodanan merupakan salah satu dari 12 dusun yang berada di
            wilayah administratif Desa Bligo, Kecamatan Ngluwar, Kabupaten
            Magelang, Provinsi Jawa Tengah. Secara geografis, Dusun Kolodanan
            terletak di bagian timur Desa Bligo dan berbatasan langsung dengan
            beberapa dusun lain di sekitarnya. Geografis Desa Bligo 60 % terdiri
            dari persawahan dan 40% pemukiman penduduk. Perjalanan menuju Dusun
            Kolodanan dapat ditempuh dari Kota Yogyakarta dengan waktu tempuh
            sekitar 1 jam menggunakan kendaraan bermotor, menjadikannya dusun
            yang cukup mudah dijangkau dari pusat kota.
          </p>
        </div>
      </section>

      {/* Kesenian Section */}
      <section id="kesenian" className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-center">
          Kesenian Dusun
        </h2>
        <h3 className="text-xl font-bold text-green-800 mb-2">Kethoprak</h3>
        <p className="mb-4 text-justify">
          Kesenian Ketoprak di Dusun Kolodanan merupakan salah satu bentuk
          pelestarian budaya Jawa yang masih dijaga hingga kini dan dapat
          dinikmati oleh berbagai kalangan usia, mulai dari anak-anak hingga
          orang dewasa. Bagi anak-anak, ketoprak menjadi media pengenalan budaya
          lokal melalui cerita rakyat dan legenda yang dikemas dengan
          tokoh-tokoh menarik serta iringan musik gamelan. Untuk remaja,
          ketoprak memberikan pemahaman nilai-nilai moral, sejarah, dan
          kebijaksanaan lokal melalui dialog berbahasa Jawa dan pertunjukan yang
          sarat makna. Sementara itu, bagi masyarakat dewasa, ketoprak bukan
          hanya menjadi sarana hiburan, tetapi juga ruang refleksi budaya yang
          mengandung pesan kehidupan dan kritik sosial. Ketoprak di Dusun
          Kolodanan menjadi simbol kearifan lokal yang perlu terus dijaga,
          diperkenalkan kepada generasi muda, dan dikembangkan sebagai bagian
          dari identitas budaya masyarakat setempat.
        </p>

        {/* Carousel */}
        <div className="relative w-full max-w-3xl mx-auto group">
          <img
            src={kethoprakImages[currentImage]}
            alt={`Kethoprak ${currentImage + 1}`}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />

          {/* Tombol kiri */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-green-600 hover:text-white text-green-800 p-2 rounded-full shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Tombol kanan */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-green-600 hover:text-white text-green-800 p-2 rounded-full shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {kethoprakImages.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentImage
                    ? "bg-green-700 scale-110"
                    : "bg-green-300 hover:bg-green-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Section */}
      <section id="struktur" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6 text-center">
          Struktur Kepengurusan Dusun
        </h2>

        {/* Kepala Dusun */}
        <div className="text-center mb-6">
          <div className="inline-block bg-green-200 text-green-900 font-bold p-4 rounded-lg shadow">
            Kepala Dusun: Bp. Sari Asmaya
          </div>
        </div>

        {/* Ketua RW */}
        <div className="flex justify-center mb-6 relative">
          <div className="w-1 h-6 bg-green-400 absolute top-[-1.5rem]"></div>{" "}
          {/* Garis ke atas */}
          <div className="bg-green-100 p-4 rounded-lg shadow font-semibold text-center w-fit">
            Ketua RW: Bp. Suratman
          </div>
        </div>

        {/* Ketua RT */}
        <div className="flex justify-center mb-6 relative">
          <div className="absolute w-px h-6 bg-green-400 top-[-1.5rem] left-1/2 transform -translate-x-1/2"></div>{" "}
          {/* Garis ke atas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              Ketua RT 1: Bp. Muh Drajat
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              Ketua RT 2: Bp. Wardoyo
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              Ketua RT 3: Bp. Supriyadi, S.H
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              Ketua RT 4: Bp. Sugito
            </div>
            <div className="bg-white p-4 rounded shadow text-center md:col-start-2">
              Ketua RT 5: Bp. Parjiono
            </div>
          </div>
        </div>

        {/* Ketua Pemuda */}
        <div className="flex justify-center mt-8 relative">
          <div className="absolute w-px h-6 bg-green-400 top-[-1.5rem] left-1/2 transform -translate-x-1/2"></div>
          <div className="bg-green-50 text-green-800 p-4 rounded shadow text-center font-semibold w-fit">
            Ketua Pemuda: Muhammad Raihan Prayoga
          </div>
        </div>
      </section>

      {/* UMKM Section */}
      <section id="umkm" className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6 text-center">
          UMKM Dusun
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {umkmList.map((umkm, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              {/* Gambar UMKM */}
              <img
                src={`/${umkm.gambar}`}
                alt={`Foto ${umkm.nama}`}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-bold text-green-800 mb-2">
                {umkm.nama}
              </h3>
              <p>
                <strong>Produk:</strong> {umkm.produk}
              </p>
              <p>
                <strong>Kontak:</strong> {umkm.kontak}
              </p>
              <a
                href={umkm.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline mt-2 inline-block"
              >
                Lihat di Google Maps
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 mt-12 text-center">
        <p className="mb-2">
          Web profil dusun dibuat oleh <strong>KKN AA.83.003</strong>{" "}
          Universitas Pembangunan Nasional &quot;Veteran&quot; Yogyakarta
        </p>
        <p className="mb-1">
          Instagram:{" "}
          <a
            href="https://instagram.com/colodanans"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-200"
          >
            @colodanans
          </a>
          , TikTok:{" "}
          <a
            href="https://tiktok.com/@colodanans"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-200"
          >
            @colodanans
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
