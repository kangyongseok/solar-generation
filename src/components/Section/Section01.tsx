import { getData } from "@/fetch/googleFetch";

async function Section01() {
  const data = await getData();
  return (
    <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
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
  );
}

export default Section01;
