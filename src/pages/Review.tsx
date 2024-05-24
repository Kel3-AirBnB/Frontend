import MainLayout from "@/layouts/MainLayout";
import { ReviewType, reviewSchema } from "@/utils/apis/review/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";

//deklarasi meta data
const metaData = {
  title: "Booking | Review",
  description: "Temukan kesempurnaan tempat menginap untuk petualangan Anda diaplikasi booking kami.",
};

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ReviewType>({
    resolver: zodResolver(reviewSchema),
  });

  useEffect(() => {
    setValue("rating", String(rating) as string);
  });

  const handleClick = (getCurrentId: number) => {
    setRating(getCurrentId);
  };

  const handleMouseEnter = (getCurrentId: number) => {
    setHover(getCurrentId);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const handleReview = async (body: ReviewType) => {
    console.log(body);
  };

  return (
    <MainLayout meta={metaData}>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center my-5">Review</h1>
        <div className="flex flex-col w-11/12 rounded-md my-5 shadow-lg">
          <div className="flex gap-5 w-4/5 mx-auto p-5 my-5">
            <div className="w-40 h-40 rounded-md">
              <img src="https://source.unsplash.com/random?hotel" alt="hotel" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <div>
                <h1 className="text-2xl font-bold mb-3">Rumah pohon di Kecamatan Sidemen, Indonesia</h1>
                <h1>23/05/2024 - 30/05/2024</h1>
                <h1 className="text-xl font-semibold">Rp. 2.000.000</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleReview)} className="flex flex-col items-center justify-center gap-5 w-[40%] mx-auto mb-5">
            <div className="w-4/5">
              <label htmlFor="rating">Rating</label>
              <div className="flex justify-center text-2xl my-2 w-full">
                {[...Array(5)].map((_, index) => {
                  index += 1;
                  return (
                    <FaStar
                      key={index}
                      className={`cursor-pointer ${index <= (hover || rating) ? "text-yellow-500" : ""}`}
                      onClick={() => handleClick(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                    />
                  );
                })}
              </div>
              <input type="hidden" id="rating" className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2" {...register("rating")} disabled={isSubmitting} aria-disabled={isSubmitting} />
              {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
            </div>
            <div className="w-4/5">
              <label htmlFor="komentar">Komentar</label> <br />
              <textarea id="komentar" className="w-full border border-gray-300 rounded-md focus:outline-none p-2" {...register("komentar")} disabled={isSubmitting} aria-disabled={isSubmitting}></textarea>
              {errors.komentar && <p className="text-red-500">{errors.komentar.message}</p>}
            </div>
            <button className="w-4/5 p-3 rounded-full bg-red-800 text-white hover:bg-red-900">Posting</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Review;
