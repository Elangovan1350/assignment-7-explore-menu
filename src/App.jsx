import React from "react";

const App = () => {
  return (
    <section id="exploreMenu">
      <div class="max-w-full 2xl:container 2xl:mx-auto space-y-5 py-10">
        <div class="w-[80%] mx-auto font-[poppins] grid grid-cols-1 gap-5">
          <div>
            <h1 class="text-[28px] font-bold leading-[34px] text-[#183b56]">
              Explore Menu
            </h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5 gap-10">
            {/* <!-- menu 1 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-ginger-fried-img.png?updatedAt=1755880293486"
                alt="non veg starter"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Non-Veg Starters
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 1 end here -->
                  <!-- menu 2 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-veg-starters-img.png?updatedAt=1755880302330"
                alt="veg starter"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Veg Starters
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 2 end here -->
                  <!-- menu 3 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-soup-img.png?updatedAt=1755880304635"
                alt="soups"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Soups
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 3 end here -->
                  <!-- menu 4 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-grilled-seafood-img.png?updatedAt=1755880294963"
                alt="Fish & Sea food"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Fish & Sea food
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 4 end here -->

                  <!-- menu 5 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-hyderabadi-biryani-img.png?updatedAt=1755880298902"
                alt="Main Course"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Main Course
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 5 end here -->
                  <!-- menu 6 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-mushroom-noodles-img.png?updatedAt=1755880295115"
                alt="Noodles"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Noodles
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 6 end here -->
                  <!-- menu 7 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-gluten-img.png?updatedAt=1755880303340"
                alt="Salads"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Salads
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 7 end here -->
                  <!-- menu 8 start here --> */}
            <div class="flex flex-col gap-5 border border-[#F6F6F6] p-6 pb-3 rounded-2xl shadow-xl">
              <img
                class="h-[80%] rounded-2xl"
                src="https://ik.imagekit.io/elo1350/em-coffee-bourbon-img.png?updatedAt=1755880300175"
                alt="Desserts"
              />
              <div class="h-20% space-y-2">
                <h2 class="text-[18px] leading-[22px] font-medium text-[#323f4b]">
                  Desserts
                </h2>
                <button class="text-[14px] leading-[21px] text-[#D0B200] flex items-center gap-2">
                  <a
                    href="#"
                    class="hover:underline hover:text-blue-400 transition duration-300"
                  >
                    View All
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D0B200"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- menu 8 end here --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
