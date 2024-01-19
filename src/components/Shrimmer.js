import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const Shrimmer = () => {
  return (
    <div className="shrimer">
      <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} imageWidth={50} />;
    </div>
  );
};

export default Shrimmer;
