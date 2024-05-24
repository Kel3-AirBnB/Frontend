import MainLayout from "@/layouts/MainLayout";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const handleReview = () => {
    navigate("/review");
  };
  return (
    <MainLayout>
      <div className="w-full my-10">
        <h1 className="text-3xl font-bold text-center">History</h1>
        <div className="flex gap-5 w-4/5 mx-auto p-5 rounded-md shadow-lg my-10">
          <div className="w-40 h-40 rounded-md">
            <img src="https://source.unsplash.com/random?hotel" alt="hotel" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <div>
              <h1 className="text-2xl font-bold mb-3">Rumah pohon di Kecamatan Sidemen, Indonesia</h1>
              <h1>23/05/2024 - 30/05/2024</h1>
              <h1 className="text-xl font-semibold">Rp. 2.000.000</h1>
            </div>
            <button onClick={handleReview} className="p-2 rounded-md bg-red-800 hover:bg-red-900 text-white w-20 self-end">
              Review
            </button>
          </div>
        </div>
        <div className="flex gap-5 w-4/5 mx-auto p-5 rounded-md shadow-lg my-10">
          <div className="w-40 h-40 rounded-md">
            <img src="https://source.unsplash.com/random?house" alt="hotel" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <div>
              <h1 className="text-2xl font-bold mb-3">Villa cempaka</h1>
              <h1>30/05/2024 - 05/06/2024</h1>
              <h1 className="text-xl font-semibold">Rp. 2.500.000</h1>
            </div>
            <button onClick={handleReview} className="p-2 rounded-md bg-red-800 hover:bg-red-900 text-white w-20 self-end">
              Review
            </button>
          </div>
        </div>
        <div className="flex gap-5 w-4/5 mx-auto p-5 rounded-md shadow-lg my-10">
          <div className="w-40 h-40 rounded-md">
            <img src="https://source.unsplash.com/random?vintage" alt="hotel" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <div>
              <h1 className="text-2xl font-bold mb-3">Hotel cempaka</h1>
              <h1>18/05/2024 - 30/05/2024</h1>
              <h1 className="text-xl font-semibold">Rp. 3.000.000</h1>
            </div>
            <button onClick={handleReview} className="p-2 rounded-md bg-red-800 hover:bg-red-900 text-white w-20 self-end">
              Review
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default History;
