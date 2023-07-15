import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
