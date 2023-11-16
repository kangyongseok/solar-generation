"use client";

import { type FormEvent } from "react";

function RegisterForm() {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
      method: "POST",
      body: JSON.stringify({
        name: target.username.value,
        placeNumber: target.placeNumber.value,
        phone: target.phone.value,
      }),
    }).then(() => {});
  };

  return (
    <section className="flex min-h-screen items-center">
      <div className="m-5 w-full rounded-lg bg-orange-500 p-5 md:flex md:items-center md:gap-10">
        <div>
          <p className="mb-6 text-center text-4xl font-semibold leading-normal text-white md:text-5xl lg:text-6xl">
            지금 신청해보세요!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-lg bg-slate-50 p-5"
        >
          <div className="mb-6">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium"
            >
              이름
            </label>
            <input
              type="text"
              id="username"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="홍길동"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="placeNumber"
              className="mb-2 block text-sm font-medium"
            >
              본인소유 건물 또는 토지지번
            </label>
            <input
              type="text"
              id="placeNumber"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              required
              placeholder="토지지번"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="mb-2 block text-sm font-medium">
              연락처
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              required
              placeholder="010-0000-0000"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            제출하기
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
