import img from "../../src/assets/game.jpeg"; // Replace with actual image path

const GameSection = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <div className="md:flex md:items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <img
            src={img}
            alt="Gaming Experience"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Conquer New Worlds with Your Gaming Skills
          </h1>
          <p className="text-lg mb-6">
            Unleash your inner hero in thrilling games filled with intense action, strategy, and adventure. From slaying dragons in mythical lands to navigating futuristic cities, your journey will be as epic as the games you play. Ready to take on challenging quests, build your empire, or team up for global multiplayer battles? The world of gaming awaits your expertise!
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default GameSection;
