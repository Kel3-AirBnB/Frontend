import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/fragments/Card";
import { Input } from "@/components/elements/Input";
import { Button } from "@/components/elements/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUserType, userSchema } from "@/utils/apis/user/types";
import { deleteUser, editProfile } from "@/utils/apis/user/api";

//deklarasi meta data
const metaData = {
  title: "Booking | Profile",
  description: "Temukan kesempurnaan tempat menginap untuk petualangan Anda diaplikasi booking kami.",
};

const Profile = () => {
  const {
    register,
    handleSubmit,
    // setValue,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeat_password: "",
      tanggal_lahir: "",
      foto: "",
    },
  });

  const handleUpdateUser = async (body: IUserType) => {
    try {
      const result = await editProfile(body);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const result = await deleteUser();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout meta={metaData}>
      <p className="font-bold px-6 mt-6">Welcome, John</p>
      <Card className="mt-6">
        <CardContent>
          <div className="bg-gradient-to-r from-[#FF385C] to-[#969696] h-16 rounded-t-lg"></div>
          <div className="p-6">
            <div className="flex flex-row gap-6 items-center">
              <div className="">
                <div className="w-24 h-24">
                  <img className="w-full h-24 rounded-full object-cover" src="https://source.unsplash.com/photos/persons-silhouette-during-golden-hour-x_8oJhYU31k" alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold">John Doe</p>
                <p className="text-xs text-gray-500 tracking-wider">johndoe@gmail.com</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(handleUpdateUser)} className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-6">
              <div className="sm:col-span-3">
                <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                    id="full-name"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-sm text-red-500 ">{errors.name.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="password"
                    id="password"
                    {...register("password")}
                  />
                  {errors.password && <p className="text-sm text-red-500 ">{errors.password.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    id="email"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-sm text-red-500 ">{errors.email.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="repeat-password" className="block text-sm font-medium leading-6 text-gray-900">
                  Repeat Password
                </label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="password"
                    id="repeat-password"
                    {...register("repeat_password")}
                  />
                  {errors.repeat_password && <p className="text-sm text-red-500 ">{errors.repeat_password.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="birth" className="block text-sm font-medium leading-6 text-gray-900">
                  Birth
                </label>
                <div className="mt-2">
                  <Input
                    className="block w-full rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="date"
                    id="birth"
                    {...register("tanggal_lahir")}
                  />
                  {errors.tanggal_lahir && <p className="text-sm text-red-500 ">{errors.tanggal_lahir.message}</p>}
                </div>
              </div>
              <div className="flex justify-end items-end col-span-3">
                <Button type="button" onClick={handleDeleteUser} className="mx-3 border-red-500 hover:bg-red-500 hover:text-white" variant="outline">
                  Delete account
                </Button>
                <Button className="bg-[#FF385C] hover:bg-[#D21F40]" disabled={isSubmitting} aria-disabled={isSubmitting}>
                  Save changes
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Profile;
