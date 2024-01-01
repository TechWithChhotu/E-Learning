import CountUp from "react-countup";

import student_iocn from "../../assets/student-iocn.svg";
import credit_card_icon from "../../assets/credit-card-icon.svg";
import books_icon from "../../assets/books-icon.svg";

const counterDownData = [
  { id: 1, endingValue: 15, text: "Different Courses", icon: books_icon },
  { id: 2, endingValue: 1000, text: "Students Enrolled", icon: student_iocn },
  {
    id: 3,
    endingValue: 800,
    text: "Successful Transition",
    icon: credit_card_icon,
  },
];

function CounterDown() {
  return (
    <div className="flex justify-around">
      {counterDownData.map((e) => (
        <div key={e.id} className="flex flex-col items-center text-center">
          <img src={e.icon} alt="student_icon" className=" w-36 max-sm:w-24" />
          <CountUp
            className="text-3xl max-sm:text-xl text-indigo-600 font-medium"
            scrollSpyOnce={true}
            scrollSpyDelay={300}
            enableScrollSpy={true}
            start={0}
            end={e.endingValue}
            duration={5}
            suffix="+"
          ></CountUp>
          <p className="text-2xl max-sm:text-xl font-medium text-gray-700">
            {e.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CounterDown;
