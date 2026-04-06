"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { getallcordinate } from "~/lib/redux/slice/cordinate-slice";
import { getallcourse } from "~/lib/redux/slice/courses-slice";
import { createuser } from "~/lib/redux/slice/user-slice";
import Input from "~/components/atoms/Inputs";
import Select from "~/components/atoms/Selects";
import Button from "~/components/atoms/Buttons";
import useFile from "~/hooks/useFile";
import { useRouter } from "next/navigation";

const AddTrainer = ({ refreshTrainerList }) => {
  const dispatch = useDispatch();
  const { uploadFile } = useFile();

  const [error, setError] = useState("");
  const [segment, setSegment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);
  const [fileUploading, setFileUploading] = useState({});

  const [formdata, setformdata] = useState({
    name: "",
    center: "",
    id: "",
    password: "",
    mobile: "",
    Specialization: "",
    gender: "",
    category: "",
    dateOfBirth: "",
    email: "",
    startDate: "",
    endDate: "",
    role: "",
    aadhaar: "",
    pan: "",
    bank: "",
  });

  const router = useRouter();
  useEffect(() => {
    const getallcordinates = async () => {
      try {
        const res = await dispatch(getallcordinate());
        const formatted = res.payload?.data?.map((seg) => ({
          label: seg.title,
          value: seg._id,
        }));
        setSegment(formatted || []);
      } catch (err) {
        console.error("Error fetching coordinates:", err);
      }
    };
    getallcordinates();
  }, []);

  useEffect(() => {
    const getallcourseqp = async () => {
      try {
        const res = await dispatch(getallcourse());
        const formatteds = res.payload?.data?.map((course) => ({
          label: `${course.title} (${course.qp_code})`,
          value: course.qp_code,
        }));
        setCourse(formatteds || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    getallcourseqp();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be 5 MB or less.");
      return;
    }

    setFileUploading((prev) => ({ ...prev, [key]: true }));

    try {
      const uploaded = await uploadFile(file);
      if (!uploaded?.image) throw new Error("Upload failed");
      setformdata((prev) => ({ ...prev, [key]: uploaded.image }));
      toast.success(`${key} uploaded successfully`);
    } catch {
      toast.error(`Failed to upload ${key}`);
    } finally {
      setFileUploading((prev) => ({ ...prev, [key]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formdata.name) {
      setLoading(false);
      return setError("Please enter name");
    }

    const today = new Date();
    const maxDate = new Date();
    today.setHours(0, 0, 0, 0);
    maxDate.setFullYear(today.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    const selectedDate = new Date(formdata.startDate);
    selectedDate.setHours(0, 0, 0, 0);

    // if (selectedDate > maxDate) {
    //   setLoading(false);
    //   return setError("Joining date cannot be more than 1 year from today");
    // }
    // if (selectedDate < today) {
    //   setLoading(false);
    //   return setError("Joining date cannot be in the past");
    // }

    const requiredFields = [
      "center",
      "id",
      "password",
      "mobile",
      "email",
      "category",
      "gender",
      "dateOfBirth",
      "startDate",
      "endDate",
      "Specialization",
      "role",
    ];

    for (const field of requiredFields) {
      if (!formdata[field]) {
        setLoading(false);
        return setError(`Please enter ${field}`);
      }
    }

    const payload = {
      employeeId: formdata.id,
      name: formdata.name,
      password: formdata.password,
      mobile: formdata.mobile,
      role: formdata.role,
      specialization: formdata.Specialization,
      locationId: formdata.center,
      email: formdata.email,
      gender: formdata.gender,
      category: formdata.category,
      dateOfBirth: formdata.dateOfBirth,
      startDate: formdata.startDate,
      endDate: formdata.endDate,
      aadhaar: formdata.aadhaar,
      pan: formdata.pan,
      bank: formdata.bank,
    };

    try {
      await dispatch(createuser(payload)).unwrap();
      toast.success("Trainer added successfully");
      router.replace("/successfull");
      if (refreshTrainerList) refreshTrainerList();
    } catch (error) {
      console.error(error);
      const apiError =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (apiError.includes("E11000")) {
        toast.error("Duplicate UIN is not allowed");
      } else {
        toast.error(apiError);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-2xl shadow-md bg-white p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Trainer/Assessor Registration
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              label="UIN"
              name="id"
              value={formdata.id}
              onChange={handleChange}
            />
            <Input
              label="Name"
              name="name"
              value={formdata.name}
              onChange={handleChange}
            />
            <Input
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={formdata.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <Select
              label="Role"
              name="role"
              value={formdata.role}
              onChange={handleChange}
              options={[
                { label: "Trainer", value: "trainer" },
                { label: "Assessor", value: "assessor" },
              ]}
            />
            <Select
              label="Gender"
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />
            <Select
              label="Category"
              name="category"
              value={formdata.category}
              onChange={handleChange}
              options={[
                { label: "General", value: "general" },
                { label: "OBC", value: "obc" },
                { label: "SC", value: "sc" },
                { label: "Other", value: "other" },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
            <Input
              label="Start Date"
              type="date"
              name="startDate"
              value={formdata.startDate}
              onChange={handleChange}
            />
            <Input
              label="End Date"
              type="date"
              name="endDate"
              value={formdata.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <Select
              label="Center"
              name="center"
              value={formdata.center}
              onChange={handleChange}
              options={segment}
            />
            <Input
              label="Password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
            <Input
              label="Mobile"
              name="mobile"
              value={formdata.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <Select
              label="Course"
              name="Specialization"
              value={formdata.Specialization}
              onChange={handleChange}
              options={course}
            />
          </div>

          <div className="space-y-3">
            {[
              { label: "Aadhar", key: "aadhaar" },
              { label: "Pancard", key: "pan" },
              { label: "Bank Passbook", key: "bank" },
            ].map(({ label, key }) => (
              <div key={key}>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Upload {label} Image
                </label>
                <input
                  required
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={(e) => handleFileUpload(e, key)}
                  disabled={fileUploading[key]}
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
                />
                {fileUploading[key] && (
                  <p className="text-sm text-yellow-500 animate-pulse">
                    Uploading…
                  </p>
                )}
                {formdata[key] && (
                  <p className="text-sm text-green-600 break-words">
                    Uploaded:{" "}
                    <span className="font-medium">{formdata[key]}</span>
                  </p>
                )}
              </div>
            ))}
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <div className="flex justify-center gap-4 mt-4">
            <Button
              label="Cancel"
              style="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
              type="button"
              disabled={loading}
            />
            <Button
              label={loading ? "Creating..." : "Create Trainer"}
              style="bg-blue-600 hover:bg-blue-700 text-white"
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrainer;
