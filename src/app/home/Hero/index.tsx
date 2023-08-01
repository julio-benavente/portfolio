import HeroImage from "@/../public/assets/images/profile-test-guy.jpeg";
import Image from "next/image";
import cls from "@/helpers/cls";
import StarRounded from "@mui/icons-material/StarRounded";
import ArrowCircleDownOutlined from "@mui/icons-material/ArrowCircleDownOutlined";
import Underline from "@/../public/assets/images/underline.svg";
import * as C from "@/components";

const Hero = () => {
  return (
    <div id="home" className="bg-primaryBg border-b-2 border-black">
      <div className="mx-6 py-28">
        <div className="flex flex-col gap-y-12">
          <div className="rounded-tl-[300px] rounded-tr-[300px] rounded-bl-xl rounded-br-xl overflow-hidden base-border">
            <Image src={HeroImage} alt="Hero image" />
          </div>
          <div className="flex flex-col items-center">
            <C.Badge className="mb-7">Hello!</C.Badge>

            <h1 className="text-5xl font-bold text-center mb-4">
              I'm Julio Benavente,
              <br /> a{" "}
              <span className="relative">
                frontend
                <span className="absolute w-[100%] inline-block -bottom-2 left-0">
                  <Image src={Underline} alt="underline" />
                </span>
              </span>{" "}
              developer.
            </h1>

            <p className="text-xl text-center mb-7">
              I&lsquo;m a frontend developer based in Lima, Peru. I&lsquo;m very
              passionate about the work I do.
            </p>

            <C.Button icon={ArrowCircleDownOutlined}>See My Works</C.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
