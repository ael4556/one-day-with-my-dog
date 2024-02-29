import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Title({ title = "หัวข้อ" }) {
  return (
    <p className=" font-mali flex justify-center text-[#d65e35] text-7xl pt-56  font-semibold">
      {title}
    </p>
  );
}

export default Title;
