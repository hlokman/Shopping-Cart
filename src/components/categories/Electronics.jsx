import { useParams } from "react-router-dom";
import Ssd from "../cards/Ssd";
import Monitor from "../cards/Monitor";
import SsdPage from "../itemsPages/SsdPage";
import MonitorPage from "../itemsPages/MonitorPage";
import ErrorProduct from "../ErrorProduct";

function Electronics({ items, handleAdd }) {
  const { product } = useParams();
  const filteredElectronics = items.filter(
    (item) => item.category === "electronics"
  );

  return (
    <>
      {product === "1" ? (
        <SsdPage filteredItems={filteredElectronics} handleAdd={handleAdd} />
      ) : product === "2" ? (
        <MonitorPage
          filteredItems={filteredElectronics}
          handleAdd={handleAdd}
        />
      ) : !product ? (
        <>
          {" "}
          <h1 className="flex w-[100%] justify-center">ELECTRONICS</h1>
          <div className="flex flex-wrap gap-10">
            <Ssd filteredItems={filteredElectronics} handleAdd={handleAdd} />
            <Monitor
              filteredItems={filteredElectronics}
              handleAdd={handleAdd}
            />
          </div>
        </>
      ) : (
        <ErrorProduct />
      )}
    </>
  );
}

export default Electronics;

// className="flex justify-center items-center"
