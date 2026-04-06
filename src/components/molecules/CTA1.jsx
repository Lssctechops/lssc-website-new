"use client";

import axios from "axios";
import { useState } from "react";
import { errorToast, successToast } from "~/utils/toastMessage";

const CTA1 = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const subscribeNewsletter = async (e, data) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/signUpNewsletter`,
        method: "POST",
        data,
      });
      setFormData({ email: "" });
      setLoading(false);
      successToast("Thank you for subscribing");
    } catch (error) {
      const { message } = error?.response?.data;
      errorToast(message || "Failed to subscribe.");
      setLoading(false);
    }
  };
  return (
    <div className="container  rounded-3xl relative overflow-hidden h-[275px] bg-primary-200  ">
      <img
        src="/home/background.svg"
        className="w-full h-full object-cover absolute"
      />

      <div className="w-full h-full px-10 relative z-10 flex flex-row justify-between items-center">
        <h3 className=" text-[25px] md:text-[30px] xl:text-[38px] font-semibold">
          Check out upcoming courses with <br />
          <span className="text-primary-600">LSSC </span>
          Newsletter
        </h3>

        <form
          onSubmit={(e) => subscribeNewsletter(e, formData)}
          className="w-[330px] xl:w-[40%] bg-white p-3 rounded-lg shadow flex flex-row items-center justify-between"
        >
          <input
            name="email"
            value={formData?.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="User Email address..."
            className="text-sm placeholder:text-gray-400"
          />

          <button
            disabled={loading}
            className="w-fit disabled:opacity-50 bg-black  text-white px-6 py-2 rounded-[6px] hover:opacity-65 text-sm"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTA1;
