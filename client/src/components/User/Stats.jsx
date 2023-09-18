import React from "react";

const Stats = () => {


  return (
    <div>
      <section className="text-gray-800 body-font">
        <div className="container px-2 py-2 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-white">
                Statistic
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  2.7K
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">Followers</p>
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  Coins
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">
                  Subscribes
                </p>
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  35
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">
                  Emails Used
                </p>
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  4
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">
                  Post
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>

    </div>
  );
};

export default Stats;
