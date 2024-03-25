import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  return (
    <main className="mt-[80px] bg-primary md:mt-[80px]">
      <section className="container mx-auto p-4 py-8 text-white">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            Our Services
          </h2>
          <div className="w-60 border-2 border-[#F0904E] md:w-72"></div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2">
          <div>
            <h4 className="font-sans text-2xl font-semibold ">Restoration</h4>
            <Card className="flex md:flex-row flex-col items-center border-[#F0904E] bg-transparent text-white">
              <CardHeader>
                <CardTitle>
                  <div className="relative h-[500px] w-[300px] overflow-hidden rounded-lg md:flex md:justify-center">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1672287578309-2a2115000688?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={65}
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="my-10 text-2xl font-semibold">
                  We provide variety of restoration services such as:
                </h4>
                <ul className="space-y-2 text-xs font-light">
                  <li>
                    <p className="font-bold">
                      Paintings and Canvas Restoration:
                    </p>
                    <p>
                      We repair tears and discoloration, unveiling the true
                      beauty of your artwork.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold">Ceramic & Pottery:</p>
                    <p>
                      Our artisans seamlessly repair chips and cracks,
                      preserving your treasures.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold">Metalwork Restoration:</p>
                    <p>
                      Corrosion removal and structural repair bring metal
                      artifacts back to life.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <h4 className="font-sans text-2xl font-semibold ">Preservation</h4>
            <Card className="flex md:flex-row flex-col items-center border-[#F0904E] bg-transparent text-white">
              <CardHeader>
                <CardTitle>
                  <div className="relative h-[500px] w-[300px] overflow-hidden rounded-lg md:flex md:justify-center">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1672287579498-08cd90130b0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={65}
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="my-10 text-2xl font-semibold">
                  We also provide variety of preservation services such as:
                </h4>
                <ul className="space-y-2 text-xs font-light">
                  <li>
                    <p className="font-bold">
                      Sculpture Conservation
                    </p>
                    <p>
                    From marble to bronze, we restore structural integrity and aesthetic value.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold">Document & Paper Conservation:</p>
                    <p>
                    We stabilize and repair historical documents for future generations.
                    </p>
                  </li>
                  
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <Carousel className="my-10 w-full">
          <CarouselContent>
            <CarouselItem>
              <Card className="grid grid-cols-1 items-center border-none bg-stone-500 text-white md:grid-cols-2">
                <CardHeader>
                  <CardTitle>
                    <div className="relative ml-3 flex h-72 w-72 justify-center overflow-hidden rounded-full md:ml-32 md:h-96 md:w-96">
                      <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sarah W."
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={65}
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <p className="text-md font-sans font-light md:text-lg">
                      "Absolutely thrilled with the restoration work done by
                      CUKER! They brought my family heirloom back to life with
                      such precision and care. The attention to detail was
                      remarkable, and the final result exceeded all
                      expectations. Highly recommend their services to anyone
                      looking to preserve their cherished antiquities."{" "}
                    </p>
                    <h5 className="text-xl font-semibold">Sarah W.</h5>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="grid grid-cols-1 items-center border-none bg-stone-500 text-white md:grid-cols-2">
                <CardHeader>
                  <CardTitle>
                    <div className="relative ml-3 flex h-72 w-72 justify-center overflow-hidden rounded-full md:ml-32 md:h-96 md:w-96">
                      <Image
                        src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Michael H."
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={65}
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <p className="text-md font-sans font-light md:text-lg">
                      "I cannot express how grateful I am for the incredible
                      restoration work done by CUKER. They transformed my
                      damaged antique vase into a breathtaking masterpiece.
                      Their expertise and dedication truly shine through in
                      every aspect of their craftsmanship. Trustworthy,
                      professional, and passionate about their work - I wouldn't
                      hesitate to recommend them to anyone seeking top-notch
                      restoration services."{" "}
                    </p>
                    <h5 className="text-xl font-semibold">Michael H.</h5>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="grid grid-cols-1 items-center border-none bg-stone-500 text-white md:grid-cols-2">
                <CardHeader>
                  <CardTitle>
                    <div className="relative ml-3 flex h-72 w-72 justify-center overflow-hidden rounded-full md:ml-32 md:h-96 md:w-96">
                      <Image
                        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Emily L."
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={65}
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <p className="text-md font-sans font-light md:text-lg">
                      "Working with CUKER was an absolute pleasure from start to
                      finish. Their dedication to preserving the integrity of my
                      family's cherished artifacts was truly remarkable. Not
                      only did they exceed my expectations in terms of quality
                      and craftsmanship, but their professionalism and
                      communication throughout the process were outstanding. I
                      couldn't be happier with the results, and I wholeheartedly
                      recommend Ancient Artisans to anyone in need of expert
                      restoration services."
                    </p>
                    <h5 className="text-xl font-semibold">Emily L.</h5>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="grid grid-cols-1 items-center border-none bg-stone-500 text-white md:grid-cols-2">
                <CardHeader>
                  <CardTitle>
                    <div className="relative ml-3 flex h-72 w-72 justify-center overflow-hidden rounded-full md:ml-32 md:h-96 md:w-96">
                      <Image
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="David R."
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={65}
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <p className="text-md font-sans font-light md:text-lg">
                      "I had the privilege of entrusting CUKER with the
                      restoration of a valuable antique sculpture, and I must
                      say, the results were nothing short of miraculous. The
                      level of skill and attention to detail displayed by their
                      team was truly impressive. They not only restored the
                      sculpture to its former glory but also took the time to
                      educate me about its historical significance. It's clear
                      that they approach their work with passion and reverence
                      for the artifacts they handle. I am immensely grateful for
                      their expertise and highly recommend their services to
                      anyone in need of restoration."
                    </p>
                    <h5 className="text-xl font-semibold">David R.</h5>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default Services;
