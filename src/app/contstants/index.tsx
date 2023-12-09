import { BsSpeedometer } from "react-icons/bs";

import { AiOutlineControl } from "react-icons/ai";
import { bike1, bike2, bike3, bike4, bike5 } from "@/assets/images/AboutCard";

import {
  GiDigitalTrace,
  GiCharging,
  GiTireTracks,
  GiSuspensionBridge,
} from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";

export const Icons: JSX.Element[] = [
  <FaMotorcycle key="1" />,
  <AiOutlineControl key="2" />,
  <BsSpeedometer key="3" />,
  <GiCharging key="4" />,
  <BsSpeedometer key="5" />,
  <BsSpeedometer key="6" />,
  <GiTireTracks key="7" />,
  <GiTireTracks key="8" />,
  <GiSuspensionBridge key="9" />,
  <GiDigitalTrace key="10" />,
];

export const AboutCardData = [
  {
    image: bike1,
    name: "PASSION",
    para: "We have the ‘JOSH’– we are   driven to deliver our best every day; loving what we do, be bold and have fun",
  },
  {
    image: bike2,
    name: "INTEGRITY",
    para: "Our behavior is ethical and do the right thing when no one is watching.",
  },
  {
    image: bike3,
    name: "RESPECT",
    para: "We show regard and appreciation for everyone; celebrate diversity, act with confidence yet humility.",
  },
  {
    image: bike4,
    name: "COURAGE",
    para: " We are Risk-takers, pioneers, unafraid to question the status-quo",
  },
  {
    image: bike5,
    name: "RESPONSIBLE",
    para: "We are Accountable for our actions and performance; delivering outcomes as a team, caring for each other and the environment.",
  },
];
