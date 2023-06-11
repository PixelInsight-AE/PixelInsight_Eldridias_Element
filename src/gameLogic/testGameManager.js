import { useSelector } from 'react-redux';
export const gameManager = {
  player: useSelector((state) => state.player);
  name: player.name,
  isTurn: player.isTurn,
  mana: player.mana,
 
  playTurn: function () {},
  endTurn: function () {},
  death: function () {},
  deathCheck: function (target) {},
  attack: function (attacker, defender) {},
  specialAttack: function (attacker, defender) {},
  resetStats: function () {},
  gameOver: function () {},
};
