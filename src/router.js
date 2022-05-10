export const Router = {
  // pages
  Presentation: {
    path: "/",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Watch: {
    path: "/watch",
    allowedRoles: ["admin", "student", "teacher"],
  },
  Admission: {
    path: "/admission",
    allowedRoles: ["admin", "prospective"],
  },
  Registration: {
    path: "/registration",
    allowedRoles: ["admin", "prospective"],
  },
  ProgramDetail: {
    path: "/program",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },

  Overview: {
    path: "/platform/overview",
    allowedRoles: ["admin", "student", "teacher"],
  },
  Dashboard: {
    path: "/platform/dashboard",
    allowedRoles: ["admin", "student", "teacher"],
  },
  Enrollment: {
    path: "/platform/Enrollment",
    allowedRoles: ["admin", "prospective"],
  },
  Settings: {
    path: "/platform/settings",
    allowedRoles: ["admin"],
  },
  Account: {
    path: "/platform/account",
    allowedRoles: ["admin", "student", "teacher", "prospective"],
  },

  Signin: {
    path: "/sign-in",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Signup: {
    path: "/sign-up",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  Lock: {
    path: "/lock",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  NotFound: {
    path: "/404",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  ServerError: {
    path: "/500",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  ForgotPassword: {
    path: "/forgot-password",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
  ResetPassword: {
    path: "/reset-password",
    allowedRoles: ["admin", "student", "teacher", "prospective", "guest"],
  },
}; 
