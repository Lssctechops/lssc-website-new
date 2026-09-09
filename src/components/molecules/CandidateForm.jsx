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


// "use client";

// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { errorToast } from "~/utils/toastMessage";

// const jobRoleRows = [
//   "Cutting Operator",
//   "Stitching Operator",
//   "Lasting Operator",
//   "Finishing Operator",
//   "Pre-Assembly Line Operator",
//   "Skiving Operator",
//   "Helper Parts Making",
//   "Helper Upper Making",
//   "Helper Bottom Making",
//   "Line Supervisors",
//   "Quality Checking",
//   "Others (Specify)",
// ];

// const skillLevels = ["Fresher", "Semi-skilled", "Skilled"];

// const CandidateForm = () => {
//   const [error, setError] = useState({});
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     date: "",
//     // 1. Company Details
//     companyName: "",
//     plantLocations: "",
//     contactPerson: "",
//     designation: "",
//     mobile: "",
//     email: "",
//     // 2. Manpower Requirement
//     manpower: jobRoleRows.map((role) => ({
//       role,
//       count: "",
//       skillLevel: "",
//       othersSpecify: "",
//     })),
//     totalRequirement: "",
//     expectedDeployment: "",
//     natureOfEmployment: "",
//     // 3. Qualification & Training
//     minQualification: "",
//     inductionOjt: "",
//     specificSkill: "",
//     // 4. Salary & Benefits
//     salaryUnskilled: "",
//     salarySemiSkilled: "",
//     salarySkilled: "",
//     // 5. Statutory Compliance & Welfare
//     epf: "",
//     esi: "",
//     additionalInsurance: "",
//     // 6. Accommodation, Food & Transportation
//     accommodation: "",
//     foodCanteen: "",
//     foodCharges: "",
//     travelExpenses: "",
//     railwayFareReimbursement: "",
//     pickupFacility: "",
//     relocationSupport: "",
//     // 7. Working Conditions
//     workingHours: "",
//     shiftPattern: "",
//     weeklyOff: "",
//     leaveEntitlements: "",
//     ppeSafety: "",
//     // 8. Declaration
//     authName: "",
//     authDesignation: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setError({});
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleManpowerChange = (index, field, value) => {
//     setFormData((prev) => {
//       const manpower = [...prev.manpower];
//       manpower[index] = { ...manpower[index], [field]: value };
//       return { ...prev, manpower };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError({});
//     try {
//       const response = await axios({
//         url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/talentForm`,
//         method: "POST",
//         data: formData,
//       });
//       setLoading(false);
//       const industryId = response?.data?.data?._id;
//       router.replace(`/job-post/collaboration-form?industry=${industryId}`);
//     } catch (err) {
//       const { message } = err?.response?.data || {};
//       setError(err?.response?.data || {});
//       errorToast(message || "Failed to submit the form.");
//       setLoading(false);
//     }
//   };

//   const inputCls =
//     "bg-white border border-gray-200 p-3 rounded-lg w-full";
//   const labelCls = "font-medium text-lg block mb-1";
//   const sectionCls = "col-span-2 mt-4";
//   const sectionTitleCls =
//     "text-xl font-semibold text-[#0070BA] mb-3 border-b border-[#0070BA]/30 pb-1";

//   return (
//     <section>
//       <h2 className="text-center mx-auto font-bold text-[#333333] mb-2 text-3xl lg:text-4xl">
//         MANPOWER REQUIREMENT FORM
//       </h2>
//       <h3 className="text-xl mb-6 text-center text-[#333333] font-medium">
//         ( To be filled by Industry )
//       </h3>

//       <form
//         onSubmit={handleSubmit}
//         style={{ boxShadow: "0px 12px 48px 0px #00000014" }}
//         className="lg:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-8 bg-[#EBF4FA] rounded-2xl mx-auto"
//       >
//         {/* Date */}
//         <div className="col-span-2 flex justify-end">
//           <div className="flex items-center gap-2">
//             <label className="font-medium">Date:</label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="bg-white border border-gray-200 p-2 rounded-lg"
//             />
//           </div>
//         </div>

//         {/* 1. Company Details */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>1. Company Details</h4>
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>Company Name</label>
//           <input
//             required
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Company's name"
//           />
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>Plant/Unit Location(s)</label>
//           <input
//             required
//             name="plantLocations"
//             value={formData.plantLocations}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Enter plant/unit location(s)"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Contact Person (HR)</label>
//           <input
//             required
//             name="contactPerson"
//             value={formData.contactPerson}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Contact person name"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Designation</label>
//           <input
//             name="designation"
//             value={formData.designation}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Designation"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Mobile</label>
//           <input
//             required
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Mobile number"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Email</label>
//           <input
//             required
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Email address"
//           />
//         </div>

//         {/* 2. Manpower Requirement */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>2. Manpower Requirement</h4>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-[#0070BA] text-white text-left">
//                   <th className="p-3">Job Role</th>
//                   <th className="p-3">No. of Workers Required</th>
//                   <th className="p-3">Fresher / Semi-skilled / Skilled</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {formData.manpower.map((row, i) => (
//                   <tr key={i} className="border-b border-gray-100">
//                     <td className="p-2 align-top">
//                       {row.role === "Others (Specify)" ? (
//                         <div className="flex flex-col gap-1">
//                           <span>Others (Specify)</span>
//                           <input
//                             value={row.othersSpecify}
//                             onChange={(e) =>
//                               handleManpowerChange(i, "othersSpecify", e.target.value)
//                             }
//                             className="border border-gray-200 p-2 rounded-lg text-sm"
//                             placeholder="Specify role"
//                           />
//                         </div>
//                       ) : (
//                         row.role
//                       )}
//                     </td>
//                     <td className="p-2">
//                       <input
//                         type="number"
//                         min="0"
//                         value={row.count}
//                         onChange={(e) =>
//                           handleManpowerChange(i, "count", e.target.value)
//                         }
//                         className="border border-gray-200 p-2 rounded-lg w-24"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <select
//                         value={row.skillLevel}
//                         onChange={(e) =>
//                           handleManpowerChange(i, "skillLevel", e.target.value)
//                         }
//                         className="border border-gray-200 p-2 rounded-lg"
//                       >
//                         <option value="">Select</option>
//                         {skillLevels.map((s) => (
//                           <option key={s} value={s}>
//                             {s}
//                           </option>
//                         ))}
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div>
//           <label className={labelCls}>Total Requirement (Workers)</label>
//           <input
//             type="number"
//             min="0"
//             name="totalRequirement"
//             value={formData.totalRequirement}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Total workers"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Expected Date of Deployment</label>
//           <input
//             type="date"
//             name="expectedDeployment"
//             value={formData.expectedDeployment}
//             onChange={handleChange}
//             className={inputCls}
//           />
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>Nature of Employment</label>
//           <div className="flex flex-wrap gap-4">
//             {["Contractual", "Fixed-Term", "Permanent"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="natureOfEmployment"
//                   value={opt}
//                   checked={formData.natureOfEmployment === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* 3. Qualification & Training */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>3. Qualification & Training</h4>
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>Minimum Educational Qualification</label>
//           <input
//             name="minQualification"
//             value={formData.minQualification}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Minimum qualification"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Company will provide Induction/OJT</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="inductionOjt"
//                   value={opt}
//                   checked={formData.inductionOjt === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className={labelCls}>Any Specific Skill Requirement</label>
//           <input
//             name="specificSkill"
//             value={formData.specificSkill}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Specific skill"
//           />
//         </div>

//         {/* 4. Salary & Benefits */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>4. Salary & Benefits</h4>
//           <p className="text-sm text-gray-600 mb-2">
//             Monthly Salary/Wages Offered
//           </p>
//         </div>

//         <div>
//           <label className={labelCls}>Unskilled (₹)</label>
//           <input
//             type="number"
//             name="salaryUnskilled"
//             value={formData.salaryUnskilled}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="₹"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Semi-skilled (₹)</label>
//           <input
//             type="number"
//             name="salarySemiSkilled"
//             value={formData.salarySemiSkilled}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="₹"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Skilled (₹)</label>
//           <input
//             type="number"
//             name="salarySkilled"
//             value={formData.salarySkilled}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="₹"
//           />
//         </div>

//         {/* 5. Statutory Compliance & Welfare */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>
//             5. Statutory Compliance & Welfare
//           </h4>
//         </div>

//         <div>
//           <label className={labelCls}>EPF</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="epf"
//                   value={opt}
//                   checked={formData.epf === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className={labelCls}>ESI</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="esi"
//                   value={opt}
//                   checked={formData.esi === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>
//             Additional Insurance/Medical Coverage
//           </label>
//           <input
//             name="additionalInsurance"
//             value={formData.additionalInsurance}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Details"
//           />
//         </div>

//         {/* 6. Accommodation, Food & Transportation */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>
//             6. Accommodation, Food & Transportation
//           </h4>
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>Accommodation Provided</label>
//           <div className="flex flex-wrap gap-4">
//             {["Free", "Paid", "Not Provided"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="accommodation"
//                   value={opt}
//                   checked={formData.accommodation === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className={labelCls}>Food/Canteen Facility</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="foodCanteen"
//                   value={opt}
//                   checked={formData.foodCanteen === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className={labelCls}>Food Charges (₹ per month, if any)</label>
//           <input
//             type="number"
//             name="foodCharges"
//             value={formData.foodCharges}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="₹ per month"
//           />
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>Travel Expenses from Home State</label>
//           <div className="flex flex-wrap gap-4">
//             {["Company Pays", "Candidate Pays"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="travelExpenses"
//                   value={opt}
//                   checked={formData.travelExpenses === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className={labelCls}>Railway Fare Reimbursement</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="railwayFareReimbursement"
//                   value={opt}
//                   checked={formData.railwayFareReimbursement === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className={labelCls}>Pick-up Facility from Railway Station</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="pickupFacility"
//                   value={opt}
//                   checked={formData.pickupFacility === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>Relocation Support</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="relocationSupport"
//                   value={opt}
//                   checked={formData.relocationSupport === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* 7. Working Conditions */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>7. Working Conditions</h4>
//         </div>

//         <div>
//           <label className={labelCls}>Working Hours</label>
//           <input
//             name="workingHours"
//             value={formData.workingHours}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="e.g. 8 hours/day"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Shift Pattern</label>
//           <input
//             name="shiftPattern"
//             value={formData.shiftPattern}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Shift pattern"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Weekly Off</label>
//           <input
//             name="weeklyOff"
//             value={formData.weeklyOff}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Weekly off"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Leave Entitlements</label>
//           <input
//             name="leaveEntitlements"
//             value={formData.leaveEntitlements}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Leave entitlements"
//           />
//         </div>

//         <div className="col-span-2">
//           <label className={labelCls}>PPE & Safety Measures Available</label>
//           <div className="flex gap-4">
//             {["Yes", "No"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="ppeSafety"
//                   value={opt}
//                   checked={formData.ppeSafety === opt}
//                   onChange={handleChange}
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* 8. Declaration */}
//         <div className={sectionCls}>
//           <h4 className={sectionTitleCls}>8. Declaration</h4>
//           <p className="text-sm text-gray-600 mb-3">
//             We hereby confirm the above manpower requirement and request Leather
//             Sector Skill Council (LSSC) to support sourcing and mobilization
//             activities.
//           </p>
//         </div>

//         <div>
//           <label className={labelCls}>Authorized Signatory — Name</label>
//           <input
//             required
//             name="authName"
//             value={formData.authName}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Name"
//           />
//         </div>

//         <div>
//           <label className={labelCls}>Designation</label>
//           <input
//             name="authDesignation"
//             value={formData.authDesignation}
//             onChange={handleChange}
//             className={inputCls}
//             placeholder="Designation"
//           />
//         </div>

//         {error?.error && (
//           <span className="col-span-2 text-xs text-red-500">
//             {error.error}
//           </span>
//         )}

//         <div className="flex col-span-2 items-center justify-center">
//           <button
//             disabled={loading}
//             type="submit"
//             className="bg-[#0070BA] disabled:opacity-50 py-4 mt-6 mx-auto w-full lg:w-fit lg:px-40 text-white rounded-xl"
//           >
//             Submit Form
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default CandidateForm;
