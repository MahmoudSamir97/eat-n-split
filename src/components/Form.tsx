import { useState } from "react";

type FormProps = {
  showForm: boolean;
  setShowForm: (val: boolean) => void;
  setFriends: React.Dispatch<React.SetStateAction<FriendType[]>>;
};

type FriendType = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

const Form = ({ showForm, setShowForm, setFriends }: FormProps) => {
  const [friendName, setFriendName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");

  const addHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newFriend = {
      id: Math.floor(Math.random() * 1000000 + 1),
      name: friendName,
      image: imageURL,
      balance: 0,
    };
    setFriends((prev: FriendType[]) => [...prev, newFriend]);
    setShowForm(false);
  };
  return (
    <>
      {showForm && (
        <>
          <form className="form-add-friend">
            <label htmlFor="friend">Friend name</label>
            <input
              type="text"
              id="friend"
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
            />
            <label htmlFor="image">Image url</label>
            <input
              type="text"
              id="image"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <button className="button" onClick={addHandler}>
              Add
            </button>
          </form>
          <button className="button" onClick={() => setShowForm(false)}>
            close
          </button>
        </>
      )}
    </>
  );
};

export default Form;
