import { TbSolarPanel2 } from "react-icons/tb";
// import { GiReceiveMoney } from "react-icons/gi";
// import { FaSolarPanel } from "react-icons/fa";
// import { MdEnergySavingsLeaf } from "react-icons/md";
import RegisterForm from "../components/RegisterForm";
// import solar01 from "../../public/images/solar01.jpeg";
// import solar02 from "../../public/images/solar02.jpeg";
// import solar03 from "../../public/images/solar03.jpeg";
// import solar04 from "../../public/images/solar04.jpeg";
// import solar05 from "../../public/images/solar05.jpeg";
// import Image from "next/image";

// async function getData() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
//     next: { revalidate: 60 },
//   });
//   const data = await response.json();
//   return data;
// }

export default async function Home() {
  // const data = await getData();

  return (
    <div className="break-keep">
      <header className="fixed">
        <h1 className="flex items-center gap-3 px-5 py-6 text-2xl font-semibold">
          <div className="rounded-full bg-orange-600 p-3 text-white">
            <TbSolarPanel2 />
          </div>
          <span className="text-orange-600">Solar</span>
        </h1>
      </header>
      {/* <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-4xl font-semibold leading-normal text-gray-900 md:text-6xl lg:text-7xl">
          {data.section01.title}
        </p>
        {data.section01.subTitle.map((t: string) => (
          <p
            className="text-xl font-normal leading-relaxed text-gray-400"
            key={t}
          >
            {t}
          </p>
        ))}
      </section>
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
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        {data.section03.title.map((t: string) => (
          <p
            key={t}
            className="text-center text-xl font-semibold leading-normal text-gray-900 md:text-4xl"
          >
            {t}
          </p>
        ))}
        <br />
        {data.section03.subTitle.map((t: string) => (
          <p
            key={t}
            className="text-center text-lg font-normal text-gray-400 md:text-xl"
          >
            {t}
          </p>
        ))}
      </section>
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-center text-xl font-semibold leading-normal text-gray-900 md:text-4xl">
          {data.section04.title}
        </p>
        <div className="mb-16 text-center text-lg font-normal text-gray-400 md:text-xl">
          {data.section04.subTitle.map((t: string) => (
            <p
              key={t}
              className="text-center text-lg font-normal text-gray-400 md:text-xl"
            >
              {t}
            </p>
          ))}
        </div>
      </section>
      <section className="m-4 h-screen md:m-8">
        <div className="container mx-auto my-6 space-y-2 p-4 text-center">
          <h2 className="mb-6 text-4xl font-semibold leading-normal text-gray-900 md:text-6xl lg:text-7xl">
            {data.section05.title}
          </h2>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <div className="mx-auto mb-5 flex h-20 items-center justify-center rounded-lg bg-gray-200 px-8 text-3xl md:mx-0 md:mb-0">
              <GiReceiveMoney />
            </div>
            <h3 className="my-3 text-3xl font-semibold">
              {data.section05.content01[0]}
            </h3>
            <div className="space-y-1 text-gray-400">
              {data.section05.content01[1]}
            </div>
            <div className="space-y-1 text-gray-400">
              {data.section05.content01[2]}
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center">
            <div className="mx-auto mb-5 flex h-20 items-center justify-center rounded-lg bg-gray-200 px-8 text-3xl md:mx-0 md:mb-0">
              <FaSolarPanel />
            </div>
            <h3 className="my-3 text-center text-3xl font-semibold">
              {data.section05.content02[0]}
            </h3>
            <div className="space-y-1 text-gray-400">
              {data.section05.content02[1]}
            </div>
            <div className="space-y-1 text-gray-400">
              {data.section05.content02[2]}
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="mx-auto mb-5 flex h-20 items-center justify-center rounded-lg bg-gray-200 px-8 text-3xl md:mx-0 md:mb-0">
              <MdEnergySavingsLeaf />
            </div>
            <h3 className="my-3 text-3xl font-semibold">
              {data.section05.content03[0]}
            </h3>
            <div className="space-y-1 text-gray-400">
              {data.section05.content03[1]}
            </div>
            <div className="space-y-1 text-gray-400">
              {data.section05.content03[2]}
            </div>
          </div>
        </div>
      </section> */}
      <RegisterForm />
    </div>
  );
}
