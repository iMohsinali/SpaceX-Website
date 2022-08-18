import { useEffect } from "react";
import { useSelector } from "react-redux";
import { inner } from "../sectionData";
import { hideNav } from "../Features/states";
import { useDispatch } from "react-redux";
import { useState } from "react";
const InnerSection = () => {
  const { urlName } = useSelector((state) => state.menu);
  const { h3, p, img, targetValue } = inner.find(
    (item) => item.link === urlName
  );
  const dispatch = useDispatch();
  const controlNavbar = () => {
    if (window.scrollY > 146) {
      dispatch(hideNav(true));
      // console.log(window.scrollY);
    }
    if (window.scrollY < 100) {
      console.log("imohsin");
      setcount({
        ...count,
        // Ta: targetValue.Ta,
        // Tb: targetValue.Tb,
        // Tc: targetValue.Tc,
      });
    }
    if (window.scrollY > 100) {
      console.log("imohsin ali");

      setcount({
        ...count,
        Ta: targetValue.Ta,
        Tb: targetValue.Tb,
        Tc: targetValue.Tc,
      });
    } else {
      dispatch(hideNav(false));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const id = 6;
  const [count, setcount] = useState({ Ta: 0, Tb: 0, Tc: 0 });

  console.log(count);
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="section-animate bg-falcon-9"
      ></section>
      <div className="section-inner-center">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
      {id != 6 && (
        <div class="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              stroke-width="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
            />
          </svg>
        </div>
      )}

      <div class="stats">
        <div>
          <span class="counter" data-target="10">
            {count.Ta}
          </span>
          <h4>Total Launches</h4>
        </div>
        <div>
          <span class="counter" data-target="15">
            {count.Tb}
          </span>
          <h4>Total Landing</h4>
        </div>
        <div>
          <span class="counter" data-target="7">
            {count.Tc}
          </span>
          <h4>Total ReFlight</h4>
        </div>
      </div>
    </>
  );
};

export default InnerSection;
