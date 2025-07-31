import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      <h1 className="opacity-70 absolute blur-lg whitespace-nowrap text-[100vw] leading-none font-bold">
        404
      </h1>

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-more-muted via-transparent to-transparent via-40% md:via-40% pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-more-muted via-transparent to-transparent via-40% pointer-events-none"></div>

      <div className="glass-panel flex flex-col justify-center items-center p-gap-md rounded-lg">
        <p className="text-xl font-serif italic mb-gap-sm">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="inline-block button-primary hover-lift animate-fadeIn"
          style={{ animationDelay: "1.4s" }}
        >
          Go to Home Page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
