import { ChangeEvent, SetStateAction, useState } from "react";
import Butoon from "../components/button";
import Card from "../components/card1";
import Navbar from "../components/navbar";
// import haircuts from "../data/Data";
import haircuts from "../data/data.json";
// import haircuts from "../data/Data";

const FilterHaircuts = () => {
  const [headShape, setHeadShape] = useState("");
  const [hairLength, setHairLength] = useState(0);
  const [hairType, setHairType] = useState("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setHairLength(Number(event.target.value));
  };
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
  };

  const filteredHaircuts = haircuts.filter(
    (haircut) =>
      haircut.bestForHeadShape.includes(headShape) &&
      haircut.length.includes(hairLength) &&
      haircut.hairType.includes(hairType)
  );

  return (
    <div className="bg-gray-900 min-h-screen  mx-auto ">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="px-10">
            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2">
                Face Shape{" "}
                <a
                  href="https://www.cutlerandgross.com/us/face-shape-guide?___store=cutler_store_us&___from_store=default"
                  className="underline hover:text-gray-300"
                >
                  ?
                </a>
              </label>
              <div className="grid grid-cols-2 ">
                <div className="pb-2">
                  <button
                    className="rounded-xl w-full px-4 py-2 text-white-100 bg-red-100 text-center focus:outline-none focus:bg-red-200 "
                    value={headShape}
                    onClick={() => setHeadShape("oval")}
                  >
                    oval
                  </button>
                </div>
                <div className="pb-2"></div>
                <button
                  className="rounded-xl px-4 w-full py-2 text-white-100 bg-red-100 text-center focus:outline-none focus:bg-red-200"
                  value={headShape}
                  onClick={() => setHeadShape("square")}
                >
                  square
                </button>{" "}
                <br />
                <div>
                  <div className="pb-2"></div>
                  <button
                    className="rounded-xl px-4 w-full py-2 text-white-100 bg-red-100 text-center focus:outline-none focus:bg-red-200"
                    value={headShape}
                    onClick={() => setHeadShape("rectangle")}
                  >
                    rectangle
                  </button>{" "}
                  <div className="pb-2"></div>
                  <button
                    className="rounded-xl px-4  w-full py-2 text-white-100 bg-red-100 text-center focus:outline-none focus:bg-red-200"
                    value={headShape}
                    onClick={() => setHeadShape("diamond")}
                  >
                    diamond
                  </button>{" "}
                </div>
                <br />
                <div>
                  <div className="pb-2"></div>
                  <button
                    className="rounded-xl w-full px-4 py-2 text-white-100 bg-red-100 text-center focus:outline-none focus:bg-red-200"
                    value={headShape}
                    onClick={() => setHeadShape(" heart")}
                  >
                    heart
                  </button>{" "}
                  <div className="pb-2"></div>
                  <button
                    className="rounded-xl px-4 py-2 w-full text-white-100 bg-red-100 text-center focus:outline-none focus:bg-red-200"
                    value={headShape}
                    onClick={() => setHeadShape("round")}
                  >
                    round
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white-100 font-bold mb-2">
                Hair Length:
              </label>
              <input
                className=" rounded py-2 px-3 text-gray-400 bg-gray-700 focus:outline-none"
                value={hairLength}
                onChange={onChangeHandler}
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                HairType:
              </label>
              <select
                className="bg-gray-700 rounded py-2 px-3 text-gray-400 focus:outline-none  "
                value={hairType}
                onChange={(e) => setHairType(e.target.value)}
              >
                <option value="">Select Hair Type</option>
                <option value="straight">Straight</option>
                <option value="wavy">Wavy</option>
                <option value="curly">Curly</option>
                <option value="coily">Coily</option>
              </select>
            </div>
          </form>
        </div>
        <div className="mt-4 grid md:grid-cols-3 grid-cols-1 p-20 md:p-4">
          {filteredHaircuts.map((haircut) => (
            <Card
              key={haircut.id}
              image={haircut.image}
              name={haircut.name}
              style={haircut.style}
              etc={haircut.etc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterHaircuts;
