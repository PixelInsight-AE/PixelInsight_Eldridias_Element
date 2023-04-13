import { heroList } from "../../vanillaJsFiles/heros.js";

const CardExamples = (props) => {
  return (
    <div id="party">
      {heroList.map((hero) => {
        return <PlayingCard key={hero.name} {...hero} />;
      })}
    </div>
  );
};

const PlayingCard = (props) => {
  return (
    <div key={props.name} className="hero">
      <div className="heroName">{props.name}</div>
      <div className="heroLevel">{props.heroLevel}</div>
      <div className="heroImg">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="heroType">{props.elementType}</div>
      <div className="heroActions">
        <button className="heroActionBtn">Equip Gear</button>
      </div>
    </div>
  );
};

export { CardExamples };
