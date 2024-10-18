import { useState } from "react";
import FriendList from "./components/FriendList";
import SplitPopup from "./components/SplitPopup";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");
  //
  const [billObj, setBillObj] = useState({
    billValue: "",
    expenseValue: "",
    payingPerson: "you",
  });

  const onResetSplit = () => {
    setBillObj({
      billValue: "",
      expenseValue: "",
      payingPerson: "you",
    });
  };

  return (
    <div className="app">
      <FriendList
        friends={friends}
        setFriends={setFriends}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        onResetSplit={onResetSplit}
      />
      {selectedFriend && (
        <SplitPopup
          key={selectedFriend}
          billObj={billObj}
          setBillObj={setBillObj}
          friends={friends}
          setFriends={setFriends}
          name={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      )}
      {/* <Form /> */}
    </div>
  );
}

export default App;
