import React from 'react';
import Link from 'next/link';

interface LinkPrimaryV2Props {
  buttonText: string;
  href: string;
  className?: string;
  buttonTextClass?: string;
}

const LinkPrimaryV2: React.FC<LinkPrimaryV2Props> = ({
  buttonText,
  href,
  className = '',
  buttonTextClass = '',
}) => {
  return (
    <Link href={href} className="group w-full" aria-label="Learn more">
      {/* wrapper  */}
      <div
        className={`${className} group relative flex h-[52px] w-full cursor-pointer items-center justify-center rounded-2xl p-1`}
      >
        <div
          className="lp:group-hover:left-[82%]! absolute left-[1%] z-20 h-11 w-15 overflow-hidden rounded-[13px] transition-[left] duration-700 ease-in-out group-hover:left-[80%] max-[376px]:group-hover:left-[75%] md:group-hover:left-[82%] lg:group-hover:left-[74%]"
          aria-hidden="true"
        >
          <div
            className="size-full rounded-[13px] bg-linear-to-r from-[#ffffff00] from-0% to-[#000000] to-100%"
            aria-hidden="true"
          >
            <div
              className="bg-opai-purple relative z-10 flex size-full items-center justify-center rounded-[13px]"
              style={{ boxShadow: '0 3px 10px 0 rgba(255, 255, 255, 0.4) inset' }}
            >
              {/* icon  */}
              <span className="flex size-6 items-center justify-center p-[5px]" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  className="size-[14px] fill-white/80"
                >
                  <path d="M6 0H8V2H6V0Z" />
                  <path d="M0 0H2V2H0V0Z" />
                  <path d="M9 3H11V5H9V3Z" />
                  <path d="M3 3H5V5H3V3Z" />
                  <path d="M12 6H14V8H12V6Z" />
                  <path d="M6 6H8V8H6V6Z" />
                  <path d="M9 9H11V11H9V9Z" />
                  <path d="M3 9H5V11H3V9Z" />
                  <path d="M6 12H8V14H6V12Z" />
                  <path d="M0 12H2V14H0V12Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* content  */}
        <span
          className={`font-ibm-plex-mono text-tagline-2 text-background-11 lp:group-hover:left-[20%]! ${buttonTextClass} absolute left-1/2 shrink-0 -translate-x-1/2 stroke-0 px-4 text-center font-normal text-nowrap transition-[left] duration-700 ease-in-out group-hover:left-[20%] first-letter:uppercase max-[376px]:group-hover:left-[25%] lg:group-hover:left-[25%]`}
          aria-hidden="true"
        >
          {buttonText}
        </span>
      </div>
    </Link>
  );
};

export default LinkPrimaryV2;
