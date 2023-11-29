import { useDispatch } from "react-redux";
import { userLogoutRequest } from "../../redux/auth/userSlice";

export default function Logout() {
  const dispatch = useDispatch();
  dispatch(userLogoutRequest);
}
