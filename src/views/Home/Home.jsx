import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Sidebar open={showSidebar} handleClose={() => setShowSidebar(false)} />
    </div>
  );
};

export default Home;
