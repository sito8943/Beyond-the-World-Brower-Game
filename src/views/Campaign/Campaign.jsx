import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// contexts
import { useUser } from "../../contexts/UserProvider";

// utils
import { updateUser } from "../../utils/local";

function Campaign() {
  const location = useLocation();
  const navigate = useNavigate();

  const { userState } = useUser();

  useEffect(() => {
    const { pathname } = location;
    const chapter = pathname.split("/")[2];
    if (userState.campaign) {
      const alreadyChapter = userState.campaign.find(
        (campaign) => campaign.id === chapter
      );
      if (alreadyChapter) {
        if (alreadyChapter.finished) navigate("/");
      } else userState.campaign.push({ id: chapter, started: true });
    } else userState.campaign = [{ id: chapter, started: true }];
    updateUser(userState);
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Campaign;
