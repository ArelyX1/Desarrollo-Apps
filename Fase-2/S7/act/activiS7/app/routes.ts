import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/courses", "routes/courses.tsx"),
    route("/courses/:courseId", "routes/courseDetail.tsx"),
    route("*", "routes/notFound.tsx"),
  ]),
] satisfies RouteConfig;

