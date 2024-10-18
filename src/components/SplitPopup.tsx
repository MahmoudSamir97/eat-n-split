type Friend = {
  id: number;
  image: string;
  name: string;
  balance: number;
};
type BillObj = {
  billValue: string;
  expenseValue: string;
  payingPerson: string;
};

type SplitPopupProps = {
  friends: Friend[];
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
  name: string;
  setSelectedFriend: (name: string) => void;
  billObj: BillObj;
  setBillObj: (val: BillObj) => void;
};

const SplitPopup = ({
  billObj,
  setBillObj,
  friends,
  setFriends,
  name,
  setSelectedFriend,
}: SplitPopupProps) => {
  const anothPersonExpense =
    Number(billObj.billValue) - Number(billObj.expenseValue);

  const onSplitHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newArr = friends.map((friend) => {
      if (friend.name == name) {
        const newBalance =
          billObj.payingPerson == "you"
            ? anothPersonExpense
            : -1 * Number(billObj.expenseValue);
        return {
          ...friend,
          balance: newBalance,
        };
      }
      return friend;
    });
    setFriends(newArr);
    setSelectedFriend("");
  };
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {name}</h2>
      {/* input */}
      <label htmlFor="bill">Bill value</label>
      <input
        type="text"
        id="bill"
        value={billObj.billValue}
        onChange={(e) => setBillObj({ ...billObj, billValue: e.target.value })}
      />
      {/* input */}
      <label htmlFor="YourExpense">Your expense</label>
      <input
        type="text"
        id="YourExpense"
        value={billObj.expenseValue}
        onChange={(e) =>
          setBillObj({ ...billObj, expenseValue: e.target.value })
        }
      />
      {/* input */}
      <label htmlFor="expense">Clark's expense</label>
      <input
        type="text"
        id="expense"
        disabled
        value={billObj.expenseValue ? anothPersonExpense : billObj.billValue}
      />
      {/* input */}
      <label htmlFor="bill_select"> Who is paying the bill</label>
      <select
        name="bill_doner"
        id="bill_select"
        onChange={(e) =>
          setBillObj({ ...billObj, payingPerson: e.target.value })
        }
        value={billObj.payingPerson}
      >
        <option value="you">You</option>
        <option value={name}>{name}</option>
      </select>
      <button className="button" onClick={onSplitHandler}>
        Split bill
      </button>
    </form>
  );
};

export default SplitPopup;
