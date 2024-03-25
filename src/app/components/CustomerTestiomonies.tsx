import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CustomerTestiomonies = () => {
  return (
    <main className="bg-primary">
      <section className="container mx-auto flex justify-center p-4">
        {" "}
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Card className="grid grid-cols-1 md:grid-cols-2 items-center border-none bg-stone-500 text-white">
                <CardHeader>
                  <CardTitle>
                    <div className="relative md:ml-32 ml-3 flex h-72 w-72 md:h-96 md:w-96 justify-center overflow-hidden rounded-full">
                      <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sarah W."
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <p className="font-sans text-md md:text-lg font-light">
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
              <Card className="grid grid-cols-1 md:grid-cols-2 items-center border-none bg-stone-500 text-white">
                <CardHeader>
                  <CardTitle>
                    <div className="relative md:ml-32 ml-3 flex h-72 w-72 md:h-96 md:w-96 justify-center overflow-hidden rounded-full">
                      <Image
                        src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Michael H."
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <p className="font-sans text-md md:text-lg font-light">
                      "I cannot express how grateful I am for the incredible
                      restoration work done by CUKER. They
                      transformed my damaged antique vase into a breathtaking
                      masterpiece. Their expertise and dedication truly shine
                      through in every aspect of their craftsmanship.
                      Trustworthy, professional, and passionate about their work
                      - I wouldn't hesitate to recommend them to anyone seeking
                      top-notch restoration services."{" "}
                    </p>
                    <h5 className="text-xl font-semibold">Michael H.</h5>
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

export default CustomerTestiomonies;
