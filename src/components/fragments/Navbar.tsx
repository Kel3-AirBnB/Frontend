import { CircleUserRound, Ellipsis, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../fragments/DropdownMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b py-4">
      <div className="container mx-auto flex justify-between gap-6 items-center px-4">
        <Link
          to="/"
          aria-label="homepage"
          title="Booking"
          className="inline-flex items-center bg-transparent"
        >
          <svg
            className="w-8 text-red-700"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            stroke="#b91c1c"
            fill="none"
          >
            <rect x={3} y={1} width={7} height={12} />
            <rect x={3} y={17} width={7} height={6} />
            <rect x={14} y={1} width={7} height={6} />
            <rect x={14} y={11} width={7} height={12} />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-red-700 uppercase">
            {" "}
            Booking
          </span>
        </Link>

        <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
          <input
            placeholder="e.g. Bali resort"
            className="rounded-full w-full h-14 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200"
            type="text"
          />
          <button
            type="submit"
            className="absolute inline-flex items-center h-10 p-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-2 bg-red-700 sm:px-4 sm:text-base sm:font-medium hover:bg-red-600"
            aria-label="Search"
          >
            <Search strokeWidth={1.2} />
          </button>
        </div>
        <nav className="space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center gap-3 bg-transparent font-semibold py-2 px-2 lg:px-3 border border-gray-300 rounded-full hover:shadow-md"
              aria-label="Search"
            >
              <span className="text-gray-500">
                <Ellipsis />
              </span>
              <span className="text-gray-500 rounded-full">
                <CircleUserRound size={32} strokeWidth={0.5} />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 mt-1 -ml-36 py-1 px-0">
              <DropdownMenuItem className="px-4 py-3 text-md font-semibold">
                <Link to="/register">Daftar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-4 py-3 text-md font-normal">
                Masuk
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border border-gray-100" />
              <DropdownMenuItem className="px-4 py-3 text-md font-normal">
                Jadikan rumah Anda Airbnb
              </DropdownMenuItem>
              <DropdownMenuItem className="px-4 py-3 text-md font-normal">
                Pusat bantuan
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
