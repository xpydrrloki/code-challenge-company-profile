import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <main className="mt-[80px] bg-primary md:mt-[80px]">
      <section className="container mx-auto p-4 py-8 text-white">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            About CUKER
          </h2>
          <div className="w-60 border-2 border-[#F0904E] md:w-72"></div>
          <p>
            Established by a team of passionate historians and skilled
            craftsmen, CUKER was born from a shared love for the beauty and
            significance of ancient artifacts. With a combined experience
            spanning decades, our artisans possess the expertise and
            craftsmanship necessary to breathe new life into the relics of the
            past.
          </p>

          <p>
            United by our reverence for the past and a commitment to excellence,
            we set out to create a haven where the art of restoration could
            thrive. Each member of our team brings a unique set of skills and
            expertise to the table, combining traditional techniques with modern
            innovations to achieve unparalleled results.
          </p>
        </div>

        <div
          className="mt-16 hidden items-center gap-4 md:grid md:grid-cols-2"
          id="desktop"
        >
          <div className="space-y-10">
            <p className="font-semibold">
              At CUKER, every restoration project is approached with the utmost
              care and respect. We understand the unique stories that each
              artifact holds and take great pride in our ability to uncover and
              preserve their secrets. From delicate ceramics to grand
              sculptures, we treat each piece as if it were our own, employing
              traditional methods alongside modern innovations to achieve
              unparalleled results.
            </p>

            <p className="font-light">
              Driven by a deep sense of respect for the artisans and cultures of
              antiquity, we approach every restoration project with the utmost
              care and attention to detail. From the smallest ceramic fragment
              to monumental sculptures, we treat each artifact as a precious
              link to our shared human heritage.
            </p>
            <p className="font-light">
              As stewards of history, we believe in the power of preservation to
              inspire and educate future generations. Through our work at
              Ancient Artisans, we aim not only to restore artifacts but to
              breathe new life into the stories they tell - ensuring that the
              legacy of the past continues to resonate in the present and shape
              the future.
            </p>
            <Link href="/teams" className="">
              <Button className="md:text-md mt-10 border-none bg-yellow-500 text-black shadow-lg shadow-amber-600 drop-shadow-md hover:bg-yellow-200 hover:shadow-amber-200 md:h-12 md:w-36">
                Meet Our Team
              </Button>
            </Link>
          </div>
          <div className="relative h-[800px] w-[480px] overflow-hidden p-4 rounded-lg border border-[#F0904E] mx-auto">
            {" "}
            <Image
              src="https://plus.unsplash.com/premium_photo-1672287578647-0f85cd8aa7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1  gap-2 md:hidden" id="mobile">
          <div className="relative h-[240px] w-[360px] overflow-hidden p-2 rounded-lg border border-[#F0904E]">
            {" "}
            <Image
              src="https://plus.unsplash.com/premium_photo-1672287578647-0f85cd8aa7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-10">
            <p className="mt-8 font-semibold">
              At CUKER, every restoration project is approached with the utmost
              care and respect. We understand the unique stories that each
              artifact holds and take great pride in our ability to uncover and
              preserve their secrets. From delicate ceramics to grand
              sculptures, we treat each piece as if it were our own, employing
              traditional methods alongside modern innovations to achieve
              unparalleled results.
            </p>

            <p className="font-light">
              Driven by a deep sense of respect for the artisans and cultures of
              antiquity, we approach every restoration project with the utmost
              care and attention to detail. From the smallest ceramic fragment
              to monumental sculptures, we treat each artifact as a precious
              link to our shared human heritage.
            </p>
            <p className="font-light">
              As stewards of history, we believe in the power of preservation to
              inspire and educate future generations. Through our work at
              Ancient Artisans, we aim not only to restore artifacts but to
              breathe new life into the stories they tell - ensuring that the
              legacy of the past continues to resonate in the present and shape
              the future.
            </p>
            <Link href="/teams" className="">
              <Button className="md:text-md mt-10 border-none bg-yellow-500 text-black shadow-lg shadow-amber-600 drop-shadow-md hover:bg-yellow-200 hover:shadow-amber-200 md:h-12 md:w-36">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
};

export default About;
