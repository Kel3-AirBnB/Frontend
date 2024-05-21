import MainLayout from "../layouts/MainLayout";
import { Heart, Star } from "lucide-react";

const Home = () => {
  const cardsData = [
    {
      imgSrc:
        "https://a0.muscache.com/im/pictures/miso/Hosting-702698881683757720/original/55666499-0446-4572-a12f-42aba2f575a6.jpeg?im_w=1200",
      title: "Nusa Penida, Bali",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imgSrc:
        "https://a0.muscache.com/im/pictures/miso/Hosting-702698881683757720/original/55666499-0446-4572-a12f-42aba2f575a6.jpeg?im_w=1200",
      title: "Mandalika, Lombok",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imgSrc:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2OTQxMjgxMTEyMzE3MDQ2MA%3D%3D/original/11023f6d-80d5-414d-9823-532957c163dd.jpeg?im_w=1200",
      title: "Sleman, Yogyakarta",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imgSrc:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1122257324205360936/original/abc32c9e-2c8f-460a-9132-afff948f6e71.jpeg?im_w=1200",
      title: "Bandung, Jawa Barat",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

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
            {cardsData.map((item, index) => (
              <div
                key={index}
                className="relative flex w-full lg:max-w-[26rem] max-w-xl flex-col rounded-xl bg-clip-border text-gray-700"
              >
                <div className="relative overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
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
                    <h1 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {item.title}
                    </h1>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                      <Star className="-mt-0.5 h-5 w-5" />
                      5.0
                    </p>
                  </div>
                  <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    {item.description}
                  </p>
                  <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    22 May - 23 May
                  </p>
                  <p className="my-2">
                    <span className="text-lg font-bold">Rp. 290.000,00</span>{" "}
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
