import { useEffect, useState } from "react";

const useHighlightAcitve = (sections: Array<string>) => {
  const [state, setState] = useState<string>("");

  const sectionIsActive = (section: string, scrollY: number) => {
    const sectionElement = document.querySelector(section) as HTMLElement;

    if (sectionElement === null) {
      throw Error(`The ${section} section does not exits.`);
    }

    const navbarHeight = 100;

    const upperLimit = sectionElement.offsetTop - navbarHeight;
    const lowerLimit = upperLimit + sectionElement.clientHeight;

    const isActive = upperLimit <= scrollY && scrollY < lowerLimit;

    return isActive;
  };

  const checkActiveness = (sections: Array<string>) => {
    const scrollY = window.scrollY;

    for (let section of sections) {
      if (sectionIsActive(section, scrollY)) {
        return setState(section);
      }
    }

    return setState("");
  };

  useEffect(() => {
    if (window === null) {
      throw Error("There is not window.");
    }

    window.addEventListener("scroll", () => checkActiveness(sections));
    checkActiveness(sections);
    return () => {
      window.removeEventListener("scroll", () => checkActiveness(sections));
    };
  }, []);

  return state;
};

export default useHighlightAcitve;
