import { FC } from "react";
import scss from "./Header.module.scss";
import links from "../../../constants/Links";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>log</h1>
          <nav>
            {links.map((item, index) => {
              <div key={index}>
                <a href={item.link}>{item.title}</a>
              </div>;
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
