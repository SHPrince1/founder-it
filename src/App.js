
import BuildBusiness from './components/build-business';
import Challenge from './components/challenge';
import HompageBanner from './components/hompage-banner';
import TopNav from './components/top-nav';
import Footer from './components/footer'


function App() {
  return (
    <div>
      <TopNav />
      <HompageBanner />
      <BuildBusiness />
      <Challenge />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
