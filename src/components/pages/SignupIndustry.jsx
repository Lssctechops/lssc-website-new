"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignupIndustry = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/auth/success");
  };

  return (
    <main className="py-10">
      <section className="container grid h-screen gap-10 lg:grid-cols-2 ">
        <div className="mx-auto flex justify-center flex-col gap-4 lg:w-[70%]">
          <h2 className="flex items-center justify-between text-4xl font-semibold">
            Welcome 👋
          </h2>
          <h1 className="text-4xl font-bold">
            Industry Registration – Let the Journey Begin!
          </h1>
          <p className="font-normal">
            Unlock a world of training opportunities & assessments with a single
            click! Please login in to your account.
          </p>

          <form className="space-y-4 pb-5" action="">
            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Name of Company
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="XYZ"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Category of Enterprise
              <select
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="12 charectors ID"
              >
                <option>Micro</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Primary Segment
              <select
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="12 charectors ID"
              >
                <option>Leather Tanning and Processing</option>
                <option>Leather Footwear Manufacturing</option>
                <option>Non-Leather Footwear Manufacturing</option>
                <option>
                  Leather Goods Manufacturing-(Bag/belt/glove/accessories/hard
                  goods)
                </option>
                <option value="">Leather Garment Manufacturing</option>
                <option value="">Saddlery Manufacturing</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Company Age
              <select
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="12 charectors ID"
              >
                <option>0 - 2 Years</option>
                <option>3 - 5 Years</option>
                <option>6 - 10 Years</option>
                <option>11 - 15 Years</option>
                <option>15 - 30 Years</option>
                <option>31 - 40 Years</option>
                <option>41+ Years</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Total Workforce
              <select
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="12 charectors ID"
              >
                <option>Under 50 </option>
                <option>51 - 100</option>
                <option>101 - 200</option>
                <option>201 - 500 </option>
                <option>501 - 2000</option>
                <option>3000 above</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Contact Person
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="12 characters ID"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Designation
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="At least 8 characters"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Email
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="At least 8 characters"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold" htmlFor="">
              Mobile Number
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="At least 8 characters"
              />
            </label>

            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/auth/success");
              }}
              className="bg-primary-500 w-full rounded-xl p-3 text-white"
              type="submit"
            >
              Register
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

export default SignupIndustry;
