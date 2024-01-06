import { Vortex } from "react-loader-spinner";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function PopularCourses() {
  const data = useSelector((state) => state.userSlice.courses);
  const [courses, setCourses] = useState(data);

  useEffect(() => {
    (async () => {
      setCourses(data);
    })();
  });

  return (
    <div>
      {courses != null ? (
        <div className="grid grid-cols-3 gap-5 gap-y-10">
          {courses.map((course) => {
            return (
              <div key={course.id}>
                {/* |||| {course.category} ||||| */}
                <CourseCard course={course} />
              </div>
            );
          })}
        </div>
      ) : (
        <Vortex
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      )}
      {/* Hello ke jagah ek loader run karna h hame */}
    </div>
  );
}

export default PopularCourses;
