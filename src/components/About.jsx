import image17 from "../images/image17.jpg";

const About = () => {
  return (
    <div className=" text-white bg-main-color p-2 md:flex flex-col" id="About">
      <h1 className="font-alex font-bold text-5xl text-center p-2   md:text-7xl">
        About
      </h1>
      <article className="flex flex-col items-center md:flex-row justify-center items-center m-2">
        <p className="font-playfair text-1xl md:text-3xl p-3">
          Located in the Penrith area, welcome to Bouquets by Kait, where each
          bouquet is an exclusively designed arrangement, from the choice of the
          vase to the careful selection of colors that perfectly fit all
          aesthetics and special occasions. Just as unique as each individual
          person, every bouquet is a one-of-a-kind piece that adds that extra
          touch to your life.
        </p>
        <img
          src={image17}
          alt="image"
          className="h-[300px] rounded-md md:h-[400px]"
        />
      </article>
    </div>
  );
};

export default About;
