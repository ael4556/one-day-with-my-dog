import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Title({ title = "หัวข้อ" }) {
  return (
    <p className=" font-mali flex justify-center text-[#d65e35] text-[3.765vw] pt-[11vw]  font-semibold">
      {title}
    </p>
  );
}

export default Title;
