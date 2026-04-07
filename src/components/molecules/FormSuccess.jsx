import Image from "next/image";
import Link from "next/link";

const FormSuccess = () => {
  return (
    <main className="py-10">
      <section className="flex justify-center items-center">
        <div className="lg:w-96 w-full bg-white shadow rounded-xl">
          <div className="bg-[#dbebf5] rounded-t-xl h-60">
            <Image
              className="h-full w-full object-cover"
              src="/img/success.png"
              alt="success"
              width={500}
              height={500}
            />
          </div>
          <div className="p-10 space-y-6">
            <h2 className="text-3xl font-bold">
              Your form has been submitted!
            </h2>

            <Link href="/">
              <button className="w-full cursor-pointer bg-[#0070BA] text-white  py-3 rounded-lg">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FormSuccess;
