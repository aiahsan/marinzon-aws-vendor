import DashboardCard from '../components/dashboard/dashboardCard';
import Layout from '../components/layout';
import { AiFillFolderOpen, AiFillCar } from 'react-icons/ai'
import { HiDocumentReport } from 'react-icons/hi'
import Linechart from '../components/chart'
import Searchbar from '../components/searchbar'
import { Table } from 'react-bootstrap'
import RightIcons from '../components/rightIcons';
import Dropdown from '../components/dropdown';
import Textbox from '../components/textbox'
import Textarea from '../components/textarea'
import TagInput from '../components/taginput'
const MenuItems1 = [{ title: "Category 1", onClick: () => alert() }, { title: "Category 2", onClick: () => alert() }, { title: "Category 2", onClick: () => alert() }, { title: "Category 3", onClick: () => alert() }];

function App() {
  return (
    <Layout title="Staff">

      <div className="d-flex flex-row mt-4">
        <div className="right-card px-4">
          <div className="box-shadow p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">
                Staff
              </h5>
              <RightIcons />

            </div>
            <div className="row">
              <div className="col-md-6"><div className="mt-1">
                <Textbox label="State ID" />
              </div></div>
              <div className="col-md-6">
                <div className="mt-1">
                  <Textbox label="Name" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6"><div className="mt-1">
                <Textbox label="Call Sign" />
              </div></div>
              <div className="col-md-6">
                <div className="mt-1">
                  <Textbox label="Alias" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6"><div className="mt-1">
                <Textbox label="Phone Number" />
              </div></div>
              <div className="col-md-6">
                <div className="mt-1">
                  <Textbox label="Department" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6"><div className="mt-1">
                <Textbox label="Rank" />
              </div></div>
              <div className="col-md-6 d-flex align-items-center">
                <img className="p-image" src="https://jmcp.edu.pk/wp-content/uploads/2020/10/blank-profile-picture-973460_1280-300x300-1.jpg" />
              </div>
            </div>

          </div>
          <div className="box-shadow p-4 mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">
                Staff
              </h5>
              <Searchbar isBorder={true} />

            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>State ID
                  </th>
                  <th>Name</th>
                  <th>Call Sign
                  </th>
                  <th>Alias</th>
                  <th>Phone Number</th>
                  <th>Department</th>
                  <th>Rank</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  Array.from({ length: 5 }, (v, i) => <tr key={i}>
                    <td>                <img className="p-image-1" src="https://jmcp.edu.pk/wp-content/uploads/2020/10/blank-profile-picture-973460_1280-300x300-1.jpg" />
                    </td>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <td>Data {i}</td>
                    <th><button className="btn">
                      Edit
                    </button></th>
                  </tr>)

                }
              </tbody>
            </Table>
            <div className="d-flex justify-content-end pagination-container">
              <button className="btn cst-none">Previous</button>
              <div className="d-flex pagination-number-container">
                <button className="btn">1</button>
                <button className="btn active">2</button>
                <button className="btn">3</button>
                <button className="btn">4</button>
                <button className="btn mag-18">5</button>
              </div>
              <button className="btn cst-none">Next</button>
            </div>
          </div>

        </div>
        <div className="tags-box box-shadow px-2 py-3">
          <TagInput title="Roles" />
        </div>
      </div>
    </Layout>
  );
}

export default App;

