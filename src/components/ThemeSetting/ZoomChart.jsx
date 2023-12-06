import { useSelector, useDispatch } from "react-redux";
import { setZoomRange } from "../../store/reducers/zoomRangeSlice";

const ZoomChart = () => {
  const dispatch = useDispatch();
  const { themeColor, zoomRange } = useSelector((state) => state);

  const changeSize = (e) => {
    const value = e.target.value;
    dispatch(setZoomRange(value));
  };

  return (
    <input
      id="zoom-range"
      type="range"
      className="w-full h-2 rounded-lg cursor-pointer"
      min={0.6}
      max={1}
      step={0.001}
      onChange={changeSize}
      value={zoomRange}
      style={{ accentColor: themeColor }}
    />
  );
};

export default ZoomChart;
