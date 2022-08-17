import { useSelector } from "react-redux";
import { inner } from "../sectionData";
const InnerSection = () => {
  const { urlName } = useSelector((state) => state.menu);
  const { h3, p, img } = inner.find((item) => item.link === urlName);

  console.log(h3);
  const id = 6;
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
    </>
  );
};

export default InnerSection;
