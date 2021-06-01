import { BrowserRouter as Router } from "react-router-dom";
import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";

export default function Dashboard() {
  return (
    <Router>
      <Sidebar />
      <Main />
    </Router>
  );
}
