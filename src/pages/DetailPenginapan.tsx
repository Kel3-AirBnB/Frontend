import MainLayout from "@/layouts/MainLayout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import { DatePicker } from "@/components/elements/DatePicker";
import { useState } from "react";
import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/fragments/Card";

const DetailPenginapan = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  console.log(selectedDate);

  return (
    <MainLayout>
      <div className="p-3 border-t border-gray-300 shadow-lg fixed bottom-0 z-50 w-full bg-white lg:hidden md:hidden block">
        <h5 className="text-lg font-bold mb-">
          Rp. 350.000
          <span className="text-sm text-gray-600 font-normal">/malam</span>
        </h5>
        <Input
          type="number"
          placeholder="Jumlah orang"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <div className="flex pt-3">
          <DatePicker
            label="Tanggal mulai"
            onDayClick={handleDateSelect}
            className="rounded-l-lg"
          />
          <DatePicker
            label="Tanggal selesai"
            onDayClick={handleDateSelect}
            className="rounded-r-lg"
          />
        </div>
        <Button className="bg-red-600 hover:bg-red-500 w-full mt-2">
          Pesan sekarang
        </Button>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap items-center justify-center my-6">
          {/* Main Image */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 hidden sm:block">
            <img
              className="h-auto w-full rounded-md object-cover object-center md:h-[480px]"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-986006657560562155/original/58f672af-308b-4763-bb92-0eb58fd26a71.jpeg?im_w=1200"
              alt=""
            />
          </div>
          {/* Thumbnails */}
          <div className="w-full lg:w-1/2 px-3">
            <div className="grid grid-cols-2 gap-2 min-h-[140px] overflow-x-scroll rounded-lg lg:overflow-visible">
              <div>
                <img
                  className="object-cover object-center h-40 w-full rounded-lg md:h-60"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-986006657560562155/original/3a4d55a0-422c-4f66-ba6d-9c85e1a68768.jpeg?im_w=720"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-40 w-full rounded-lg md:h-60"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-986006657560562155/original/2a000070-414a-4710-aefe-64cf1d22b738.jpeg?im_w=720"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-40 w-full rounded-lg md:h-60"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-986006657560562155/original/7a870377-3af0-4e11-b930-84fe34a5308c.jpeg?im_w=720"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover object-center h-40 w-full rounded-lg md:h-60"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-986006657560562155/original/bd5e6909-52c7-4f80-aca8-cce2faaffd55.jpeg?im_w=720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* left Column */}
          <div className="w-full md:w-8/12 px-4">
            <h1 className="text-2xl font-bold mb-1">
              Rumah pohon di Kecamatan Sidemen, Indonesia
            </h1>
            <p className="text-gray-700">
              2 tamu, 1 kamar tidur, 1 tempat tidur, 1 kamar mandi
            </p>
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 me-4 rounded-full"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-986006657560562155/original/bd5e6909-52c7-4f80-aca8-cce2faaffd55.jpeg?im_w=720"
                alt=""
              />

              <div className="font-medium my-6">
                <p>
                  Berry Kurniawan
                  <time
                    dateTime="2014-08-16 19:00"
                    className="block text-sm text-gray-500 dark:text-gray-400"
                  >
                    Tuan rumah selama 7 tahun
                  </time>
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <h5 className="font-semibold text-gray-900">Description</h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quisquam provident quod maiores beatae, accusantium ipsum dolore
              culpa repellat quasi quo voluptatem harum quaerat cumque obcaecati
              veniam animi, a inventore!
            </div>

            <div className="max-h-lg relative w-full mt-6">
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                className="h-96 w-full"
                style={{ zIndex: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <article>
              <h5 className="mb-4 mt-8 font-bold text-xl">Review</h5>
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 me-4 rounded-full"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-986006657560562155/original/7a870377-3af0-4e11-b930-84fe34a5308c.jpeg?im_w=720"
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <p>
                    Jese Leos{" "}
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Thinking to buy another one!
                </h3>
              </div>

              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
            </article>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-4/12 px-4 mt-4 md:mt-0 hidden lg:block md:block">
            <Card>
              <CardHeader>
                <CardTitle>
                  Rp. 350.000
                  <span className="text-sm text-gray-600 font-normal">
                    /malam
                  </span>
                </CardTitle>
                <CardDescription>Harga sudah termasuk pajak</CardDescription>
                <div className="flex pt-3">
                  <DatePicker
                    label="Tanggal mulai"
                    onDayClick={handleDateSelect}
                    className="rounded-l-lg w-1/2 lg:w-full"
                  />
                  <DatePicker
                    label="Tanggal selesai"
                    onDayClick={handleDateSelect}
                    className="rounded-r-lg w-1/2 lg:w-full"
                  />
                </div>
                <div className="py-3">
                  <label htmlFor="jumlah" className="text-sm font-semibold">
                    Jumlah
                  </label>
                  <Input
                    type="number"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="bg-red-600 hover:bg-red-500">
                  Pesan sekarang
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPenginapan;
