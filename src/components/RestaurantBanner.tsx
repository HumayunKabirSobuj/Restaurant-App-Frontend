import Image from "next/image";

export default function RestaurantBanner() {
  return (
    <div className="relative min-h-screen bg-red-700 overflow-hidden">
      {/* Background curved elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 sm:top-20 -left-16 sm:-left-32 w-48 h-48 sm:w-96 sm:h-96 bg-red-800 rounded-full opacity-60"></div>
        <div className="absolute bottom-0 -right-10 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 bg-red-600 rounded-full opacity-40"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-0 ">
        <h1 className="text-white text-lg sm:text-xl font-bold tracking-wider flex-1">
          RESTAURANT
        </h1>
        <div className="relative w-full sm:w-auto  flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full  px-4 py-2 sm:py-3 pl-10 sm:pl-12 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white bg-white text-sm sm:text-base  "
          />
          <svg
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              BREAKFAST
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0">
              Breakfast, often referred to as the &apos;most important meal of
              the day&apos;, provides essential nutrients to kick start our day.
              It includes a variety of foods, like fruits, cereals, dairy
              products, and proteins, that contribute to a balanced diet.
            </p>

            {/* Food Items Row */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                <Image
                  src="/breakfast-hero.png"
                  alt="Waffles with berries"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                <Image
                  src="/breakfast-hero.png"
                  alt="Pancakes with fruit"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                <Image
                  src="/breakfast-hero.png"
                  alt="French toast"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden ">
                <Image
                  src="/breakfast-hero.png"
                  alt="Breakfast sandwich"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Line */}
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-white mx-auto lg:mx-0"></div>
          </div>

          {/* Right Content - Large Food Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ">
              <Image
                src="/breakfast-hero.png"
                alt="Delicious waffles with fresh berries and cream"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
