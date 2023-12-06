import { Tree, TreeNode } from "react-organizational-chart";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const Chart = () => {
  const { themeColor, getCSVdata, zoomRange } = useSelector((state) => state);
  const [data, setData] = useState([]);

  const OrgChartNode = ({ data, themeColor }) => (
    <TreeNode
      label={<Card handlePush={handlePush} data={data} />}
      key={data.id}
    >
      {data.children &&
        data.children.map((childData, index) => (
          <OrgChartNode key={index} data={childData} themeColor={themeColor} />
        ))}
    </TreeNode>
  );

  useEffect(() => {
    if (getCSVdata) {
      const getData = async () => {
        try {
          Papa.parse(getCSVdata, {
            header: true,
            complete: (result) => {
              setData(result.data);
            },
          });
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }
  }, [getCSVdata]);

  const organizeArray = (arr) => {
    const organized = [];

    const findOrCreateParent = (parentId, parentArr) => {
      let parentNode = parentArr.find((node) => node.id === parentId);

      if (!parentNode) {
        parentNode = { id: parentId, Name: "", Avatar: "", children: [] };
        parentArr.push(parentNode);
      }

      return parentNode.children;
    };

    arr.forEach((item) => {
      const idParts = item.Position.split(".");
      let currentLevel = organized;

      for (let i = 0; i < idParts.length - 1; i++) {
        const currentId = idParts.slice(0, i + 1).join(".");
        currentLevel = findOrCreateParent(currentId, currentLevel);
      }

      if (currentLevel) {
        currentLevel.push({
          id: item.Position,
          Name: item.Name,
          Avatar: item.Avatar,
          Designation: item.Designation,
          children: [],
        });
      }
    });

    return organized;
  };

  const organized = organizeArray(data);

  const handlePush = (id) => {
    console.log(organized);
    console.log(id);
  };

  return (
    <div
      className="max-w-full flex flex-col justify-center h-screen items-center"
      style={{ scale: `${zoomRange}` }}
    >
      {organized.length !== 0 &&
        organized.map((item, key) => (
          <Tree
            key={key}
            lineWidth={"2px"}
            lineColor={themeColor}
            lineBorderRadius={"10px"}
            label={<Card handlePush={handlePush} data={item} />}
          >
            {item.children.length !== 0 &&
              item.children.map((childItem, i) => (
                <OrgChartNode
                  key={i}
                  data={childItem}
                  themeColor={themeColor}
                />
              ))}
          </Tree>
        ))}
    </div>
  );
};

export default Chart;
