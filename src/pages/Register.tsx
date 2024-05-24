import { Link } from "react-router-dom";
import signup from "../assets/sign-up.png";
import { useState, ChangeEvent, FormEvent } from "react";
import { registerUser } from "../utils/apis/register/api";
import { registerSchema, RegisterType } from "../utils/apis/register/types";

const Register = () => {
  const [formValues, setFormValues] = useState<RegisterType>({
    nama: "",
    email: "",
    password: "",
    repeat_password: "",
    tanggal_lahir: "",
    foto: null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormValues({
      ...formValues,
      foto: file,
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

    if (formValues.foto) {
      formData.append("foto", formValues.foto);
    }

    try {
      const data = await registerUser(formData);
      console.log("Registration successful:", data);
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
          <input
            type="text"
            id="name"
            name="nama"
            className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2"
            value={formValues.nama}
            onChange={handleInputChange}
          />
          {errors.nama && <p className="text-red-500">{errors.nama}</p>}
        </div>
        <div className="w-4/5">
          <label htmlFor="email">Email Address</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2"
            value={formValues.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="w-4/5">
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2"
            value={formValues.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="w-4/5">
          <label htmlFor="repeat">Repeat Password</label> <br />
          <input
            type="password"
            id="repeat"
            name="repeat_password"
            className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2"
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
        <div className="w-4/5">
          <label htmlFor="profilepicture">Profile Picture</label> <br />
          <input
            type="file"
            id="profilepicture"
            name="profilepicture"
            className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2"
            onChange={handleFileChange}
          />
          {errors.foto && <p className="text-red-500">{errors.foto}</p>}
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
