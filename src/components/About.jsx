import aboutBackground from '../assets/about-background.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div className="absolute inset-0 bg-indigo-900 bg-opacity-75"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center md:w-2/3 lg:w-1/2 mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi there! I&apos;m Arpit Tiwari, a passionate software Developer developer with a strong focus on crafting user-centric and visually stunning web interfaces. I thrive on the challenge of transforming ideas into interactive and engaging experiences. I&apos;m highly skilled in HTML,React,Shadcn, CSS, and JavaScript, leveraging frameworks like Bootstrap and React to build responsive and performant websites. Accessibility is a key priority for me, and I&apos;m committed to creating inclusive experiences for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
