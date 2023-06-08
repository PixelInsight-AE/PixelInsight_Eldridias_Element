import { useSelector } from "react-redux";
import { useEffect } from "react";
const GameManager = ({ children }) => {
  const player = useSelector((state) => state.playerManager);

  useEffect(() => {
    console.log("player", player);
  }, [player]);
  return <section className="game-manager">{children}</section>;
};

export { GameManager };
