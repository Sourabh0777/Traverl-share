import React from "react";
import { fetchData } from "./Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Test = () => {
  const disptch = useDispatch();
  const responseData = useSelector((state) => state.user);
  console.log("🚀 ~ file: Test.js:7 ~ Test ~ responseData:", responseData);
  const callApiHandler = async () => {
    try {
      disptch(fetchData());
    } catch (error) {
      console.log("🚀 ~ file: Test.js:11 ~ callApiHandler ~ error:", error);
    }
  };
  return (
    <div>
      <button onClick={callApiHandler}>Fetch Data</button>
    </div>
  );
};

export default Test;
