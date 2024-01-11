import { useSelector } from "react-redux";
import Payment from "../payment/Payment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CourseDetails() {
  console.log(`Course Details ==> ${Math.random()}`);

  const { id } = useParams();

  const data = useSelector((state) => state.userSlice.courses);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const result = data ? data.find((e) => e._id == id) : "";
    setCourse(result);
  }, [course, data, id]);

  return (
    <div>
      <p>CourseDetails</p>
      {console.log(`Course.amount ==> `)}
      {console.log(course)}

      <Payment
        amount={Math.round(
          course.price - (course.price / 100) * course.discount
        )}
      />
    </div>
  );
}

export default CourseDetails;
