import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// contexts
import { useUser } from "../../contexts/UserProvider";

// utils
import { updateUser } from "../../utils/local";

// components
import BigLoading from "../../components/BigLoading/BigLoading";

function Campaign() {
  const location = useLocation();
  const navigate = useNavigate();

  const { userState, setUserState } = useUser();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { pathname } = location;
    const chapter = pathname.split("/")[2];
    const { user } = userState;
    if (user.campaign) {
      const alreadyChapter = user.campaign[chapter];
      if (alreadyChapter) {
        if (alreadyChapter.finished) navigate("/");
      } else user.campaign[chapter] = { id: chapter, started: true, trail: 0 };
    } else {
      user.campaign = {};
      user.campaign[chapter] = { id: chapter, started: true, trail: 0 };
    }
    updateUser(user);
    setUserState({ type: "set", value: user });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) setLoaded(true);
  }, [loading]);

  return (
    <div>
      <BigLoading visible={loading} />
      {loaded ? <Outlet /> : null}
    </div>
  );
}

export default Campaign;
