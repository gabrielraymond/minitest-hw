"use client";
import Textarea from "@/components/textarea/Textarea";
import React, { useState } from "react";

const Page = () => {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    const input = e.target.value;

    setText(input);
  };
  return (
    <div className="bg-slate-400 w-full h-screen">
      <h1>TextArea</h1>
      <Textarea limit={300} onChange={handleChange} placeholder={'hello_there'} value={text} />

      <p className=" w-[100px]">{text}</p>
    </div>
  );
};

export default Page;
