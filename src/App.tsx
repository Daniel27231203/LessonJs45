import { Route, Routes } from "react-router-dom";
import { links } from "./constants/Links";

const App = () => {
  return (
    <Routes>
      {links.map((item, idx) => (
        <Route key={idx} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default App;
