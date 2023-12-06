import { useDispatch } from "react-redux";
import { setGetCSVdata } from "../../store/reducers/getCSVdata";

const Upload = () => {
  const dispatch = useDispatch();

  const handleUpload = (e) => {
    dispatch(setGetCSVdata(e.target.files[0]));
  };

  const downloadSample = () => {
    // CSV data
    var csvContent =
      "Name,Designation,Position,Avatar\n" +
      'John Doe,CEO,1,"https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"\n' +
      'Ben Grasha,Executive Director,1.1,"https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"\n' +
      'Russel Ross,,1.1.1.1,"https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"\n' +
      'Russel Ross,Manager,1.1.2,"https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"\n' +
      "Micky Neilands,Manager,1.1.1,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81P6my9nAe_7zKcpys_FvpjWc6WBtGBB2SBWIWA7gfHFxXR4NSlKIsKpbLfi0MKlUSw0&usqp=CAU\n" +
      "Mattew Gobeaux,Managing Director,1.2,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDqzLXi52mP5B4rZEABgf8XtoDwjamUiP5hV201ve1Pw-zGyDcbneKVRt2Wvw3Qobbuw&usqp=CAU\n" +
      "Bartholemy Durgan,Manager,1.2.1,https://davidbeyda.com/wp-content/uploads/2020/04/DBS-Linkedin-Photos-NYC-1021.jpg\n" +
      "David Sellner,Additional Director,1.3,https://media.licdn.com/dms/image/C4E03AQF2j3J4QQscJQ/profile-displayphoto-shrink_200_200/0/1583848981060?e=1702512000&v=beta&t=fJ02vASAez6khC7KHG4rsViZFjBgNFbyGPsFGAYSTHk";

    var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    var a = document.createElement("a");
    a.download = "sample.csv";
    a.href = URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col w-full">
      <input
        type="file"
        className="hidden"
        id="upload_file"
        onChange={handleUpload}
      />
      <label
        htmlFor="upload_file"
        className="w-full h-[100px] rounded-lg border-dashed border-slate-400 border flex items-center justify-center text-slate-600 font-semibold"
      >
        <i className="fa-solid fa-cloud-arrow-up mr-1 text-slate-600"></i>{" "}
        Upload File
      </label>
      <div className="mt-2 text-slate-600">
        <label htmlFor="download">Download Sample </label>
        <button
          id="download"
          onClick={downloadSample}
          className="text-blue-500 hover:text-gray-400"
        >
          CSV File
        </button>
      </div>
    </div>
  );
};

export default Upload;
