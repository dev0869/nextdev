import { AiFillHome } from "react-icons/ai";
import { GiScooter } from "react-icons/gi";
import { RiMotorbikeFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";


 type RouteProps={
  name:string,
  path:string,
  icon:JSX.Element,

}
export const Routes:RouteProps[] = [
  {
    name: "HOME",
    path: "/",
    icon: <AiFillHome/>
  },
  {
    name: "E-SCOOTER",
    path: "/e-scooter",
    icon: <GiScooter/>,
  },
  {
    name: "E-BIKE",
    path: "/e-bike",
    icon: <RiMotorbikeFill />,
  },
  {
    name: " ABOUT US",
    path: "/about",
    icon: <AiFillCustomerService />,
  },
  {
    name: "CONTACT US",
    path: "/contact",
    icon: <BsFillTelephoneFill />,
  },

  {
    name: "LATEST-NEWS",
    path: "/blogs",
    icon: <BsFillTelephoneFill />,
  },
];