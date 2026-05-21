import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Capabilities } from "./pages/Capabilities";
// import { Frameworks } from "./pages/Frameworks"; // hidden for now
import { CaseStudies } from "./pages/CaseStudies";
// import { Insights } from "./pages/Insights"; // hidden for now
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Privacy } from "./pages/legal/Privacy";
import { Accessibility } from "./pages/legal/Accessibility";
import { ModernSlavery } from "./pages/legal/ModernSlavery";
import { Terms } from "./pages/legal/Terms";
import { Cookies } from "./pages/legal/Cookies";

// Strip trailing slash from BASE_URL so React Router's basename is happy.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          {/* <Route path="/frameworks" element={<Frameworks />} /> */}
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* <Route path="/insights" element={<Insights />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/modern-slavery" element={<ModernSlavery />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
