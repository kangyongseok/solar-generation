import { GiReceiveMoney } from "react-icons/gi";
import { FaSolarPanel } from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { getData } from "@/fetch/googleFetch";

async function Section05() {
  const data = await getData();

  return (
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
    </section>
  );
}

export default Section05;
