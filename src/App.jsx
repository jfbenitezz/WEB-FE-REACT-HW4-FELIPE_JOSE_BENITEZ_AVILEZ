import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { features, topics } from "./utils/data";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Curso React.js" />
      <Main name="Maria" features={features} topics={topics} />
      <Footer />
    </div>
  );
}

export default App;
