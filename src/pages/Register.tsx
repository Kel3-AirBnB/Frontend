import { Link } from "react-router-dom";
import signup from "../assets/sign-up.png";
import { useState, ChangeEvent, FormEvent } from "react";
import { registerUser } from "../utils/apis/register/api";
import { registerSchema, RegisterType } from "../utils/apis/register/types";
import { Input } from "@/components/elements/Input";

const Register = () => {
  const [formValues, setFormValues] = useState<RegisterType>({
    nama: "",
    email: "",
    password: "",
    repeat_password: "",
    tanggal_lahir: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const parseResult = registerSchema.safeParse(formValues);

    if (!parseResult.success) {
      const errorMessages: { [key: string]: string } = {};
      parseResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          errorMessages[error.path[0]] = error.message;
        }
      });
      setErrors(errorMessages);
      console.error("Validation error:", parseResult.error);
      return;
    } else {
      setErrors({});
    }

    const formData = new FormData();
    formData.append("nama", formValues.nama);
    formData.append("email", formValues.email);
    formData.append("password", formValues.password);
    formData.append("repeat_password", formValues.repeat_password);
    formData.append("tanggal_lahir", formValues.tanggal_lahir);

    try {
      const data = await registerUser(formData);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full flex justify-center py-12">
      <form
        className="flex flex-col items-center justify-center gap-5 lg:w-[40%] w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-2xl">Sign up</h1>
        <div className="w-4/5">
          <label htmlFor="name">Full Name</label> <br />
          <Input
            type="text"
            id="name"
            name="nama"
            value={formValues.nama}
            onChange={handleInputChange}
          />
          {errors.nama && <p className="text-red-500">{errors.nama}</p>}
        </div>
        <div className="w-4/5">
          <label htmlFor="email">Email Address</label> <br />
          <Input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="w-4/5">
          <label htmlFor="password">Password</label> <br />
          <Input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="w-4/5">
          <label htmlFor="repeat">Repeat Password</label> <br />
          <Input
            type="password"
            id="repeat"
            name="repeat_password"
            value={formValues.repeat_password}
            onChange={handleInputChange}
          />
          {errors.repeat_password && (
            <p className="text-red-500">{errors.repeat_password}</p>
          )}
        </div>
        <div className="w-4/5">
          <label htmlFor="date">Birth</label> <br />
          <input
            type="date"
            id="date"
            name="tanggal_lahir"
            className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2 date-input"
            value={formValues.tanggal_lahir}
            onChange={handleInputChange}
          />
          {errors.tanggal_lahir && (
            <p className="text-red-500">{errors.tanggal_lahir}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-4/5 p-3 rounded-full bg-red-800 text-white hover:bg-red-900"
        >
          Sign up
        </button>
        <div className="w-4/5 relative">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
        </div>
        <Link
          to={"/login"}
          className="w-4/5 p-3 rounded-full bg-gray-400 text-center text-white hover:bg-red-900"
        >
          Sign in
        </Link>
      </form>
      <div className="items-center py-16 lg:block md:hidden hidden">
        <img src={signup} alt="Sign up" width={500} height={500} />
      </div>
    </div>
  );
};

export default Register;
