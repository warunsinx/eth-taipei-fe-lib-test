import axios from "axios";
import React from "react";

export default function OneInchTest() {
  const handleTest = async () => {
    try {
      axios.get("/api/oneinch").then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="border-2 border-white p-2 w-[500px] flex justify-center items-center flex-col relative pt-5">
      <p className="absolute top-0.5 left-1.5 text-sm">One Inch Test</p>
      <p className="cursor-pointer" onClick={handleTest}>
        Call API
      </p>
    </div>
  );
}
