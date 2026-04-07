const Select = ({ label, options }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold" htmlFor="">
        {label}
      </label>
      <select
        className="bg-white border border-gray-200 text-[#333333] w-full p-3 rounded-lg"
        name=""
        id=""
      >
        {options?.map((option, i) => (
          <option key={i} value={option?.value || option}>
            {option?.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
