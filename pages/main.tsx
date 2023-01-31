import { useState } from "react";
import haircuts from "../data/Data";
const HaircutFinder = () => {
  const [userHeadShape, setUserHeadShape] = useState("");
  const [userHairType, setUserHairType] = useState("");
  const [userHairLength, setUserHairLength] = useState(0);
  const [filteredHaircuts, setFilteredHaircuts] = useState(haircuts);

  const handleHeadShapeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserHeadShape(event.target.value);
  };

  const handleHairTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserHairType(event.target.value);
  };

  const handleHairLengthChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserHairLength(parseFloat(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilteredHaircuts(
      haircuts.filter(
        (haircut) =>
          (userHeadShape === "" ||
            haircut.bestForHeadShape.includes(userHeadShape)) &&
          (userHairType === "" || haircut.hairType.includes(userHairType)) &&
          haircut.length.includes(userHairLength)
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Head Shape:
          <select
            value
            John
            Bekfast
            continue
            on={userHeadShape}
            onChange={handleHeadShapeChange}
          >
            <option value=""></option>
            <option value="oval">Oval</option>
            <option value="square">Square</option>
            <option value="heart">Heart</option>
            <option value="round">Round</option>
            <option value="diamond">Diamond</option>
            <option value="long">Long</option>
          </select>
        </label>
        <br />
        <label>
          Hair Type:
          <select value={userHairType} onChange={handleHairTypeChange}>
            <option value=""></option>
            <option value="straight">Straight</option>
            <option value="wavy">Wavy</option>
            <option value="curly">Curly</option>
            <option value="coily">Coily</option>
          </select>
        </label>
        <br />
        <label>
          Hair Length:
          <input value={userHairLength} onChange={handleHairLengthChange} />
        </label>
        <br />
        <button type="submit">Filter</button>
      </form>
      <br />
      <div>
        {filteredHaircuts.map((haircut) => (
          <div key={haircut.name}>
            <img src={haircut.image} alt={haircut.name} />
            <p>Name: {haircut.name}</p>

            <p>Length: {haircut.length}</p>
            <p>Hair Type: {haircut.hairType.join(", ")}</p>
            <p>Style: {haircut.style}</p>
            <p>Best For Head Shape: {haircut.bestForHeadShape.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HaircutFinder;
