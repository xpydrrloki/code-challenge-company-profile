import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponseData, Result } from "@/types/randomuser.type";

import { appConfig } from "@/utils/config";
import Image from "next/image";

const Teams: React.FC = async () => {
  const { baseUrl } = appConfig;
  const response = await fetch(baseUrl + `/api?results=2`, {
    next: { revalidate: 10 },
  });
  const { results } = await response.json();

  const response2 = await fetch(baseUrl + `/api?results=6`, {
    next: { revalidate: 10 },
  });
  const data2: ResponseData = await response2.json();
  const data: Result[] = results;
  // console.log("=========================", data);

  return (
    <main className="mt-[80px] bg-primary md:mt-[80px]">
      <section className="container mx-auto p-4 py-8 text-white">
        <div className="space-y-6">
          <h2 className="font-serif text-4xl font-semibold">Meet Our Team</h2>
          <div className="w-60 border-2 border-[#F0904E] md:w-72"></div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="grid grid-cols-2 justify-center  gap-4">
            {data.map((data, index) => {
              return (
                <Card
                  key={index}
                  className="items-center border-none bg-stone-500 text-white "
                >
                  <CardHeader>
                    <CardTitle>
                      <div className="relative flex h-32 w-32 mx-auto justify-center overflow-hidden rounded-full  md:h-48 md:w-48">
                        <Image
                          src={data.picture.large}
                          alt=""
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-lg font-semibold">
                        {data.name.first} {data.name.last}
                      </p>
                      <p className="font-bold text-[#F0904E]">FOUNDER</p>
                      <p className="text-[10px] font-extralight italic md:text-lg md:font-light">
                        {data.email}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {data2.results.map((data, index) => {
              return (
                <Card
                  key={index}
                  className="items-center border-none bg-stone-500 text-white "
                >
                  <CardHeader>
                    <CardTitle>
                      <div className="relative flex h-32 w-32 mx-auto justify-center overflow-hidden rounded-full  md:h-48 md:w-48">
                        <Image
                          src={data.picture.large}
                          alt=""
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="container">
                    <div className="text-center">
                      <p className="text-lg font-semibold">
                        {data.name.first} {data.name.last}
                      </p>
                      <p className="font-bold text-[#F0904E]">CRAFTSMEN</p>
                      <p className="md:text-md text-[10px] font-extralight italic md:font-light">
                        {data.email}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Teams;
