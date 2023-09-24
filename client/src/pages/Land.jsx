import React from "react";
import "../components/css/Land.css";
import Logo from "../components/LOGO/Logo.png";
import BLogo from "../components/LOGO/logo-black.png";

const Land = () => {
  return (
    <div className="abc ">
      <div className="bg-white dark:bg-gray-900">
        <header>
          <input
            type="checkbox"
            name="hbr"
            id="hbr"
            className="hbr peer"
            hidden
            aria-hidden="true"
          />
          <nav className="fixed z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
            <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                <div className="w-full items-center flex justify-between lg:w-auto">
                  <a className="relative z-10" href="#" aria-label="logo">
                    <h1 className="text-white text-xl">ENTREPRENEUR CONNECT</h1>
                  </a>
                  <label
                    htmlFor="hbr"
                    className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                    />
                    <div
                      aria-hidden="true"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                    />
                  </label>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Services</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                    <a
                      href="#"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-sky-600/10 dark:focus:before:bg-sky-400/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-white">
                        Sign Up
                      </span>
                    </a>
                    <a
                      href="#"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                        Login
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="bg-white relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900">
          <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
            <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-2xl lg:w-auto lg:text-left xl:text-4xl dark:text-white ">
              Empowering entrepreneurs to connect, collaborate, and thrive in a{" "}
              <br className="lg:block hidden" />{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                dynamic online community.
              </span>
            </h1>
            <div className="lg:flex">
              <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                  Welcome to EntrepreConnect, the premier social media platform
                  designed exclusively for entrepreneurs like you! Join our
                  vibrant community of forward-thinkers, innovators, and
                  visionaries, all driven by a shared passion for business
                  success. Connect with like-minded individuals who understand
                  the unique challenges and triumphs of entrepreneurship.
                </p>
                <span className="block font-semibold text-gray-500 dark:text-gray-400">
                  Unlock a world of possibilities and watch your entrepreneurial
                  dreams flourish. Sign up today and <br /> become a part of a
                  community committed to shaping the future of business.
                  Together, we thrive.
                  <br /> Welcome to EntrepreConnect!
                </span>
                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                  <a
                    aria-label="add to slack"
                    href="#"
                    className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                  >
                    <div className="flex justify-center space-x-4">
                      <i class="fa-brands fa-etsy text-white"></i>

                      <span className="hidden font-medium md:block dark:text-white">
                        EASY TO CONNECT
                      </span>
                    </div>
                  </a>
                  <a
                    aria-label="add to chat"
                    href="#"
                    className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
                  >
                    <div className="flex justify-center space-x-4">
                      <i class="fa-solid fa-people-group text-white"></i>

                      <span className="hidden font-medium md:block dark:text-white">
                        Communities
                      </span>
                    </div>
                  </a>
                  <a
                    aria-label="add to zoom"
                    href="#"
                    className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
                  >
                    <div className="flex justify-center space-x-4">
                      <i class="fa-solid fa-trophy text-white"></i>

                      <span className="hidden font-medium md:block dark:text-white">
                        Exiting Rewards
                      </span>
                    </div>
                  </a>
                </div>
                <div className="dark:text-gray-300">
                  🔥🌟
                  <span>Other Features :</span>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 dark:text-gray-200"
                  >
                    Direct Chat,
                  </a>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 dark:text-gray-200"
                  >
                    &nbsp; Posts
                  </a>
                </div>
              </div>
              <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                <div className="relative w-full">
                  <div
                    aria-hidden="true"
                    className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                  />
                  <img
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                    className="relative w-full fa-spin"
                    alt="wath illustration"
                    loading="lazy"
                    width={320}
                    height={280}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* <img src={Img1} alt="image"  className="w-1/4 ml-9 bg-white"/> */}

        <section>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="p-5 bg-white flex items-center mx-auto   mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/Kb04b8S/3d-casual-life-young-man-pointing-on-contract-removebg-preview-1.png" />
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h1 class="text-black text-2xl title-font font-bold mb-2">
                    Entrepreneurs Platform
                  </h1>
                  <p class="leading-relaxed text-base">
                    Connect with your inspirational Entrepeneurs.
                  </p>

                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    Sign Up Now !
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <br />
      {/* component */}
      <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img src={BLogo} className="mr-5  h-6 sm:h-9" alt="logo" />
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                Empowering entrepreneurs to connect, collaborate and thrive in a
                dynamic online community.
              </p>
              <div className="flex mt-8 space-x-6 text-gray-600">
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillrule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      cliprule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillrule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      cliprule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillrule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      cliprule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Dribbble </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillrule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      cliprule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div classname="hidden lg:flex items-center justify-end col-span-1">
                <button class="bg-blue-500 hover:bg-blue-700 ml-9 text-white font-bold py-2 px-4 rounded-full">
                  LOG &nbsp;IN
                </button>

                <button class="bg-blue-500 mt-3 ml-9 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800">© 2022 Comany Name</p>
        </div>
      </footer>
    </div>
  );
};

export default Land;
