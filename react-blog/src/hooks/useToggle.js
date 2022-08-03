import { useState } from "react";

export default function useToggle(initValue = false) {
  const [toggle, setToggle] = useState(initValue);
  const changeToggle = () => setToggle(!toggle);
  return [toggle, changeToggle];
}