import React from "react";

const CompanyOverview = () => {
  return (
    <main className="bg-stone-500">
      <section className="container mx-auto px-4 text-white flex justify-center">
        <div className=" p-4 py-8 md:w-[1100px]">
          <h4 className="text-center text-xl md:text-3xl text-yellow-500 font-sans drop-shadow-2xl">
            From a team of passionate historians and skilled craftsmen, we're
            devoted to preserving <span className="font-bold">YOUR</span>{" "}
            treasures that will last for generations to come.
          </h4>
        </div>
      </section>
    </main>
  );
};

export default CompanyOverview;
