import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { SocialIcon } from "./styled";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/szymonbasiul",
    Icon: SocialIcon(GithubIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/szymonbasiul/",
    Icon: SocialIcon(LinkedInIcon),
  },
];
