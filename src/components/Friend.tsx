type FriendProps = {
  img: string;
  name: string;
  balance: number;
  selectedFriend: string;
  setSelectedFriend: (name: string) => void;
  onResetSplit: () => void;
};

const Friend = ({
  img,
  name,
  balance,
  selectedFriend,
  setSelectedFriend,
  onResetSplit,
}: FriendProps) => {
  //
  const onSelectHandler = () => {
    setSelectedFriend(name);
    // onResetSplit();
  };

  return (
    <li>
      <img src={img} alt="friend img" />
      <h3>{name}</h3>
      <p className={balance > 0 ? "green" : balance < 0 ? "red" : ""}>
        {balance > 0 ? (
          `${name} owes you ${balance}€`
        ) : balance < 0 ? (
          `You owe ${name} ${Math.abs(balance)}€`
        ) : (
          <p>You and {name} are even</p>
        )}
      </p>
      {selectedFriend === name ? (
        <button className="button" onClick={() => setSelectedFriend("")}>
          Close
        </button>
      ) : (
        <button className="button" onClick={onSelectHandler}>
          Select
        </button>
      )}
    </li>
  );
};

export default Friend;
