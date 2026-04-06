"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BackButton from "~/components/atoms/BackButton";
import useFile from "~/hooks/useFile";
import { errorToast, successToast } from "~/utils/toastMessage";

const EducationalDetails = ({ regId }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    qualification: "",
    university: "",
    specialization: "",
    passingYear: "",
    grade: "",
    resumeUrl: null,
  });

  const [error, setError] = useState({});
  const router = useRouter();
  const { uploadFile, fileUploading } = useFile();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setError({});
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const maxSizeInBytes = 2 * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      errorToast("File is too large (max 2MB).");
      return;
    }

    const allowedTypes = [
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
        resumeUrl: uploadedFile?.image, // Or whatever key your uploadFile returns
      }));
    } catch (error) {
      console.error("File upload failed:", error);
      errorToast("File upload failed. Please try again.");
    }
  };

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/public/candidateRegistration/${regId}`,
        { educationDetails: data }
      );

      successToast("Thank you for submitting your educational details");
      setFormData({
        qualification: "",
        university: "",
        specialization: "",
        passingYear: "",
        grade: "",
        resumeUrl: null,
      });
      router.replace(`/success`);
    } catch (error) {
      const { message } = error?.response?.data || {};
      setError(error?.response?.data || {});
      errorToast(message || "Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative h-full w-full 2xl:w-[80%] max-w-[1800px] mx-auto">
      <div className="grid lg:grid-cols-2 p-8 lg:p-0">
        <div className="flex h-full gap-5 flex-col lg:px-12 xl:px-28 lg:py-7">
          <BackButton />
          <form
            onSubmit={(e) => handleSubmit(e, formData)}
            className="w-full rounded-2xl bg-[#e0ecf6] p-6"
            style={{ boxShadow: "0px 17px 46px 0px #00000029" }}
          >
            <h4 className="text-normal mb-8 text-lg font-bold text-center">
              Education
            </h4>

            <div className="space-y-4">
              {/* Qualification */}
              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Highest Qualification</span>
                <input
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter Qualification"
                  required
                />
              </label>

              {/* University */}
              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">University / College Name</span>
                <input
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter University"
                  required
                />
              </label>

              {/* Specialization */}
              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Specialization / Major</span>
                <input
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter Specialization"
                  required
                />
              </label>

              {/* Year of Passing */}
              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Year of Passing</span>
                <input
                  type="number"
                  name="passingYear"
                  value={formData.passingYear}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter Year"
                  required
                />
              </label>

              {/* Grade */}
              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Grade / Percentage</span>
                <input
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="bg-transparent"
                  placeholder="Enter Grade"
                  required
                />
              </label>

              {/* resumeUrl */}
              <label className="w-full flex flex-col rounded-xl bg-white py-1 px-3">
                <span className="text-xs">Upload resume</span>

                {/* If uploading */}
                {fileUploading ? (
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 animate-spin fill-blue-600"
                      viewBox="0 0 100 101"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051..."
                        fill="currentColor"
                      />
                      <path d="M93.9676 39.0409C96.393..." fill="currentFill" />
                    </svg>
                    Uploading...
                  </div>
                ) : formData?.resumeUrl ? (
                  <div className="relative mt-1 flex items-center gap-2 text-sm  rounded px-2 py-1">
                    <a
                      href={formData?.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline truncate max-w-[200px]"
                    >
                      View Uploaded File
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, resumeUrl: "" }))
                      }
                      className="text-gray-400 hover:text-gray-600 text-lg"
                    >
                      &times;
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    name="resumeUrl"
                    onChange={handleFile}
                    className="mt-1 border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                )}
              </label>
            </div>

            <div className="w-full">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary-500 mt-8 w-full rounded-xl p-3 text-white disabled:opacity-60"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="pt-1 pr-5 hidden lg:block">
          <img
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/206afdf0-72d1-45df-b18a-80e29d70e000/public"
            className="w-full h-full object-cover rounded-t-2xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default EducationalDetails;
