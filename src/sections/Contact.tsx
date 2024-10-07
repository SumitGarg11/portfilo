import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10">
          <h2>Let's create something amazing together</h2>
          <p>
            Ready to bring your next project to life? Let's connect and discuss
            how I can help you achieve your goals
          </p>
          <button>
            <span>Contact Me</span>
            <ArrowUpRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
