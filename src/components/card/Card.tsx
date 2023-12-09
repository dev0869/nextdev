
import Image from "next/image";
import { AboutCardData } from "@/app/contstants";

const AboutCard = () => {
  return (
    <>
      <div className="cflex gap-3 flex-wrap flex-row"
    
      >
        {AboutCardData.map((ele, i) => {
          const { image, name, para } = ele;
          return (
            <>
              <div key={i}  className="aboutCard items-center">
                <Image
                  alt={"img"}
                  src={image}
                  width={100}
                  height={100}
                />
                <br />
                <h1>{name}</h1>
                <p>{para}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AboutCard;
