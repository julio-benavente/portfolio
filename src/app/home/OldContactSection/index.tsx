import * as C from "@/components";
import SectionTitle from "../components/SectionTitle";
import SectionInfoContainer from "../components/SectionInfoContainer";
import cls from "@/helpers/cls";

const index = () => {
  return (
    <div>
      <div className={cls("grid grid-cols-2 gap")}>
        <div>
          <SectionTitle>Send me a message</SectionTitle>
          <SectionInfoContainer>
            <p>
              If you have an offer for me as as a Frontend, Backend or Fullstack
              developer let&lsquo;s get in touch. If you have any suggestion
              about this portfolio let me know how I can improve it.
            </p>
          </SectionInfoContainer>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default index;
