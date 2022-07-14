export const Router = {
  // pages
  Presentation: {
    path: "/platform/presentation",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Watch: {
    path: "/platform/watch",
    allowedRoles: ["admin", "student", "teacher"],
  },
  Admission: {
    path: "/platform/admission",
    allowedRoles: ["admin", "prospective"],
  },
  Registration: {
    path: "/platform/registration",
    allowedRoles: ["admin", "prospective"],
  },
  ProgramDetail: {
    path: "/platform/program",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },

  Overview: {
    path: "/overview",
    allowedRoles: ["admin", "student", "teacher"],
  },
  Dashboard: {
    path: "/",
    allowedRoles: ["admin", "student", "teacher"],
  },
  Enrollment: {
    path: "/enrollment",
    allowedRoles: ["admin", "prospective"],
  },
  CourseList: {
    path: "/courseList",
    allowedRoles: ["admin", "prospective"],
  },
  Course: {
    path: "/course",
    allowedRoles: ["admin", "prospective"],
  },
  Settings: {
    path: "/settings",
    allowedRoles: ["admin"],
  },
  Account: {
    path: "/account",
    allowedRoles: ["admin", "student", "teacher", "prospective"],
  },

  Signin: {
    path: "/platform/sign-in",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Downloads: {
    path: "/platform/downloads",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Signup: {
    path: "/platform/sign-up",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Practicum: {
    path: "/platform/practicum",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Lock: {
    path: "/platform/lock",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  NotFound: {
    path: "/404",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  ServerError: {
    path: "/platform/500",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  ForgotPassword: {
    path: "/platform/forgot-password",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  ResetPassword: {
    path: "/platform/reset-password",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
}; 
