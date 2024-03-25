// "use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import keris from "../../../public/KerisBawah.png";
import logo from "../../../public/LogoOnly.png";
import LOGO_COMPLETE from "../../../public/CuciKeris.png"
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  //   const router = useRouter();
  return (
    <main className=" bg-primary">
      <section className="container mx-auto px-4 py-8 text-white ">
        <div
          className="hidden grid-cols-1 md:grid md:grid-cols-2 "
          id="desktop"
        >
          <div id="text" className="p-4">
            <div className="relative flex h-36 w-80 justify-center">
              <Image
                src={LOGO_COMPLETE}
                fill
                alt="Company-logo"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <h1 className="my-10  font-semibold md:text-6xl">
              Preserving History & Restoring Memories
            </h1>
            <p className="my-8 text-lg font-light">
              At Cuker, we are more than just a shop - we are custodians of
              history, dedicated to the meticulous preservation and restoration
              of your beloved antiquities.
            </p>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-none bg-yellow-500 text-black shadow-lg shadow-amber-600 drop-shadow-md hover:bg-yellow-200 hover:shadow-amber-200 md:h-16 md:w-64 md:text-2xl"
              >
                Get Started
              </Button>
            </Link>
          </div>
          <div
            id="image"
            className="relative mx-auto h-72 w-72 md:h-[560px] md:w-96 "
          >
            <Image
              src={keris}
              alt="keris"
              fill
              className="object-contain shadow-amber-400 drop-shadow-2xl  "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:hidden" id="mobile">
          <div id="text" className="p-4">
            <h1 className="my-8 text-4xl font-semibold ">
              Preserving History & Restoring Memories
            </h1>
            <p className="text-lg my-4 font-extralight">
              At Cuker, we are more than just a shop - we are custodians of
              history, dedicated to the meticulous preservation and restoration
              of your beloved antiquities.
            </p>
            <Link href="/services">
              <Button
                variant="default"
                className="mt-2 bg-yellow-500 text-black shadow-lg shadow-amber-600 drop-shadow-md h-12 w-36 hover:bg-yellow-200 hover:shadow-amber-200 text-xl"
                //   onClick={()=>router.push("/about")}
                type="button"
              >
                Get Started
              </Button>
            </Link>
              <div
                id="image"
                className="relative mx-auto h-72 w-72 md:h-96 md:w-96"
              >
                <Image
                  src={LOGO_COMPLETE}
                  alt="Company-logo"
                  fill
                  className="object-cover shadow-amber-400 drop-shadow-2xl my-6"
                />
              </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
