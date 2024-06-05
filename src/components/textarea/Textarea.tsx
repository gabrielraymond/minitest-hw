import React, { useState } from "react";

const Textarea = ({
  limit,
  onChange,
  placeholder,
  value,
}: {
  limit: number;
  onChange: any;
  placeholder: string;
  value: any;
}) => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(limit);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: any) => {
    const input = e.target.value;
    if (input.length <= limit) {
      setText(input);
      onChange(e);
      setRemaining(limit - input.length);
    }
  };

  return (
    <div
      className={`w-full max-w-md mx-auto mt-10 bg-white ${
        isFocused ? "ring-2 ring-blue-500 border-blue-500" : "border-gray-300"
      } rounded-lg  px-2 py-2 h-[400px]`}
    >
      <textarea
        className="w-full h-[90%] p-2 rounded-md focus:outline-none resize-none text-slate-950 overflow-hidden"
        value={text}
        onChange={handleChange}
        maxLength={limit}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="text-right text-gray-500 mb-1 mr-2">
        {remaining}/{limit}
      </div>
    </div>
  );
};

export default Textarea;
