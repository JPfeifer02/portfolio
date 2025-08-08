import { useState } from "react";
import "../index.css";
import { ImGift } from "react-icons/im";

const hobbies = [
  {
    title: "Piano",
    description: "I enjoy playing classical and contemporary pieces on the piano.",
    image: "/public/Hobbies/Ballade4.MOV"
  },
  {
    title: "Pickleball",
    description: "I play competitive pickleball on weekends and enjoy the social aspect of the game.",
    image: "/public/Hobbies/Pickleball.jpg"
  },
  {
    title: "Lifting",
    description: "I enjoy weightlifting and strength training to stay fit.",
    //image: "/public/Hobbies/Lifting.jpg"
  },
  {
    title: "Cooking",
    description: "I love experimenting with new recipes and cooking techniques in the kitchen.",
    image: "/public/Hobbies/Steak.jpg"
  },
  {
    title: "Farming",
    description: "I help out on my family's farm, learning about sustainable agriculture and animal care.",
    image: "/public/Hobbies/Haybales.jpg"
  },
];

function Hobbies() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--text-color)" }}>
        Hobbies & Interests
      </h2>

      {/* Grid of hobbies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            onClick={() => setSelected(hobby)}
            className="cursor-pointer p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "var(--text-color)",
            }}
            >
            <img 
                src={hobby.image} 
                alt={hobby.title} 
                className="w-full h-48 object-cover rounded mb-4"
                style={{ display: hobby.image ? 'block' : 'none' }}
            />
            <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[var(--bg-color)] p-8 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-3 right-3 text-xl font-bold"
              style={{ color: "var(--accent-color)" }}
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--accent-color)" }}>
              {selected.title}
            </h3>
            <p style={{ color: "var(--text-color)" }}>{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hobbies;
