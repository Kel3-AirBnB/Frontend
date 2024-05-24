import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { getPenginapan } from "@/utils/apis/penginapan/api";
import FormatPrice from "@/components/elements/FormatPrice";
import { Penginapan } from "../utils/apis/penginapan/type";
import isLoadingImage from "../assets/gray.png";

const Home = () => {
  const [penginapan, setPenginapan] = useState<Penginapan[]>([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk menangani loading

  useEffect(() => {
    // Mengatur loading menjadi true ketika pengambilan data dimulai
    setIsLoading(true);

    // Mengambil data penginapan dari API
    const fetchData = () => {
      try {
        const data = getPenginapan();
        setPenginapan(data);
        setIsLoading(false); // Mengatur loading menjadi false setelah data diperoleh
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Mengatur loading menjadi false jika terjadi kesalahan
      }
    };

    fetchData();
  }, []);

  //deklarasi meta data
  const metaData = {
    title: "Booking | Homepage",
    description:
      "Temukan kesempurnaan tempat menginap untuk petualangan Anda diaplikasi booking kami.",
  };

  return (
    //kirim meta data ke main layout
    <MainLayout meta={metaData}>
      <div className="flex items-center justify-center my-6">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {penginapan.map((item, index) => (
              <div
                key={index}
                className="relative flex w-full lg:max-w-[26rem] max-w-xl flex-col rounded-xl bg-clip-border text-gray-700"
              >
                <div className="relative overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
                  <img
                    src={isLoading ? isLoadingImage : item.foto[0].url}
                    alt={item.nama}
                    className="w-full h-80 max-w-[40rem] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                  <button
                    className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all"
                    type="button"
                    aria-label="love-item"
                  >
                    <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                      <Heart strokeWidth={1.5} className="text-white" />
                    </span>
                  </button>
                </div>
                <div className="py-8 px-1 max-w-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <Link
                      to={`/penginapan/${item.id}`}
                      aria-label="redirect ke detail penginapan"
                    >
                      <h1 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {item.nama}
                      </h1>
                    </Link>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                      <Star className="-mt-0.5 h-5 w-5" />
                      {item.rating}
                    </p>
                  </div>
                  <p className="my-2 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    {isLoading
                      ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sapiente."
                      : item.deskripsi.slice(0, 75)}
                    ...
                  </p>

                  <p className="my-2">
                    <span className="text-lg font-bold">
                      <FormatPrice harga={item.harga} />
                    </span>{" "}
                    /night
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-4">
            <button
              className="px-8 py-3 text-md shadow border border-neutral-200 rounded-xl hover:bg-gray-50"
              aria-label="load-more"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
