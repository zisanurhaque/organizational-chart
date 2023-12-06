import DropDown from "../../components/ThemeSetting/DropDown";
import BorderRadiusSize from "./BorderRadius";
import CardSize from "./CardSize";
import Toggler from "./Toggler";
import Upload from "./Upload";
import ZoomChart from "./ZoomChart";

const colors = [
  "#4f46e5",
  "#7c3aed",
  "#0891b2",
  "#0d9488",
  "#65a30d",
  "#ca8a04",
  "#ea580c",
  "#dc2626",
  "#52525b",
  "#334155",
  "#be185d",
  "#fbbf24",
  "#22d3ee",
  "#c084fc",
  "#f472b6",
  "#fb7185",
  "#94a3b8",
  "#d4d4d8",
];
const menu = [
  {
    label: "Upload File",
    icon: "fa-solid fa-arrow-up-from-bracket",
    dropdown: <Upload />,
  },
  {
    label: "Theme Color",
    icon: "fa-solid fa-palette",
    dropdown: <DropDown data={colors} />,
  },
  {
    label: "Hide Avatar",
    icon: "fa-regular fa-image",
    dropdown: <Toggler />,
  },
  {
    label: "Hide Designation",
    icon: "fa-regular fa-address-card",
    dropdown: <Toggler designation />,
  },
  {
    label: "Card Size",
    icon: "fa-regular fa-square",
    dropdown: <CardSize />,
  },
  {
    label: "Border Radius",
    icon: "fa-solid fa-border-top-left",
    dropdown: <BorderRadiusSize />,
  },
  {
    label: "Zoom",
    icon: "fa-solid fa-expand",
    dropdown: <ZoomChart />,
  },
];

const ThemeSetting = () => {
  return (
    <div className="w-[250px] h-screen absolute left-0 top-0 py-5 px-5 bg-gray-100">
      <div className="grid grid-cols-1 gap-5">
        {menu.map((item, i) => (
          <div className="relative w-full" key={i}>
            <button className="font-semibold rounded-md flex items-center w-full">
              <i className={`${item.icon} mr-2 text-slate-600`}></i>
              <span className="text-slate-600">{item.label}</span>
            </button>
            <div className="mt-3 w-full flex">{item.dropdown}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSetting;
