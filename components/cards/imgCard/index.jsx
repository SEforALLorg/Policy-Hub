import React from "react";

const ImgCard = ({ img, title, className, link, imgStyle }) => {
  return (
    <div>
      <div className={className}>
        <img src={img} alt={img || 'card_image'} className="max-w-full" style={imgStyle} />
      </div>
      <a
        className="text-anqrtext no-underline not-italic	font-normal	xsm:text-xsmall small:text-tiny leading-5 text-center block"
        href={link}
        target={"_blank"}
      >
        {title}
      </a>
    </div>
  );
};

export default ImgCard;
