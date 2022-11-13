import { Outlet } from "react-router-dom";

// sito components
import SitoContainer from "sito-container";

const Empty = () => {
  return (
    <SitoContainer sx={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Outlet />
    </SitoContainer>
  );
};

export default Empty;
