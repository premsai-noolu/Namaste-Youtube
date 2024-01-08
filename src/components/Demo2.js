import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  console.log(ref);

  const i = useRef(null);
  console.log("Rendering...");
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("namaste " + Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <h1 className="font-bold text-xl">Let = {x}</h1>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <h1 className="font-bold text-xl">const = {y}</h1>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            ref.current += 1;
            console.log("ref =" + ref.current);
          }}
        >
          Increase Ref
        </button>
        <h1 className="font-bold text-xl">Ref = {ref.current}</h1>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        {" "}
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
