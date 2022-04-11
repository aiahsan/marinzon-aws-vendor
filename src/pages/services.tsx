import Layout from "../components/layout";
import ProductCard from "../components/ProductCard";
import TagInput from "../components/taginput";
const MenuItems1 = [
  { title: "Category 1", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 2", onClick: () => alert() },
  { title: "Category 3", onClick: () => alert() },
];

function App() {
  return (
    <Layout title=" ">
      <div className="main-div">
        <div className="hdsf0s-sadmsa mt-3">
          <h3>Add New Service</h3>
        </div>
      </div>
      <div className="umpire-1-cst">
      <div className="maxima">
        <button className="upload-1 sdisad-dsdactive">All</button>
        <button className="upload-1">Approved</button>
        <button className="upload-1">Pending</button>
      </div>
      </div>
      
      <ProductCard />
    </Layout>
  );
}

export default App;
