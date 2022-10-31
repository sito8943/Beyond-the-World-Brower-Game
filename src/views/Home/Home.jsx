import { useState } from "react";

// sito components
import SitoContainer from "sito-container";

// own components
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SitoContainer sx={{ width: "100%", height: "100%" }}>
      <Sidebar open={showSidebar} handleClose={() => setShowSidebar(false)} />
    </SitoContainer>
  );
};

export default Home;
