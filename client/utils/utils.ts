import { useNavigate } from "react-router-dom";

export const navigationUtils = {
  navigate: (path) => {
    const navigate = useNavigate();
    navigate(path);
  },
};
