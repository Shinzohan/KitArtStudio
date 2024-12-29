import AnimatedTitle from "./AnimatedTitle";
import StyleButton from "./styleButton";


const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-3xl bg-gradient-to-r from-zinc-800 to-black shadow-xl shadow-purple-300 py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">

        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">

        </div>

        <div className="flex flex-col items-center text-center">


          <AnimatedTitle
            title="let&#39;s D<b>R</b>AW something <br /> Togthere <br /> HI<b>R</b>E M<b>E</b>"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <StyleButton
            title={"Contact Me"}
            className="mt-10 shadow-[0_8px_0_#A19AD3] p-2"
            href="mailto:kit99shri@gmail.com"
            target="_blank"
          />



        </div>
      </div>
    </div>
  );
};

export default Contact;
