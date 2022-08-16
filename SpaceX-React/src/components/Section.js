import React from "react";

const Section = ({ id, img, title, title_b }) => {
  return (
    <section>
      <img src={img} className="section-img" />
      <div className="section-inner">
        <h4>{title}</h4>
        <h2>{title_b}</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>ReWatch</span>
        </a>
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
    </section>
  );
};

export default Section;
