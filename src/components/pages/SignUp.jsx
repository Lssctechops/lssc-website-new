"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/auth/success");
  };
  return (
    <main>
      <section className="container grid gap-10 lg:grid-cols-2">
        <div className="mx-auto py-20 flex flex-col gap-4 lg:w-[70%]">
          <h2 className="flex items-center justify-between text-4xl font-semibold">
            Welcome 👋
            <Link
              href="/auth/industry/signup"
              className="rounded-lg bg-gradient-to-r from-[#7B0C0A] to-[#420705] text-white px-3 py-2 text-lg font-normal"
            >
              Industry Registration →
            </Link>
          </h2>
          <h1 className="text-4xl font-bold">
            <span className="text-[#5F0A08] "> User Registration</span> <br />{" "}
            Let the Journey Begin!
          </h1>
          <p className="font-normal">
            Unlock a world of training opportunities & assessments with a single
            click! Please login in to your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" action="">
            <label className="flex flex-col gap-2 font-semibold">
              Name
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="Enter your name"
              />
            </label>
            <label className="flex flex-col gap-2 font-semibold">
              Email
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="Example@gmail.com"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold">
              Mobile no
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="+91 7909****"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold">
              Password
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3 font-normal"
                placeholder="At least 8 characters"
              />
            </label>
            <p className="text-primary-500 w-full text-right font-normal">
              Forgot Password?
            </p>
            <button
              className="bg-primary-500 w-full rounded-xl p-3 text-white"
              type="submit"
            >
              Signup
            </button>
          </form>

          {/* <p className="flex w-full items-center justify-center gap-4 text-gray-400">
            <hr className="w-full"></hr>Or <hr className="w-full"></hr>
          </p> */}

          {/* <div className="my-4 space-y-4">
            <button className="flex w-full items-center justify-center gap-4 rounded-lg bg-[#f7fbff] p-3">
              <Image
                className="h-6 w-6"
                src="/img/Google.png"
                alt="google"
                width={100}
                height={100}
              />
              Sign in with Google
            </button>
            <button className="flex w-full items-center justify-center gap-4 rounded-lg bg-[#f7fbff] p-3">
              <Image
                className="h-6 w-6"
                src="/img/Facebook.png"
                alt="google"
                width={100}
                height={100}
              />
              Sign in with Facebook
            </button>
          </div> */}
          <p className="text-center font-normal">
            Don't you have an account?{" "}
            <Link href="/auth/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
        <div className="hidden h-full lg:block">
          <Image
            className="h-full w-full  object-cover"
            src="/img/auth/signin.jpeg"
            alt="signin"
            width={600}
            height={1200}
          />
        </div>
      </section>
    </main>
  );
};

export default Signup;
