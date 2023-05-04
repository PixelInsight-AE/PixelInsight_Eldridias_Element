const VictoryComponent = (props) => {
  const { state, setState } = props;

  const handleLevelChange = () => {
    setState({
      ...state,
      currentWave: 0,
      floor: state.computer.waveGenerator(
        state.sceneManager[0],
        state.difficulty
      ),
    });
    state.computer.isBossDefeated = false;
  };
  return (
    <div>
      <h1>You Completed The Floor</h1>
      <Link to="/dashboard/story">
        <button onClick={handleLevelChange}>
          <h2>Next Floor</h2>
        </button>
      </Link>
      <Link to="/dashboard/story">
        <button onClick={handleLevelChange}>
          <h2>Return To Town</h2>
        </button>
      </Link>
    </div>
  );
};

const VictoryMessageLootBox = (props) => {
  const { state, setState } = props;

  const victoryMessage = <VictoryComponent state={state} setState={setState} />;

  return (
    <div className="battlefield">
      <div className="battle-animation">
        {state.computer.isBossDefeated ? victoryMessage : <h1>VS</h1>}
      </div>
      <div id="LootBox">
        {state.story[state.currentStory].isReward ? <h2>lootbox</h2> : null}
      </div>
    </div>
  );
};

export { VictoryMessageLootBox };
