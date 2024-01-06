import TextTyping from "../TextTyping";
import HomeStudy from "../../assets/hero-bg.png";
import HomeStudyEffect from "../../assets/hero-shadow.png";
import CounterDown from "./CounterDown";
import ".././CommenCSS.css";
import PopularCourses from "../courses/PopularCourses";

function Home() {
  // const Storeres = useSelector((state) => state.recordSlice.workRecords) || {};
  // const [data, setdata] = useState(Storeres);

  return (
    <div className="grid grid-cols-2 gap-8 px-24 py-10">
      <div className="flex flex-col justify-center gap-5">
        <div className="text-[2rem] font-bold">
          Upscaling Made{" "}
          <span className="text-indigo-600">{<TextTyping />}</span> <br /> With
          Learn Online
        </div>
        <p className="text-sm text-gray-600">
          Learn Online is your one-stop-shop for upscaling. Get maximum value
          for time and resources you invest, with job-ready courses &
          high-technology, available at the lowest cost.
        </p>
        <button className="bg-orange-600 text-white w-40 px-4 py-2 rounded-md">
          Explore Courses
        </button>
      </div>
      <div>
        <figure className="relative">
          <img src={HomeStudy} alt="" className="!w-full" />
          <img src={HomeStudyEffect} alt="" className="absolute top-0 left-0" />
        </figure>
      </div>
      <div className="col-span-2">
        <CounterDown />
      </div>

      <div className="col-span-2 flex flex-col items-center">
        <h6 className="section-title bg-white w-fit text-center px-3 mt-5">
          Courses
        </h6>
        <h2 className="text-[2rem] font-bold text-gray-600 mb-5">
          Our Popular Courses
        </h2>
        <PopularCourses />
      </div>
    </div>
  );
}

export default Home;
