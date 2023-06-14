import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { playerActions } from "../../store/slices/playerSlice";
import { battleActions } from "../../store/slices/battleSlice";
const GameManager = () => {
  const battle = useSelector((state) => state.battleManager);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const playTurn = () => {
    dispatch(playerActions.addMana(5));
  };
  const endTurn = () => {};
  const deathCheck = (subject) => {
    if (subject.health <= 0) {
      death(subject);
    }
  };
  const death = (subject) => {
    subject.imgUrl = subject.deathImgUrl;
  };
  const attack = () => {
    console.log(battle);
    if (battle.targetMonster.health <= 0) {
      return;
    }

    battle.targetMonster.health -= battle.targetHero.attackPower;
    dispatch(battleActions.setTargetMonster(battle.targetMonster));
    deathCheck(battle.targetMonster);
  };
  const specialAttack = (attacker, defender) => {
    defender.health -= attacker.specialAttackPower;
  };
  const resetStats = () => {};
  const gameOver = () => {
    //game over function
    navigate("/dashboard");
  };

  return {
    playTurn,
    endTurn,
    deathCheck,
    death,
    attack,
    specialAttack,
    resetStats,
    gameOver,
  };
};

export { GameManager };
