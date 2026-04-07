"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { successToast } from "~/utils/toastMessage";

const LoginIndustry = () => {
  const [formData, setFormData] = useState({
    type: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event, data) => {
    const { type } = data;
    event.preventDefault();
    if (type === "assessor") {
      window.open("https://lssc-assessor.vercel.app/", "_blank");
    }
    {
      window.open("https://lssc-trainer.vercel.app/", "_blank");
    }
  };
  return (
    <main className="py-10">
      <section className="container grid h-screen gap-10 lg:grid-cols-2 ">
        <div className="mx-auto flex justify-center flex-col gap-4 lg:w-[70%]">
          <h2 className="flex items-center justify-between text-4xl font-semibold">
            Welcome back 👋
          </h2>
          <h1 className="text-4xl font-bold">Sign in to continue</h1>
          <p className="font-normal">
            Fill in your details to access and manage your account. Unlock a
            world of training opportunities and assessments with just a click!
          </p>

          <form
            onSubmit={(e) => handleSubmit(e, formData)}
            className="space-y-4"
            action=""
          >
            <label className="flex flex-col gap-2" htmlFor="">
              Type
              <select
                name="type"
                value={formData.type}
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3"
                placeholder="12 charectors ID"
                onChange={handleChange}
              >
                <option value="">Select role</option>

                <option value="assessor">Assessor</option>
                <option value="trainer">Trainer</option>
              </select>
            </label>

            <label className="flex flex-col gap-2" htmlFor="">
              User ID
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3"
                placeholder="12 characters ID"
              />
            </label>

            <label className="flex flex-col gap-2" htmlFor="">
              Password
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3"
                placeholder="At least 8 characters"
              />
            </label>
            <p className="text-primary-500 w-full text-right font-normal">
              Forgot Password?
            </p>
            <button
              disabled={!formData?.type}
              className="bg-primary-500 w-full rounded-xl p-3 text-white disabled:opacity-40"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <div className="hidden lg:block">
          <Image
            className="h-full w-full rounded-2xl object-cover"
            src="/img/industry_boy.jpg"
            alt="signin"
            width={600}
            height={1200}
          />
        </div>
      </section>
    </main>
  );
};

export default LoginIndustry;
