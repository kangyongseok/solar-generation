import { getData } from "@/fetch/googleFetch";

async function Section03() {
  const data = await getData();

  return (
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
  );
}

export default Section03;
