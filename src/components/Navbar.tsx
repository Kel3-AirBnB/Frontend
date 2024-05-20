const Navbar = () => {
  return (
    <header className="bg-white border-b py-4">
      <div className="container mx-auto flex justify-between gap-6 items-center px-4">
        <div className="text-2xl font-bold text-red-600">Airbnb</div>

        <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
          <input
            placeholder="e.g. Bali resort"
            className="rounded-full w-full h-14 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200"
            type="text"
            name="query"
            id="query"
          />
          <button
            type="submit"
            className="absolute inline-flex items-center h-10 px-2 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-2 bg-red-500 sm:px-4 sm:text-base sm:font-medium hover:bg-red-600"
          >
            <svg
              className="w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <nav className="space-x-4">
          <button className="flex items-center gap-4 bg-transparent font-semibold py-2 px-4 border border-gray-300 rounded-full hover:shadow-md">
            <span>
              <svg
                fill="#6b7280"
                width="25px"
                height="25px"
                viewBox="0 0 32 32"
                enableBackground="new 0 0 32 32"
                id="Glyph"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z"
                  id="XMLID_287_"
                />
                <path
                  d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z"
                  id="XMLID_289_"
                />
                <path
                  d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z"
                  id="XMLID_291_"
                />
              </svg>
            </span>
            <span className="bg-gray-200 p-1.5 rounded-full">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="#6b7280"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={12}
                  cy={6}
                  r={4}
                  stroke="#6b7280"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                  stroke="gray"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
