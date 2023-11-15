import { TbSolarPanel2 } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FaSolarPanel } from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";
import RegisterForm from "../components/RegisterForm";

async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="break-keep">
      <header className="absolute">
        <h1 className="flex items-center gap-3 px-5 py-6 text-2xl font-semibold">
          <div className="rounded-full bg-slate-800 p-3 text-white">
            <TbSolarPanel2 />
          </div>
          <span>Solar</span>
        </h1>
      </header>
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-4xl font-semibold leading-normal text-gray-900 md:text-6xl lg:text-7xl">
          {data.section01.title}
        </p>
        <p className="mb-12 text-xl font-normal leading-relaxed text-gray-400">
          {data.section01.subTitle}
        </p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 break-keep text-center text-4xl font-semibold leading-normal text-gray-900 md:text-6xl lg:text-7xl">
          {data.section02.title}
        </p>
        <p className="mb-12 text-xl font-normal leading-relaxed text-gray-400">
          {data.section02.subTitle}
        </p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-center text-xl font-semibold leading-normal text-gray-900 md:text-4xl">
          {data.section03.title}
        </p>
        <p className="mb-16 text-center text-lg font-normal text-gray-400 md:text-xl">
          {data.section03.subTitle}
        </p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-center text-xl font-semibold leading-normal text-gray-900 md:text-4xl">
          {data.section04.title}
        </p>
        <p className="mb-16 text-center text-lg font-normal text-gray-400 md:text-xl">
          {data.section04.subTitle}
        </p>
      </section>
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-4xl font-semibold leading-normal text-gray-900 md:text-6xl lg:text-7xl">
          {data.section05.title}
        </p>
        <div className="mb-20 flex flex-col justify-center gap-3 md:flex-row xl:justify-start">
          <div className="mx-auto mb-5 flex h-20 items-center justify-center rounded-lg bg-gray-200 px-8 text-3xl md:mx-0 md:mb-0">
            <GiReceiveMoney />
          </div>
          <div>
            <p className="mb-2 text-2xl font-semibold text-gray-900">
              {data.section05.content01[0]}
            </p>
            <p className="text-xl font-normal leading-relaxed text-gray-400">
              {data.section05.content01[1]}
            </p>
          </div>
        </div>
        <div className="mb-20 flex flex-col justify-center gap-3 md:flex-row xl:justify-start">
          <div className="mx-auto mb-5 flex h-20 items-center justify-center rounded-lg bg-gray-200 px-8 text-3xl md:mx-0 md:mb-0">
            <FaSolarPanel />
          </div>
          <div>
            <p className="mb-2 text-2xl font-semibold text-gray-900">
              {data.section05.content02[0]}
            </p>
            <p className="text-xl font-normal leading-relaxed text-gray-400">
              {data.section05.content02[1]}
            </p>
          </div>
        </div>
        <div className="mb-20 flex flex-col justify-center gap-3 md:flex-row xl:justify-start">
          <div className="mx-auto mb-5 flex h-20 items-center justify-center rounded-lg bg-gray-200 px-8 text-3xl md:mx-0 md:mb-0">
            <MdEnergySavingsLeaf />
          </div>
          <div>
            <p className="mb-2 text-2xl font-semibold text-gray-900">
              {data.section05.content03[0]}
            </p>
            <p className="text-xl font-normal leading-relaxed text-gray-400">
              {data.section05.content03[1]}
            </p>
          </div>
        </div>
      </section>
      <RegisterForm />
    </div>
  );
}
