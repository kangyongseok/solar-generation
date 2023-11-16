import { TbSolarPanel2 } from "react-icons/tb";
import RegisterForm from "../components/RegisterForm";

import {
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
} from "@/components/Section";

export default async function Home() {
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
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <RegisterForm />
    </div>
  );
}
