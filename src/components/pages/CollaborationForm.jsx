"use client";
import axios from "axios";
import BackButton from "../atoms/BackButton";
import { useState } from "react";
import { errorToast, successToast } from "~/utils/toastMessage";
import { useRouter } from "next/navigation";

const CollaborationForm = ({ industryId }) => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    totalWorkforce: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData, "colabo");

  const router = useRouter();

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/talentForm/${id}`,
        method: "PUT",
        data: formData,
      });
      // resetForm();
      setLoading(false);
      const industryId = response?.data?.data?._id;
      router.replace(`/successfull`);

      successToast("Details submitted.");
    } catch (error) {
      const { message } = error?.response?.data || {};
      setError(error?.response?.data || {});
      errorToast(message || "Failed to submit the form.");
      setLoading(false);
    }
  };

  return (
    <section className="container py-6">
      <BackButton />
      <h2 className="text-center mx-auto font-bold text-[#333333] mb-6 text-4xl">
        Training Collaboration Form
      </h2>
      <h3 className="text-2xl mb-6 text-center text-[#333333] font-medium">
        ( To be filled by Industry )
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e, industryId)}
        className="lg:w-[70%] grid grid-cols-2 gap-y-4  p-3 lg:p-6 bg-[#EBF4FA] rounded-2xl shadow mx-auto"
        action=""
      >
        <label className="font-medium text-lg" htmlFor="">
          1. Total Workforce
        </label>
        <select
          className="bg-white border border-gray-200 text-[#333333]  p-3 rounded-lg"
          name="totalWorkforce"
          value={formData?.totalWorkforce}
          required
          onChange={handleChange}
        >
          <option value="">Select One</option>
          <option value="Less than 100">Less than 100</option>
          <option value="101 - 250">101 - 250</option>
          <option value="251 - 500">251 - 500</option>
          <option value="500 - 1000">500 - 1000</option>
          <option value="1000 above">1000 above</option>
        </select>

        <div className="lg:col-span-2 flex flex-col gap-2">
          <label className="font-medium text-lg" htmlFor="">
            <label className="font-medium text-lg" htmlFor="">
              2. Is your internal training system aligned with the National
              Skills Qualifications Framework (NSQF) standards? Are you
              interested?
            </label>
          </label>
          <select
            className="bg-white border  border-gray-200 text-[#333333]  p-3 rounded-lg"
            name="nsqfAligned"
            value={formData?.nsqfAligned}
            required
            onChange={handleChange}
          >
            <option value="">Select One</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-2">
          <label className="font-medium text-lg" htmlFor="">
            3. Do you actively participate in government-led initiatives such as
            Skill India, PMKVY, or other LSSC-supported programs?
          </label>
          <select
            className="bg-white border  border-gray-200 text-[#333333]  p-3 rounded-lg"
            name="governmentInitiativeParticipation"
            value={formData?.governmentInitiativeParticipation}
            required
            onChange={handleChange}
          >
            <option value="">Select One</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div className="lg:col-span-2 ">
          <label className="font-medium text-lg" htmlFor="">
            4. Can you offer infrastructure and technical expertise for:
          </label>
          <div className="grid mt-2 grid-cols-2 gap-2">
            <label className="font-medium text-lg" htmlFor="">
              (a) Training of Trainers (ToT)
            </label>

            <select
              className="bg-white border  border-gray-200 text-[#333333]  p-3 rounded-lg"
              name="offerToTrainer"
              value={formData?.offerToTrainer}
              required
              onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>

            <label className="font-medium text-lg" htmlFor="">
              (b) Training of Assessors (ToA)
            </label>

            <select
              className="bg-white border  border-gray-200 text-[#333333]  p-3 rounded-lg"
              name="offerToAssessor"
              value={formData?.offerToAssessor}
              required
              onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>

        <div className="lg:col-span-2 ">
          <label className="font-medium text-lg" htmlFor="">
            5. Would you be able to support with:
          </label>
          <div className="grid mt-2 grid-cols-2 gap-2">
            <label className="font-medium text-lg" htmlFor="">
              (a) Curriculum development
            </label>

            <select
              className="bg-white border  border-gray-200 text-[#333333]  p-3 rounded-lg"
              name="supportCurriculumDevelopment"
              value={formData?.supportCurriculumDevelopment}
              required
              onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>

            <label className="font-medium text-lg" htmlFor="">
              (b) Industry exposure for trainees
            </label>

            <select
              className="bg-white border  border-gray-200 text-[#333333]  p-3 rounded-lg"
              name="supportIndustryExposure"
              value={formData?.supportIndustryExposure}
              required
              onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>

            <label className="font-medium text-lg" htmlFor="">
              (c) Real-time assessment modules
            </label>

            <select
              className="bg-white border  border-gray-200 text-[#333333]  p-3 rounded-lg"
              name="supportRealTimeAssessment"
              value={formData?.supportRealTimeAssessment}
              required
              onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>

        <div className="flex lg:col-span-2 justify-center">
          <button
            disabled={loading}
            type="submit"
            className="bg-[#0070BA] disabled:opacity-50 py-4 mt-6 mx-auto w-full lg:w-fit lg:px-40 text-white rounded-xl"
          >
            Submit Form
          </button>
        </div>
      </form>
    </section>
  );
};

export default CollaborationForm;
