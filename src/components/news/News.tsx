import { ArrowRight } from "lucide-react";

const News = () => {
  return (
    <section className="w-full py-24 bg-white text-black relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover the art of film direction
            <br />
            through my vision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">
              Exciting Updates on my Latest Film Projects and Screenings
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              My recent film screening at the Amsterdam Film Festival received
              rave reviews.
            </p>
            <a
              href="#"
              className="flex items-center text-sm font-medium mt-auto"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* News Item 2 */}
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">
              Upcoming Workshops: Enhance Your Filmmaking Skills
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Join our upcoming workshops to learn directly from my expertise.
            </p>
            <a
              href="#"
              className="flex items-center text-sm font-medium mt-auto"
            >
              Sign Up <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* News Item 3 */}
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">
              Catch my Latest Interviews and Insights on Filmmaking
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Discover my thoughts on the evolving landscape of cinema in my
              latest interview.
            </p>
            <a
              href="#"
              className="flex items-center text-sm font-medium mt-auto"
            >
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
