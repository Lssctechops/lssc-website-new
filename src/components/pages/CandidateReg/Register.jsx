"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BackButton from "~/components/atoms/BackButton";
import { errorToast, successToast } from "~/utils/toastMessage";

const Register = ({ courseId }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    city: "",
    state: "",
    pinCode: "",
    mobile: "",
    email: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError({});
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const router = useRouter();

  const resetForm = () => {
    setError({});
    setFormData({
      name: "",
      dob: "",
      gender: "",
      city: "",
      state: "",
      pinCode: "",
      mobile: "",
      email: "",
    });
  };

  const handleSubmit = async (e, data, id) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/candidateRegistration`,
        method: "POST",
        data: { course: [id], personalDetails: data },
      });
      const regId = response?.data?.data?._id;
      resetForm();
      setLoading(false);
      console.log(response);
      router.replace(`/auth/candidate/education?reg=${regId}`);
    } catch (error) {
      const { message } = error?.response?.data;
      setError(error?.response?.data || {});
      errorToast(message || "Failed to submit.");
      setLoading(false);
    }
  };
  return (
    <section className="relative h-full w-full 2xl:w-[80%] max-w-[1800px] mx-auto">
      <div className="grid  lg:grid-cols-2 p-8 lg:p-0">
        <div className="flex h-full gap-5 flex-col   lg:px-12 xl:px-28 lg:py-7">
          <BackButton />
          <form
            onSubmit={(e) => handleSubmit(e, formData, courseId)}
            className="w-full rounded-2xl bg-[#e0ecf6] p-6 "
            style={{ boxShadow: "0px 17px 46px 0px #00000029" }}
          >
            <h4 className="text-normal mb-8 text-lg font-bold text-center">
              CANDIDATE REGISTRATION FORM
            </h4>
            <div className="space-y-4">
              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Name</span>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter your full name"
                />
              </label>

              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Date of Birth</span>
                <input
                  required
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="bg-transparent"
                />
              </label>

              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Gender</span>
                <select
                  required
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="bg-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">City</span>
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter your city"
                />
              </label>

              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">State</span>
                <input
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter your state"
                />
              </label>

              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Pin Code</span>
                <input
                  required
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="00000"
                />
              </label>

              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Mobile No</span>
                <input
                  required
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="709XX 50089"
                />
              </label>

              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="xyz@gmail.com"
                />
              </label>
            </div>
            {error?.error && (
              <span className="text-xs text-red-500">{error?.error}</span>
            )}
            <button
              disabled={loading}
              type="submit"
              className="bg-primary-500 mt-8 w-full rounded-xl p-3 text-white disabled:opacity-50"
            >
              Next
            </button>
          </form>
        </div>
        <div className="pt-1 pr-5 hidden lg:block">
          <img
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/206afdf0-72d1-45df-b18a-80e29d70e000/public"
            className="w-full h-full object-cover rounded-t-2xl "
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
