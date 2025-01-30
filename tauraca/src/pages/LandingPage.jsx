import headerImage from "../assets/header.jpg";

function LandingPage() {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="relative text-center px-6">
        <h2 className="text-4xl font-bold">Explore the World with TravelApp</h2>
        <p className="mt-4 text-lg">Find your next adventure with us.</p>
      </div>
    </div>
  );
}

export default LandingPage;
