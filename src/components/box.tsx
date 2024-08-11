
import { Link } from "react-router-dom";

import Styles from "./box-homepage.module.css";
/* eslint-disable @typescript-eslint/no-explicit-any */
type BoxProps = {
  title: any;
  description: any;
  link: string;
  box_styling: string;
  description_styling: string;
  button_styling: string;
  button_text:any;
};
export default function BoxHomepage({
  title,
  description,
  link,
  box_styling,
  description_styling,
  button_styling,
  button_text,
}: BoxProps) {
  return (
    <div>
      <Link to={link}>
        <div className={box_styling}>
          <div className="bg-white rounded-lg justify-center">
            <span className={Styles.Title}>{title}</span>
            <span className={description_styling}>{description}</span>
            <div className={button_styling}>{button_text}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
