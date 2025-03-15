const inDevelopment = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/50 via-transparent to-transparent via-40% md:via-40% pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#008083]/50 via-transparent to-transparent via-40% pointer-events-none"></div>

      {/* Content */}
      <div className="flex flex-col gap-4 items-center ">
        <h1 className="md:text-4xl font-bold">Page in Development</h1>
        <p className="text-white/70">
          Please come back later, this page is currently still in development
        </p>
        <a href="/" className="button-primary hover-lift mt-4">
          Go To Home page
        </a>
      </div>
    </div>
  );
};

export default inDevelopment;
