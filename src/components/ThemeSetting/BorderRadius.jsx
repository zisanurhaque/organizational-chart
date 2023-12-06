import { useSelector, useDispatch } from "react-redux";
import { setBorderRadius } from "../../store/reducers/borderRadiusSice";

const BorderRadiusSize = () => {
  const dispatch = useDispatch();
  const { themeColor, borderRadius } = useSelector((state) => state);

  const changeSize = (e) => {
    const value = e.target.value;
    dispatch(setBorderRadius(value));
  };

  return (
    <input
      id="border-radius-range"
      type="range"
      className="w-full h-2 rounded-lg cursor-pointer"
      min={0}
      max={100}
      onChange={changeSize}
      value={borderRadius}
      style={{ accentColor: themeColor }}
    />
  );
};

export default BorderRadiusSize;
