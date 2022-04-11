import DashboardCard from "../components/dashboard/dashboardCard";
import Layout from "../components/layout";
import { AiFillFolderOpen, AiFillCar } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import Linechart from "../components/chart";
import Searchbar from "../components/searchbar";
import { Table } from "react-bootstrap";
import RightIcons from "../components/rightIcons";
import Dropdown from "../components/dropdown";
import Textbox from "../components/textbox";
import Textarea from "../components/textarea";
import TagInput from "../components/taginput";
import BookingCard from "../components/BookingCard";
const MenuItems1 = [
  { title: "Category 1", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 3", onClick: () => alert() },
];

function App() {
  return (
    <Layout title="">
        <div className="hdsf0s-sadmsa mt-3">
               
              <h3>Bookings</h3>
            </div>
            <div className="complete-web-1">
                  <BookingCard />
                  <BookingCard />
                  
                </div>
    </Layout>
  );
}

export default App;
