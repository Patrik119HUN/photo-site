import {useNavigate } from "react-router-dom";

export default function BackButton(){
    let navigate = useNavigate();

    return(<div className="flex align-middle cursor-pointer w-fit" onClick={() => navigate(-1)} >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"

      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
    <p className=" text-white text-4xl">Back</p>
  </div>
    );
}
