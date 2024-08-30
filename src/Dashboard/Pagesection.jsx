import React from "react";
import ButtonGroup from "./Groupbutton";

const Pagesection = () => {
  return (
    <>
      <div class="bg-pink-100 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <ButtonGroup />
            </p>
          </div>
          <div className="flex lg:flex-1  ">
            <a className="-m-1.5 p-1.5">
              <img
                className="h-full w-full "
                src="https://hellopm.co/wp-content/uploads/2023/04/hero_image_hellopm-min.png"
                alt="Your Company"
              />
            </a>
          </div>

          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div class="relative pl-16">
                <dt class="text-base font-bold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-white bg-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  31 Cohorts
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Running & Completed in the last 3 years.
                </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-bold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-white bg-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  1000+ Alumni
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Working in product roles at top tech companies.
                </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-bold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-white bg-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  15 LPA & 65 LPA
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Average & Highest Salary respectively.
                </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-bold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-white bg-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </div>
                  4 Months
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  {" "}
                  Of live training, with option to fast track.
                </dd>
              </div>
            </dl>
          </div>

          {/* para card */}

          <div className="text-base md:text-lg lg:text-xl xl:text-2xl pt-20 flex justify-center items-center font-serif font- pb-10">
            Extensive Career Support
          </div>

          <div className="px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Card 1  */}
              <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <dt className="text-lg font-bold leading-7 text-pink-600 dark:text-pink-400">
                  <div className="absolute left-0 top-0 flex h-8 w-8  items-center justify-center rounded-lg bg-pink-600 text-white">
                    {/* Icon for Resume Optimization  */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                      />
                    </svg>
                  </div>
                  Resume Optimization
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  1:1 Expert resume review and optimization. Showcase the right
                  transferrable skills.
                </dd>
              </div>

              {/* Card 2  */}
              <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <dt className="text-lg font-bold leading-7 text-pink-600 dark:text-pink-400">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-600 text-white">
                    {/* Icon for Build Your Portfolio  */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  Build Your Portfolio
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  Get hands-on assignments and expert help to create a
                  portfolio. Build your own product.
                </dd>
              </div>

              {/* Card 3  */}
              <div className=" relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <dt className="text-lg font-bold leading-7 text-pink-600 dark:text-pink-400">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-600 text-white">
                    {/* Icon for Extensive Interview Prep  */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  Extensive Interview Prep
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  Structured preparation, practice questions, expert guidance,
                  and mock interviews.
                </dd>
              </div>

              {/* Card 4  */}
              <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <dt className="text-lg font-bold leading-7 text-pink-600 dark:text-pink-400">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-600 text-white">
                    {/* Icon for Job Board and Referrals  */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  Job Board and Referrals
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  Leveraging the alumni, hiring partners, and network for job
                  opportunities.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagesection;
