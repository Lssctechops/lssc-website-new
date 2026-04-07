import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <main>
      <section className="container grid h-screen gap-10 lg:grid-cols-2 ">
        <div className="mx-auto py-20 flex flex-col gap-4 lg:w-[70%]">
          <h2 className="flex items-center justify-between text-4xl font-semibold">
            Welcome 👋
            <Link
              href="/auth/industry"
              className="rounded-lg bg-gradient-to-r from-[#7B0C0A] to-[#420705] text-white px-3 py-2 text-lg font-normal"
            >
              Trainer/Assessor →
            </Link>
          </h2>
          <h1 className="text-4xl font-bold">Sign in to continue</h1>
          <p className="font-normal">
            Fill your details to access and manage your dashboard.
          </p>

          <form className="space-y-4" action="">
            <label className="flex flex-col gap-2" htmlFor="">
              Email
              <input
                className="rounded-lg border border-gray-100 bg-[#f7fbff] p-3"
                placeholder="Example@gmail.com"
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
              className="bg-primary-500 w-full rounded-xl p-3 text-white"
              type="submit"
            >
              Login
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
            Don&apos;t you have an account?
            <Link href="/auth/signup" className="text-blue-500">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
        <div className="hidden lg:block">
          <Image
            className="h-full w-full object-cover"
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

export default SignIn;
