const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        {/* Fabulous Logo */}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg">
          SUMMIZE
        </h1>

        {/* GitHub Button */}
        <button
          type="button"
          onClick={() => window.open("https://github.com/ayushpandey2026/")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      {/* Main Hero Heading */}
      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient"> API</span>
      </h1>

      {/* Hero Description */}
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
