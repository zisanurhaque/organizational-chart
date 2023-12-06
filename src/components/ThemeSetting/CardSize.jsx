import { useSelector, useDispatch } from "react-redux";
import { setCardSize } from "../../store/reducers/cardSizeSlice";

const CardSize = () => {
  const dispatch = useDispatch();
  const { themeColor, cardSize } = useSelector((state) => state);

  const changeSize = (e) => {
    const value = e.target.value;
    dispatch(setCardSize(value));
  };

  return (
    <input
      id="card-size-range"
      type="range"
      className="w-full h-2 rounded-lg cursor-pointer"
      max={220}
      min={160}
      onChange={changeSize}
      value={cardSize}
      style={{ accentColor: themeColor }}
    />
  );
};

export default CardSize;
