import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { TranslationProvider } from '@/contexts/TranslationContext';
import { Home, About, NetterDSQL, Obstack, DCache, Hadron, ObstackLaunch, HadronAnnouncement, DCacheRelease, BackendDevelopment, FrontendDevelopment, DatabaseAdministration, VirtualizationInfrastructure, NetworkInfrastructure, VDIMigration, DesktopFleetSolutioning, ObservabilitySRE } from '@/pages';
import '@/i18n/config';

function App() {
  return (
    <TranslationProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/d-sql" element={<NetterDSQL />} />
            <Route path="/products/obstack" element={<Obstack />} />
            <Route path="/products/dcache" element={<DCache />} />
            <Route path="/products/hadron" element={<Hadron />} />
            <Route path="/news/obstack-launch" element={<ObstackLaunch />} />
            <Route path="/news/hadron-announcement" element={<HadronAnnouncement />} />
            <Route path="/news/dcache-release" element={<DCacheRelease />} />
            <Route path="/services/backend" element={<BackendDevelopment />} />
            <Route path="/services/frontend" element={<FrontendDevelopment />} />
            <Route path="/services/dba" element={<DatabaseAdministration />} />
            <Route path="/services/virtualization" element={<VirtualizationInfrastructure />} />
            <Route path="/services/networking" element={<NetworkInfrastructure />} />
            <Route path="/services/vdi" element={<VDIMigration />} />
            <Route path="/services/desktop-fleet" element={<DesktopFleetSolutioning />} />
            <Route path="/services/observability-sre" element={<ObservabilitySRE />} />
          </Routes>
        </Layout>
      </Router>
    </TranslationProvider>
  );
}

export default App;