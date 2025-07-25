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
    "/kethoprak-1.jpg",
    "/kethoprak-2.jpg",
    "/kethoprak-3.jpg",
    "/kethoprak-4.jpg",
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
        <p className="text-sm mt-1">Desa Bligo, Kecamatan Ngluwar, Kabupaten Magelang</p>
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
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
          Deskripsi Dusun
        </h2>
        <div className="md:flex gap-6 items-start">
          <img
            src="/foto-dusun.jpg"
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
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
          Kesenian Dusun
        </h2>
        <h3 className="text-xl font-bold text-green-800 mb-2">Kethoprak</h3>
        <p className="mb-4 text-justify">
          Kethoprak adalah seni pertunjukan tradisional Jawa yang masih aktif
          dilestarikan oleh warga Dusun Kolodanan. Pertunjukan ini biasanya
          digelar pada saat perayaan hari besar atau acara adat dusun, dan
          menjadi sarana hiburan sekaligus pelestarian budaya lokal. Dengan
          iringan gamelan dan cerita pewayangan atau kehidupan rakyat, kethoprak
          memberikan nuansa khas budaya Jawa yang kental.
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
      <section id="struktur" className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
          Struktur Kepengurusan Dusun
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-base">
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Kepala Dusun:</strong> Bp. Sari Asmaya
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Ketua RW:</strong> Bp. Suratman
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Ketua RT 1:</strong> Bp. Muh Drajat
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Ketua RT 2:</strong> Bp. Wardoyo
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Ketua RT 3:</strong> Bp. Supriyadi, S.H
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Ketua RT 4:</strong> Bp. Sugito
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Ketua RT 5:</strong> Bp. Parjiono
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow md:col-span-2">
            <p>
              <strong>Ketua Pemuda:</strong> Muhammad Raihan Prayoga
            </p>
          </div>
        </div>
      </section>

      {/* UMKM Section */}
      <section id="umkm" className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
          UMKM Dusun
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {umkmList.map((umkm, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
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
    </div>
  );
}

export default App;
