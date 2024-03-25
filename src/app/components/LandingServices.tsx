import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import Link from "next/link";

const LandingServices = () => {
  return (
    <main className="bg-primary">
      <section className="container mx-auto p-4 text-white">
        <div className="my-6 space-y-4">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Our Services
          </h2>
          <div className="w-60 border-2 border-[#F0904E] md:w-72"></div>
          <div className="space-y-6 md:flex md:items-center md:justify-between">
            <p className=" font-extralight">
              We provide only the best service to make sure your beloved
              antiquities stays in the most pristine condition.{" "}
              <span className="font-normal italic ">Always. </span>
            </p>
            <Link href="/services">
              <Button className="border-none bg-yellow-500 text-black shadow-lg shadow-amber-600 drop-shadow-md hover:bg-yellow-200 hover:shadow-amber-200 md:h-12 md:w-36 md:text-xl">
                See More
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {" "}
          <Card className="border-[#F0904E] bg-transparent">
            <CardHeader>
              <CardTitle>
                <div className="relative h-96 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1621069016305-442eb83d84f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="object-cover "
                    loading="lazy"
                    quality={65}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-white">Knife restoration</p>
            </CardContent>
          </Card>
          <Card className="border-[#F0904E] bg-transparent">
            <CardHeader>
              <CardTitle>
                <div className="relative h-96 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1576684045086-bac49587e104?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="object-cover "
                    loading="lazy"
                    quality={65}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-white">
                Preservation of dry plate camera
              </p>
            </CardContent>
          </Card>
          <Card className="border-[#F0904E] bg-transparent">
            <CardHeader>
              <CardTitle>
                <div className="relative h-96 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1587953707837-ca55e4760ac3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="object-cover "
                    loading="lazy"
                    quality={65}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-white">
                Restoration of antique pocket watch from 17th century
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator className="bg-stone-700" />
    </main>
  );
};

export default LandingServices;
