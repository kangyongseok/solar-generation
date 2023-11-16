import solar01 from "../../../public/images/solar01.jpeg";
import solar02 from "../../../public/images/solar02.jpeg";
import solar03 from "../../../public/images/solar03.jpeg";
import solar04 from "../../../public/images/solar04.jpeg";
import solar05 from "../../../public/images/solar05.jpeg";
import Image from "next/image";
import { getData } from "@/fetch/googleFetch";

async function Section02() {
  const data = await getData();

  return (
    <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-6 break-keep text-center text-4xl font-semibold leading-normal text-gray-900 md:text-6xl lg:text-7xl">
        {data.section02.title}
      </p>
      <div className="mb-12 text-xl font-normal leading-relaxed text-gray-400">
        {data.section02.subTitle.map((t: string) => (
          <p
            key={t}
            className="text-xl font-normal leading-relaxed text-gray-400"
          >
            {t}
          </p>
        ))}
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-50 md:max-w-5xl">
        <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          <Image
            src={solar01}
            alt=""
            className="col-span-2 row-span-2 aspect-square h-full w-full rounded shadow-sm dark:bg-gray-500 md:col-start-3 md:row-start-1"
          />
          <Image
            alt=""
            className="aspect-square h-full w-full rounded shadow-sm dark:bg-gray-500"
            src={solar02}
          />
          <Image
            alt=""
            className="aspect-square h-full w-full rounded shadow-sm dark:bg-gray-500"
            src={solar03}
          />
          <Image
            alt=""
            className="aspect-square h-full w-full rounded shadow-sm dark:bg-gray-500"
            src={solar04}
          />
          <Image
            alt=""
            className="aspect-square h-full w-full rounded shadow-sm dark:bg-gray-500"
            src={solar05}
          />
        </div>
      </div>
    </section>
  );
}

export default Section02;
