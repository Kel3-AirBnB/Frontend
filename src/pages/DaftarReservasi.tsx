import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/fragments/Card";
import { Button } from "@/components/elements/Button";

const DaftarReservasi = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-1">
              <div className="flex flex-1 gap-4 items-center">
                <div className="w-36 h-36 rounded-lg">
                  <img
                    className="w-full h-36 object-cover rounded-sm"
                    src="https://source.unsplash.com/photos/persons-silhouette-during-golden-hour-x_8oJhYU31k"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-lg">Home 1</p>
                  <p className="font-bold text-gray-400">
                    12 June 2024 - 13 June 2024
                  </p>
                  <p>Rp. 1.000.000</p>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <Button className="bg-[#FF385C] hover:bg-[#D21F40]">
                  Continue to payment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DaftarReservasi;
