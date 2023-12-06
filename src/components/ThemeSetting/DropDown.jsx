import { useDispatch } from "react-redux";
import { setThemeColor } from "../../store/reducers/themeColorSlice";

const DropDown = ({ data }) => {
  const dispatch = useDispatch();
  const handleColor = (value) => {
    dispatch(setThemeColor(value));
  };

  return (
    <div className="w-full bg-white shadow-md rounded-md p-4">
      <h6 className="font-semibold mb-2 text-slate-600 text-sm">Theme Color</h6>
      <div className="grid grid-cols-6 gap-2">
        {data.map((item, i) => (
          <button
            key={i}
            className="h-[25px] w-[25px] rounded-full hover:animate-pulse border-2 col-span-1"
            style={{ background: item }}
            onClick={() => handleColor(item)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
