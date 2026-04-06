import Image from "next/image";
import Link from "next/link";

const Success = ({
  title = "You are successfully registered!",
  label = "Go to Scale App",
  route = "#",
}) => {
  return (
    <main className="py-10">
      <section className="flex justify-center items-center">
        <div className="lg:w-96 w-full bg-white shadow rounded-xl">
          <Image
            className="w-full h-auto rounded-t-xl"
            src="/img/Frame.svg"
            alt="success"
            width={500}
            height={500}
          />
          <div className="p-10 space-y-6">
            <h2 className="text-2xl font-bold">{title}</h2>

            <Link href={route}>
              <button className="w-full bg-[#0070BA] text-white  py-3 rounded-lg">
                {label}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Success;
