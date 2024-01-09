import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Course category is required"],
    },
    thumbnail: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.PK7cvUTwXYCH2CHvcMJjQgHaEK?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      required: [true, "Thumbnail of the course is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    Introductionlecture: {
      type: String,
      default:
        "https://www.pexels.com/video/a-group-of-young-people-in-discussion-of-a-group-project-3209298/",
    },
    createdBy: {
      type: String,
      required: [true, "Instructor Name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    discount: {
      type: Number,
      default: 100,
    },
    numberOfLectures: {
      type: Number,
      default: 0,
    },
    lectures: [
      {
        title: {
          type: String,
          required: [true, "Title is required"],
        },
        description: {
          type: String,
          required: [true, "Description is required"],
        },
        // thumbnail: {
        //   type: String,
        //   default:
        //     "https://th.bing.com/th/id/OIP.PK7cvUTwXYCH2CHvcMJjQgHaEK?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        //   required: [true, "Thumbnail of the course is required"],
        // },
        video: {
          type: String,
          default:
            "https://th.bing.com/th/id/OIP.PK7cvUTwXYCH2CHvcMJjQgHaEK?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
