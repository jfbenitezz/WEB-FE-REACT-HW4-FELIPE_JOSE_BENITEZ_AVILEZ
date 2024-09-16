import Header from "./components/Header";
import Introduction from "./components/Introduction";
import SWOT from "./components/Swot";
import OrganizationalIdentity from "./components/Org_id";
import ObjectivesTable from "./components/Strat_obj";
import Footer from "./components/Footer";

import { swotData, objectives } from "./utils/data";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Introduction />
        <SWOT
          data={swotData}
        />
        <OrganizationalIdentity />
        <ObjectivesTable objectives={objectives} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
