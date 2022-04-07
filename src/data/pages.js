import SignInImg from "../assets/img/pages/sign-in.jpg";
import { Router } from "../router";
export default [
  {
    id: 1,
    name: "Diploma in Theology",
    program: "Diploma",
    image: SignInImg,
    link: Router.Registration.path,
    requires: [
      `completed application form (available online, link provided directly by the admissions office)`,
      `Higher Education Certification or its equivalent (Secondary School, Technical and Trade Schools) with Five Credits – including English in at least 2 sittings or its equivalent`,
      `Two Recommendation Letters (At least one should be from a certified member of the clergy)`,
      ` A personal narrative containing their testimony of salvation.`,
    ],
  },
  {
    id: 2,
    name: "Post-Graduated Diploma in Theology",
    program: "PGD",
    image: SignInImg,
    link: Router.Registration.path,
    requires: [
      `A completed application form (available online, link provided directly by the admissions office)`,
      `A minimum of a bachelor’s degree or its equivalent. `,
      `Three Reference Letters, with at least one coming from a certified member of the clergy, and one from a person in academia. If the candidate has been out of school for at least five (5) years, a current employer can sign the Academic Reference Letter`,
      ` A Personal Motivation Letter capturing the applicant’s testimony of salvation, as well as rationale for wanting to attend the seminary, and expected contributions to institution.`,
    ],
  },
];
