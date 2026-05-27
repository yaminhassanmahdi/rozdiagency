import PrimarySubmitButton from "@/components/shared/PrimarySubmitButton";
import LocationIcon from "@/components/shared/LocationIcon";

const ContactForm = () => {
  return (
    <section className="pt-28 pb-20 md:pt-39 md:pb-28 lg:pb-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[600px] font-normal"
            >
              Reach out — We’ll get back within 24 hours
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[300px] font-normal"
            >
              Fill out the form below, and a member of our team will be in touch shortly.
            </p>
          </div>

          <div
            data-opai-animate
            data-delay="0.3"
            data-instant
            className="flex flex-col items-center justify-center gap-y-10 rounded-xl bg-white p-4 md:rounded-3xl md:p-8 lg:flex-row lg:gap-x-14 lg:gap-y-0"
          >
            {/* form */}
            <form data-opai-animate data-delay="0.4" data-instant action="#" className="w-full space-y-6">
              <div>
                {/* email */}
                <fieldset className="mb-6 space-y-2 text-left">
                  <label htmlFor="email" className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block">Your email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                    required
                    aria-label="Your email"
                  />
                </fieldset>

                {/* password */}
                <fieldset className="mb-6 space-y-2 text-left">
                  <label htmlFor="password" className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                    required
                    aria-label="Password"
                  />
                </fieldset>

                {/* your message */}
                <fieldset className="mb-4 space-y-2 text-left">
                  <label htmlFor="message" className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block">Your message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 h-45.5 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                  ></textarea>
                </fieldset>

                {/* remember me and forget password */}
                <fieldset className="mb-14 flex items-center justify-between gap-x-5 text-left">
                  <label className="flex cursor-pointer items-center gap-x-3 sm:gap-1.5">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                      className="peer sr-only"
                      aria-label="I accept with the Terms of uses and privacy policy"
                    />
                    <span
                      className="border-stroke-3/18 peer-checked:border-background-13/60 after:bg-background-13/50 relative size-5 cursor-pointer rounded-[2px] border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"
                    ></span>
                    <span
                      className="text-tagline-3 text-background-13/60 peer-checked:text-background-13/90 font-medium select-none"
                    >
                      I accept with the Terms of uses and privacy policy
                    </span>
                  </label>
                </fieldset>

                {/* submit request button */}
                <div className="inline-block">
                  <PrimarySubmitButton buttonText="Submit request" />
                </div>
              </div>
            </form>

            {/* img */}
            <div
              data-opai-animate
              data-delay="0.4"
              data-instant
              className="h-[330px] w-full rounded-2xl md:h-[563px]"
            >
              <figure className="relative size-full overflow-hidden rounded-2xl">
                <img
                  src="/images/opai-img-27.png"
                  alt="contact-form-img"
                  className="size-full object-cover"
                />

                <div
                  data-opai-animate
                  data-delay="0.5"
                  className="bg-background-13/20 absolute top-1/2 left-1/2 flex h-12 w-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-2.5 rounded-lg backdrop-blur-md md:w-[334px]"
                >
                  <span>
                    <LocationIcon className="size-6 fill-white/90" />
                  </span>

                  <span className="font-inter-tight text-tagline-3 font-normal text-white/90">
                    1320 Geoage ST Brisbane, QLD, Japan 4009
                  </span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
