import React from "react";
import Button from "./Button";

/*const list = [
  "All",
  "Gaming",
  " Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Cricket",
  "Valentines",
  "Cricket",
  "Cooking",
  "Cricket",
  "Cooking",
  "Prem",
  "Sai",
];
*/
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Valentine" />
    </div>
  );
};

export default ButtonList;
