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
    <Layout title="Evidence">

      <div className="d-flex flex-row mt-4">
        <div className="right-card px-4">
          <div className="box-shadow p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">
                Evidence
              </h5>
              <RightIcons />

            </div>
            <div className="mt-4">
              <Dropdown items={MenuItems1} title="Type" />
            </div>
            <div className="mt-1">
              <Textbox label="Identifier" />
            </div>
            <div className=" ">
              <Textbox label="Description" />
            </div>
            <div className=" ">
              <Textbox label="Image" />
            </div>
          </div>
          <div className="box-shadow p-4 mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="hd-5">
                Evidence
              </h5>
              <Searchbar isBorder={true} />

            </div>
            <Table responsive borderless className="table-custom">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Identifier</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  Array.from({ length: 5 }, (v, i) => <tr key={i}>

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
          <TagInput title="Tags" />
        </div>
      </div>
    </Layout>
  );
}

export default App;

