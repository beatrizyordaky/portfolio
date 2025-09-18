import { devName } from "../constants";
import { styles } from "../styles";
import { AnimationCanvas, Particles } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="relative w-full h-[600px]">
        {/* Particles Layer */}
        <div className="absolute inset-0 w-full h-screen">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Animation Canvas Layer */}
        {/* <div className="absolute inset-0 w-full h-full pointer-events-auto z-20">
          <AnimationCanvas />
        </div> */}

        {/* Hero Content */}
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          {/* Side Accent */}
          <div className="flex flex-col items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>

          {/* Main Text */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">{devName}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a full-stack software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
