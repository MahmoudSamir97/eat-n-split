import { ReactNode, useEffect, useRef, useState } from "react";
import Form from "./Form";
import Friend from "./Friend";
type Friend = {
  id: number;
  image: string;
  name: string;
  balance: number;
};

type FriendListProps = {
  friends: Friend[];
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
  selectedFriend: string;
  setSelectedFriend: (name: string) => void;
  onResetSplit: () => void;
  children?: ReactNode;
};

const FriendList = ({
  friends,
  setFriends,
  selectedFriend,
  setSelectedFriend,
  onResetSplit,
  children,
}: FriendListProps) => {
  const [showForm, setShowForm] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(divEl.current, "divEl");
    // divEl.current = "black";
  }, []);

  return (
    <div className="sidebar" ref={divEl}>
      <ul>
        {friends.map((friend) => {
          return (
            <Friend
              key={friend.id}
              img={friend.image}
              name={friend.name}
              balance={friend.balance}
              selectedFriend={selectedFriend}
              setSelectedFriend={setSelectedFriend}
              onResetSplit={onResetSplit}
            />
          );
        })}
      </ul>
      {!showForm && (
        <button className="button" onClick={() => setShowForm(true)}>
          Add friend
        </button>
      )}

      <Form
        showForm={showForm}
        setShowForm={setShowForm}
        setFriends={setFriends}
      />
      {children}
    </div>
  );
};

export default FriendList;
