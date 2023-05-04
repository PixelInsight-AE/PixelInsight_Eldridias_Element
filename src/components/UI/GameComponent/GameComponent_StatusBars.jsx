const PartyStatusBar = (props) => {
  const { battle } = props;
  return (
    <div id="PlayerStatusBar">
      <h2>stas bar</h2>
    </div>
  );
};

const EnemyStatusBar = (props) => {
  const { battle } = props;
  return (
    <div id="EnemyStatusBar">
      <h2>enemy status bar</h2>
    </div>
  );
};

export { PartyStatusBar, EnemyStatusBar };
