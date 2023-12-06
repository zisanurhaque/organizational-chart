import { useSelector, useDispatch } from "react-redux";
import { setHideAvatar } from "../../store/reducers/hideAvatar";
import { setHideDesignation } from "../../store/reducers/hideDesignation";

const Toggler = ({ designation }) => {
  const dispatch = useDispatch();
  const { themeColor, hideAvatar, hideDesignation } = useSelector(
    (state) => state
  );
  const handleToggler = () => {
    if (designation) {
      dispatch(setHideDesignation(!hideDesignation));
    } else {
      dispatch(setHideAvatar(!hideAvatar));
    }
  };
  return (
    <div
      className="w-[50px] h-[28px] rounded-full flex items-center px-[3px] cursor-pointer"
      style={{ border: `1px solid ${themeColor}` }}
      onClick={handleToggler}
    >
      <div
        className={`w-[20px] h-[20px] rounded-full transition-all duration-300 ${
          (designation ? hideDesignation : hideAvatar)
            ? "ml-[calc(100%_-_20px)]"
            : "ml-0"
        }`}
        style={{ background: themeColor }}
      ></div>
    </div>
  );
};

export default Toggler;
