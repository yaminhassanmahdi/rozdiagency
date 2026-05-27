import LinkPrimary from "@/components/shared/LinkPrimary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-background-8">
        <section className="pt-24 pb-6 xl:pt-44 xl:pb-0">
          <div className="main-container">
            <div
              data-opai-animate
              data-delay="0.1"
              className="rounded-3xl bg-white px-3.5 py-20 lg:px-0 xl:py-44"
            >
              <div>
                <div className="text-center">
                  <h1
                    data-text-reveal
                    data-delay="0.2"
                    className="font-sora text-background-13/90 text-[60px] leading-[70px] font-normal sm:text-[120px] sm:leading-[180px] md:text-[160px] xl:text-[200px] xl:leading-[240px] xl:tracking-[-10px]"
                  >
                    404
                  </h1>
                  <h2
                    data-text-reveal
                    data-delay="0.3"
                    className="lg:text-sora-heading-2 sm:text-sora-heading-4 text-sora-heading-5 text-background-13/90 mb-3 font-normal"
                  >
                    Oops! Page<br className="hidden md:block" />
                    Not Found
                  </h2>
                  <p
                    data-text-reveal
                    data-delay="0.4"
                    className="text-tagline-2 text-background-13/60 mx-auto max-w-xs font-normal"
                  >
                    The page doesn’t exist or was moved. Don’t worry, we’ll guide you back.
                  </p>
                  <div
                    data-opai-animate
                    data-delay="0.5"
                    data-instant
                    className="mt-10 flex justify-center text-center lg:mt-18"
                  >
                    <LinkPrimary
                      buttonText="Back to Home"
                      href="/"
                      className="w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
