import { Router } from "express";
import {
  getAllCourses,
  getLecturesByCourseId,
  createCourse,
  updateCourse,
  removeCourse,
  addLectureaByCourseId,
  getCourseById,
  getLectureByCourseIdAndLectureId,
} from "../controllers/course.controllers.js";
import upload from "../middlewares/multer.middlewares.js";
import authorizedRoles from "../middlewares/roles.middlewares.js";
import isLoggedIn from "../middlewares/isLoggedIn.middlewares.js";

const route = new Router();

route.get("/", getAllCourses);

route.get("/lecture/:courseId/:lectureId", getLectureByCourseIdAndLectureId);
route.get("/lectures/:courseId", getLecturesByCourseId);

route.get("/:id", getCourseById);

route.post(
  "/create",
  isLoggedIn,
  authorizedRoles("ADMIN"),
  upload.single("thumbnail"),
  createCourse
);

route.post(
  "/",
  isLoggedIn,
  authorizedRoles("ADMIN"),
  upload.single("thumbnail"),
  createCourse
);

route.post(
  "/:id",
  isLoggedIn,
  authorizedRoles("ADMIN"),
  upload.single("video"),
  addLectureaByCourseId
);

route.put("/:id", isLoggedIn, authorizedRoles("ADMIN"), updateCourse);

route.delete("/:id", isLoggedIn, authorizedRoles("ADMIN"), removeCourse);

export default route;
