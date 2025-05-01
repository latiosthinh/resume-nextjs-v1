import Contact from './Contact';

const Header = () => {
  return (
    <section className="w-full flex justify-between">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fadeIn">
          Quoc Thinh Nguyen
        </h1>
        <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold">
          Senior Front-End Developter
        </h2>

        <Contact />
      </div>

      <div className="bg-white w-[200px] h-[200px]"></div>
    </section>
  );
};

export default Header;
