import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";

function CourseCard({ course }) {
  return (
    <div className="max-w-sm bg-white  border-gray-100 rounded-lg overflow-hidden shadow-lg dark:bg-white dark:border-white">
      <a href="#">
        <img className="rounded-t-lg" src={course.thumbnail} alt="" />
      </a>
      <div className="p-5 h-52">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800 text-center">
            {course.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {course.description}
        </p>
        <p>
          <span className="text-green-600 font-semibold text-lg">Free </span>{" "}
          <span className="line-through">899</span>
          &nbsp; | early Offer{" "}
          <span className="text-green-600 font-semibold text-lg">100%</span> off
        </p>
        <p>
          <UserIcon className="h-5 inline" /> {course.createdBy}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <Link
          to=""
          className=" text-center py-2 hover:bg-gray-100 text-orange-600"
        >
          Explore
        </Link>
        <Link
          to=""
          className="bg-orange-500 hover:bg-orange-600 text-center py-2 text-white"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
