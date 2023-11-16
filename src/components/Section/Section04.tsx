import { getData } from "@/fetch/googleFetch";

async function Section04() {
  const data = await getData();

  return (
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
  );
}

export default Section04;
