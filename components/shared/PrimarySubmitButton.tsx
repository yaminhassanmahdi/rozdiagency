interface PrimarySubmitButtonProps {
  buttonText: string;
  className?: string;
  buttonClass?: string;
  buttonTextClass?: string;
}

const PrimarySubmitButton = ({
  buttonText,
  className = "",
  buttonClass = "",
  buttonTextClass = "",
}: PrimarySubmitButtonProps) => (
  <button type="submit" className={`${className} w-full`} aria-label="Learn more">
    <div
      className={`bg-background-4 group button ${buttonClass} font-ibm-plex-mono text-tagline-2 text-background-11 button-inner flex h-13 w-full cursor-pointer items-center rounded-2xl p-1 font-normal first-letter:uppercase`}
    >
      <div className="button-icon relative z-20 h-11 w-15 overflow-hidden rounded-[13px]" aria-hidden="true">
        <div className="absolute inset-0 z-10 overflow-hidden bg-linear-to-r from-[#ffffff00] from-0% to-[#000000] to-100% transition-all duration-700 ease-in-out" aria-hidden="true">
          <div className="bg-opai-purple relative z-10 flex size-full items-center justify-center" style={{ boxShadow: "0 3px 10px 0 rgba(255, 255, 255, 0.4) inset" }}>
            <span className="flex size-6 items-center justify-center" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="size-[14px] fill-white/80">
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
      <span className={`button-text ${buttonTextClass} shrink-0 stroke-0 px-4`} aria-hidden="true">
        {buttonText}
      </span>
    </div>
  </button>
);

export default PrimarySubmitButton;
