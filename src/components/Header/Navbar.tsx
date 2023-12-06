"use client";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "./Constraits";
import { useRouter } from "next/navigation";
import { SpecialButton } from "../button/SpecialButton";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      {/* <div className=" flex justify-end row">
        <div className="dflex row gap-4">
          <Stack
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
          >
            <Image src={india} alt="" />
            <p
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              India
            </p>
          </Stack>

          {!user ? (
            <Link to={"./login"}>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
              >
                <img src={pep} alt="" />
                <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </p>
              </Stack>
            </Link>
          ) : (
            <div className="flex gap-2 items-center">
              <p
                style={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Hi {user.name} !
              </p>
              <AiOutlineLogout
                onClick={handlelogout}
                className="cursor-pointer"
                fontSize={20}
                color="white"
              />
              {user.name && (
                <Link
                  to={user.role === "admin" ? "/admin" : "/orders"}
                  className="text-light ms-2 font-bold flex items-center gap-2"
                >
                  <RxDashboard />
                  Dashboard
                </Link>
              )}
            </div>
          )}
        </div>
      </div> */}

      <nav className="dflex p-5">
        <div>
          <Image
            style={{ cursor: "pointer" }}
            src={logo}
            alt=""
            className="logo"
            width={120}
            onClick={() => router.push("/")}
          />
        </div>

        <div className="dflex gap-4">
          {Routes.map((ele, id) => (
            <Link
              href={ele.path}
              className="font-bold  black hover:text-[orangered] transition-[0.3s] "
              key={id}
            >
              <p> {ele.name}</p>
            </Link>
          ))}
        </div>

        <div
          className="dflex gap-2
        width={500}"
        >
          <SpecialButton name={'Book Now'}/>
          <SpecialButton name={'Become A Dealer'} />
        </div>
      </nav>
    </>
  );
}
