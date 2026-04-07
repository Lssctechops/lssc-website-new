const Input = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold" htmlFor="">{label}</label>
      <input
        className="bg-white  border border-gray-200 p-3 rounded-lg"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
