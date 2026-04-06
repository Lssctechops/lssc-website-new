"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useFile from "~/hooks/useFile";
import { errorToast, successToast } from "~/utils/toastMessage";

const CandidateForm = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    gstn: "",
    city: "",
    segment: [],
    jobRole: [],
    quickHiring: "",
    numberOfCandidates: "",
    qualification: [],
    gender: "",
    age: "",
    disabilityPreference: "",
    totalWorkforce: "na",
    letterOfIntent: "",
  });
  const { uploadFile, fileUploading } = useFile();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError({});
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiChange = (value, name) => {
    setFormData((prev) => {
      const current = Array.isArray(prev[name]) ? prev[name] : [];
      if (current.includes(value)) {
        // Remove the value
        return {
          ...prev,
          [name]: current.filter((v) => v !== value),
        };
      } else {
        // Add the value
        return {
          ...prev,
          [name]: [...current, value],
        };
      }
    });
  };

  const resetForm = () => {
    setError({});
    setFormData({
      companyName: "",
      gstn: "",
      city: "",
      segment: "",
      jobRole: "",
      quickHiring: "",
      numberOfCandidates: "",
      qualification: "",
      gender: "",
      age: "",
      disabilityPreference: "",
      totalWorkforce: "na",
    });
  };

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate size (max 2 MB)
    const maxSizeInBytes = 2 * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      errorToast("File is too large.");
      return;
    }

    // Validate type (images and docs only)
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      errorToast("Invalid file type.");
      return;
    }

    try {
      const uploadedFile = await uploadFile(file);

      setFormData((prev) => ({
        ...prev,
        letterOfIntent: uploadedFile?.image,
      }));
    } catch (error) {
      console.error("File upload failed:", error);
      errorToast("File upload failed. Please try again.");
    }
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/talentForm`,
        method: "POST",
        data: formData,
      });
      resetForm();
      setLoading(false);
      const industryId = response?.data?.data?._id;
      router.replace(`/job-post/collaboration-form?industry=${industryId}`);

      console.log(response, "candidate ");
    } catch (error) {
      const { message } = error?.response?.data || {};
      setError(error?.response?.data || {});
      errorToast(message || "Failed to submit the form.");
      setLoading(false);
    }
  };

  return (
    <section>
      <h2 className="text-center mx-auto font-bold text-[#333333] mb-6 text-4xl">
        CANDIDATE REQUIREMENT FORM
      </h2>
      <h3 className="text-2xl mb-6 text-center text-[#333333] font-medium">
        ( To be filled by Industry )
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e, formData)}
        style={{ boxShadow: "0px 12px 48px 0px #00000014" }}
        className="lg:w-[70%] flex flex-col md:grid md:grid-cols-2 gap-y-2 p-3 lg:p-6 bg-[#EBF4FA] rounded-2xl mx-auto"
      >
        <label className="font-medium text-lg">Company Name</label>
        <input
          required
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="bg-white border border-gray-200 p-3 rounded-lg"
          placeholder="Company's name"
        />

        <label className="font-medium text-lg">GSTN</label>
        <input
          required
          name="gstn"
          value={formData.gstn}
          onChange={handleChange}
          className="bg-white border border-gray-200 p-3 rounded-lg"
          placeholder="Enter GSTN"
        />

        <label className="font-medium text-lg">City</label>
        <input
          required
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="bg-white border border-gray-200 p-3 rounded-lg"
          placeholder="Enter city"
        />

        <label className="font-medium text-lg">Primary Segment</label>

        <div className="w-full md:w-fit">
          <select
            name="segment"
            value=""
            onChange={(e) => handleMultiChange(e.target.value, "segment")}
            className="bg-white w-full border border-gray-200 text-[#333333] p-3 rounded-lg"
          >
            <option value="">Select</option>
            {[
              "Footwear",
              "Bags",
              "Jacket",
              "Belts",
              "Harness & Saddlery",
              "Wallets",
              "Gloves",
              "Hard Goods",
              "Tanning",
              "Others",
            ].map((seg, i) => (
              <option key={i} value={seg}>
                {seg}
              </option>
            ))}
          </select>
          {formData.segment.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.segment.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleMultiChange(item, "segment")}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <label className="font-medium text-lg">For Job Role</label>
        <div className="w-fit max-w-full">
          <select
            name="jobRole"
            value=""
            onChange={(e) => handleMultiChange(e.target.value, "jobRole")}
            className="w-full bg-white border border-gray-200 text-[#333333] p-3 rounded-lg"
          >
            <option value="">Select role</option>
            {jobRoles.map(({ label }, i) => (
              <option key={i} value={label}>
                {label}
              </option>
            ))}
          </select>

          {formData.jobRole.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.jobRole.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleMultiChange(item, "jobRole")}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <label className="font-medium text-lg">Quick Hiring</label>
        <select
          required
          name="quickHiring"
          value={formData.quickHiring}
          onChange={handleChange}
          className="bg-white border border-gray-200 text-[#333333] p-3 rounded-lg"
        >
          <option value="">Select One</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <label className="font-medium text-lg">Candidates Required</label>

        <select
          className="bg-white border border-gray-200 text-[#333333]  p-3 rounded-lg"
          name="numberOfCandidates"
          required
          value={formData.numberOfCandidates}
          onChange={handleChange}
        >
          <option value="">Choose</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <label className="font-medium text-lg">Qualification Required</label>
        <div className="w-full md:w-fit">
          <select
            name="qualification"
            value=""
            onChange={(e) => {
              if (e.target.value) {
                handleMultiChange(e.target.value, "qualification");
              }
            }}
            className="bg-white w-full border border-gray-200 text-[#333333] p-3 rounded-lg"
          >
            <option value="">Select qualification</option>
            {["10th Pass", "12th Pass", "Graduate"].map((q, i) => (
              <option key={i} value={q}>
                {q}
              </option>
            ))}
          </select>

          {formData.qualification.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.qualification.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleMultiChange(item, "qualification")}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <label className="font-medium text-lg">Gender</label>
        <select
          required
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="bg-white border border-gray-200 text-[#333333] p-3 rounded-lg"
        >
          <option value="">Select gender</option>
          {["Male", "Female", "Other"].map((g, i) => (
            <option key={i} value={g}>
              {g}
            </option>
          ))}
        </select>

        <label className="font-medium text-lg">Age Group</label>
        <select
          required
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="bg-white border border-gray-200 text-[#333333] p-3 rounded-lg"
        >
          <option value="">Select age</option>
          {["20-30", "31-40", "41-56", "Other"].map((a, i) => (
            <option key={i} value={a}>
              {a}
            </option>
          ))}
        </select>

        <label className="font-medium text-lg">Person with Disability</label>
        <select
          required
          name="disabilityPreference"
          value={formData.disabilityPreference}
          onChange={handleChange}
          className="bg-white border border-gray-200 text-[#333333] p-3 rounded-lg"
        >
          <option value="">Select One</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        {error?.error && (
          <span className="text-xs text-red-500">{error?.error}</span>
        )}

        <div className="col-span-2 ">
          {/* letterOfIntent */}
          <div className="relative mt-5 mx-auto w-full  p-4 border border-[#0070BA] border-dashed rounded-xl flex flex-col justify-center items-center bg-[#ebf4fa] space-y-2">
            {fileUploading && (
              <div className="flex flex-col items-center gap-2">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>

                <p className="text-sm text-gray-600">Uploading...</p>
              </div>
            )}

            {!fileUploading && formData?.letterOfIntent && (
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-2">
                <a
                  href={formData.letterOfIntent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline truncate max-w-[150px] text-sm"
                >
                  View File
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, letterOfIntent: "" }))
                  }
                  className="absolute top-0 right-1 text-gray-400 hover:text-gray-600 text-xl leading-none"
                >
                  &times;
                </button>
              </div>
            )}

            {!fileUploading && !formData?.letterOfIntent && (
              <>
                <input
                  onChange={handleFile}
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <Image
                  className="h-8 w-8"
                  src="/img/cloud.png"
                  alt="cloud"
                  width={32}
                  height={32}
                />
                <h5 className="text-sm font-medium text-gray-700">
                  Drop file or browse
                </h5>
                <p className="text-xs text-[#6C606C] text-center px-1">
                  .jpeg, .png, .pdf | Max 2 MB
                </p>
                <span className="bg-[#0070BA] text-white text-xs px-2 py-1 rounded-sm">
                  Browse Files
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex col-span-2 items-center justify-center">
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

export default CandidateForm;

const jobRoles = [
  { label: "Cutter footwear", value: "cutter_footwear" },
  { label: "Helper Upper Making", value: "helper_upper_making" },
  { label: "Retail Associate", value: "retail_associate" },
  { label: "Footwear Skiving Operator", value: "footwear_skiving_operator" },
  {
    label: "Footwear Stitching Operator",
    value: "footwear_stitching_operator",
  },
  { label: "Pre-Assembly Operator", value: "pre_assembly_operator" },
  { label: "Lasting Operator", value: "lasting_operator" },
  { label: "Goods Cutter", value: "goods_cutter" },
  { label: "Garment Cutter", value: "garment_cutter" },
  { label: "Goods Stitching Operator", value: "goods_stitching_operator" },
  { label: "Garment Stitching Operator", value: "garment_stitching_operator" },
  { label: "Footwear Sample Man", value: "footwear_sample_man" },
  { label: "Helper Parts Making", value: "helper_parts_making" },
  {
    label: "Junior Technician CAD Stitching Machine",
    value: "junior_technician_cad_stitching_machine",
  },
  {
    label: "Garments Quality Control Inspector",
    value: "garments_quality_control_inspector",
  },
  {
    label: "Goods Quality Control Inspector",
    value: "goods_quality_control_inspector",
  },
  {
    label: "Footwear Quality Control Inspector",
    value: "footwear_quality_control_inspector",
  },
  { label: "Shoesmith (Cobbler) - Basic", value: "shoesmith_cobbler_basic" },
  {
    label: "Shoesmith (Cobbler) - Advance",
    value: "shoesmith_cobbler_advance",
  },
  {
    label: "Junior Technician Footwear and Components Testing",
    value: "junior_technician_footwear_components_testing",
  },
];
