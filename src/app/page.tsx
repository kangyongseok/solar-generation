import { TbSolarPanel2 } from "react-icons/tb";
import RegisterForm from "../components/RegisterForm";

async function getData() {
  const response = await fetch(`${process.env.PUBLIC_URL}/api`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <header>
        <h1 className="flex items-center gap-3 px-5 py-6 text-2xl font-semibold">
          <div className="rounded-full bg-slate-800 p-3 text-white">
            <TbSolarPanel2 />
          </div>
          <span>Solar</span>
        </h1>
      </header>
      {data.map(({ title, subTitle }: { title: string; subTitle: string }) => (
        <section key={title} className="h-screen break-keep pt-32 text-center">
          <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-8xl">
            {title}
            <br />
            <span className="text-sky-500">{subTitle}</span>
          </h1>
        </section>
      ))}
      <RegisterForm />
    </div>
  );
}
