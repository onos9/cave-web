
import OverviewImg from "../assets/img/pages/overview.jpg"
import TransactionsImg from "../assets/img/pages/transactions.jpg"
import SettingsImg from "../assets/img/pages/settings.jpg"
import SignInImg from "../assets/img/pages/sign-in.jpg"
import SignUpImg from "../assets/img/pages/sign-up.jpg"
import LockImg from "../assets/img/pages/lock.jpg"
import ForgotPasswordImg from "../assets/img/pages/forgot-password.jpg"
import ResetPasswordImg from "../assets/img/pages/reset-password.jpg"
import NotFoundImg from "../assets/img/pages/404.jpg"
import ServerErrorImg from "../assets/img/pages/500.jpg"

import { Router } from "../router"


export default [
  {
    id: 1,
    name: "Overview",
    image: SignInImg,
    link: Router.Dashboard.path,
  },
  {
    id: 2,
    name: "Transactions",
    image: SignInImg,
    link: Router.Transactions.path,
  },
  {
    id: 3,
    name: "Settings",
    image: SignInImg,
    link: Router.Settings.path,
  }
];