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
import { FaStar } from "react-icons/fa";
const MenuItems1 = [
  { title: "Category 1", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 3", onClick: () => alert() },
];

function App() {
  return (
    <Layout title="">
        
            <div className="hdsf0s-sadmsa">
                <h3>Reviews Given</h3>
                <div className="complete-web-1">
                  <div className="umpire w-100">
                    <div className="umpire-1 umpire-1-cst">
                      <div className="ratio-bar">
                        <h3>4.9</h3>
                        <p>out of</p>
                        <h3 className="ml-9">5</h3>
                        <div className="lasjdsad-sdjsa ksjadas">
                          <FaStar color="#FF981E" />
                          <FaStar color="#FF981E" />
                          <FaStar color="#FF981E" />
                          <FaStar color="#FF981E" />
                          <FaStar color="#FF981E" />
                        </div>
                        <h6>4.8(151)</h6>
                      </div>
                    </div>
                  </div>
                  <div className="hjsaisa-sdnjassd jsdif-dsndawje">
                    <div className="reviews-section">
                      <div className="first-rev-sec">
                        <div className="rev-img pb-41">
                          <img src="https://cdn.wallpaper.com/main/2015/10/heesen_p.jpg" alt="" />
                          <div className="you-rev">
                            <h3>Your Review</h3>
                            <p>12 Jul 2022</p>
                          </div>
                        </div>
                        <div className="cm-webs-12">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy{" "}
                          </p>
                          <h6>Complete Web &amp; Mobile Designer in 2022...</h6>
                        </div>
                      </div>
                    </div>
                    <div className="reviews-section">
                      <div className="first-rev-sec">
                        <div className="rev-img pb-41">
                          <img src="https://cdn.wallpaper.com/main/2015/10/heesen_p.jpg" alt="" />
                          <div className="you-rev">
                            <h3>Your Review</h3>
                            <p>12 Jul 2022</p>
                          </div>
                        </div>
                        <div className="cm-webs-12">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy{" "}
                          </p>
                          <h6>Complete Web &amp; Mobile Designer in 2022...</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </Layout>
  );
}

export default App;
