import MainLayout from "@/layouts/MainLayout";
import { MdOutlinePayments } from "react-icons/md";

import React from "react";

//deklarasi meta data
const metaData = {
  title: "Booking | Payment",
  description: "Temukan kesempurnaan tempat menginap untuk petualangan Anda diaplikasi booking kami.",
};

const Payment = () => {
  return (
    <MainLayout meta={metaData}>
      <div className="relative w-full h-32 bg-[#EEF2F7]">
        <div className="absolute top-14 left-1/2 -translate-x-1/2 flex gap-5 w-1/2 mx-auto p-5 rounded-sm shadow-lg bg-white">
          <div className="flex flex-col gap-2 flex-grow">
            <div>
              <h1 className="text-2xl font-bold">Rumah pohon di Kecamatan Sidemen, Indonesia</h1>
              <h1 className="mb-4">CHECK-IN 23/05/2024 - CHECK-OUT 30/05/2024</h1>
              <h1 className="text-xl font-semibold">
                total: <b>Rp. 2.000.000</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 w-1/2 mx-auto p-5 bg-white mt-20">
        <div className="flex flex-col gap-2 flex-grow">
          <h1 className="text-2xl font-bold">Pilih metode pembayaran: </h1>
          <form>
            <div className="flex gap-2 items-center">
              <input type="radio" id="bri" name="payment" value="BRI" />
              <MdOutlinePayments />
              <label htmlFor="bri" className="text-xl font-semibold">
                BRI
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" id="bni" name="payment" value="BNI" />
              <MdOutlinePayments />
              <label htmlFor="bni" className="text-xl font-semibold">
                BNI
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" id="mandiri" name="payment" value="Mandiri" />
              <MdOutlinePayments />
              <label htmlFor="mandiri" className="text-xl font-semibold">
                Mandiri
              </label>
            </div>
            <button className="p-3 w-32 bg-red-800 hover:bg-red-900 rounded-md text-white my-10">Continue</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;
