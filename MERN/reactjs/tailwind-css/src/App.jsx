import { FaRegHeart } from "react-icons/fa";
import { FcCalculator } from "react-icons/fc";
import { AiTwotonePrinter } from "react-icons/ai";
function App() {
  return (
    <>
      <div className="w-[400px] mx-auto my-5 flex justify-between">
        <FaRegHeart fontSize={100} />
        <FcCalculator fontSize={100} />
        <AiTwotonePrinter fontSize={100} color={'red'}/>
      </div>
      <div className="max-w-[1200px] grid md:grid-cols-4 grid-cols-2 mx-auto border p-4 gap-4 border-red-600">
        <div
          className="h-[300px] shadow-lg md:col-span-2">
          <img src="https://picsum.photos/500/300?random=1" className="w-full h-full" alt="" />
        </div>
        <div
          className="h-[300px] shadow-lg">
          <img src="https://picsum.photos/500/300?random=2" className="w-full h-full" alt="" />
        </div>
        <div
          className="h-[300px] shadow-lg">
          <img src="https://picsum.photos/500/300?random=3" className="w-full h-full" alt="" />
        </div>
        <div
          className="h-[300px] shadow-lg md:col-span-4">
          <img src="https://picsum.photos/1500/300?random=4" className="w-full h-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;

{/* <input type="checkbox" className="accent-[#6b46ff]"/> Something
<div className="group mx-auto mt-[50px] hover:text-[60px] duration-300 flex justify-center md:bg-gradient-to-l bg-gradient-to-r	to-blue-950 from-red-300  items-center relative text-[40px] shadow-xl  h-[200px] w-[500px] text-white hover:scale-[1.2] translate-y-[100px] rotate-[-20deg]">
  Hello world
  <div className="animate-ping group-hover:bg-red-600 group-hover:w-[80px] group-hover:h-[80px] duration-[250ms] shadow absolute top-[-30px] left-[-30px] w-[60px] h-[60px] rounded-full bg-[#6b46ff]"></div>
</div> */}