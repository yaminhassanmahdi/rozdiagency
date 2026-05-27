import React from "react";

interface PlayIconProps {
  className?: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      className={className}
    >
      <foreignObject x="-4" y="-4" width="23.6328" height="26.6816">
        <div
          style={{
            backdropFilter: "blur(2px)",
            clipPath: "url(#bgblur_0_5153_3765_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="4"
        d="M0.5 2.50415C0.5 0.921819 2.25049 -0.0338637 3.58151 0.821794L14.2163 7.65846C15.441 8.44573 15.441 10.2359 14.2163 11.0232L3.58152 17.8598C2.2505 18.7155 0.5 17.7598 0.5 16.1775V2.50415Z"
        fill="#BEAB9A"
        stroke="#BEAB9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <defs>
        <clipPath id="bgblur_0_5153_3765_clip_path" transform="translate(4 4)">
          <path d="M0.5 2.50415C0.5 0.921819 2.25049 -0.0338637 3.58151 0.821794L14.2163 7.65846C15.441 8.44573 15.441 10.2359 14.2163 11.0232L3.58152 17.8598C2.2505 18.7155 0.5 17.7598 0.5 16.1775V2.50415Z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayIcon;
