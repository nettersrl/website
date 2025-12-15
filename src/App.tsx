import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { TranslationProvider } from '@/contexts/TranslationContext';
import '@/i18n/config';

// Lazy load all page components
const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('@/pages/About').then(m => ({ default: m.About })));
const NetterDSQL = lazy(() => import('@/pages/products/NetterDSQL').then(m => ({ default: m.NetterDSQL })));
const Obstack = lazy(() => import('@/pages/products/Obstack').then(m => ({ default: m.Obstack })));
const DCache = lazy(() => import('@/pages/products/DCache').then(m => ({ default: m.DCache })));
const Hadron = lazy(() => import('@/pages/products/Hadron').then(m => ({ default: m.Hadron })));
const ObstackLaunch = lazy(() => import('@/pages/news/ObstackLaunch').then(m => ({ default: m.ObstackLaunch })));
const HadronAnnouncement = lazy(() => import('@/pages/news/HadronAnnouncement').then(m => ({ default: m.HadronAnnouncement })));
const DCacheRelease = lazy(() => import('@/pages/news/DCacheRelease').then(m => ({ default: m.DCacheRelease })));
const BackendDevelopment = lazy(() => import('@/pages/services/BackendDevelopment').then(m => ({ default: m.BackendDevelopment })));
const FrontendDevelopment = lazy(() => import('@/pages/services/FrontendDevelopment').then(m => ({ default: m.FrontendDevelopment })));
const DatabaseAdministration = lazy(() => import('@/pages/services/DatabaseAdministration').then(m => ({ default: m.DatabaseAdministration })));
const VirtualizationInfrastructure = lazy(() => import('@/pages/services/VirtualizationInfrastructure').then(m => ({ default: m.VirtualizationInfrastructure })));
const NetworkInfrastructure = lazy(() => import('@/pages/services/NetworkInfrastructure').then(m => ({ default: m.NetworkInfrastructure })));
const VDIMigration = lazy(() => import('@/pages/services/VDIMigration').then(m => ({ default: m.VDIMigration })));
const DesktopFleetSolutioning = lazy(() => import('@/pages/services/DesktopFleetSolutioning').then(m => ({ default: m.DesktopFleetSolutioning })));
const ObservabilitySRE = lazy(() => import('@/pages/services/ObservabilitySRE').then(m => ({ default: m.ObservabilitySRE })));

function App() {
  return (
    <TranslationProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
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
          </Suspense>
        </Layout>
      </Router>
    </TranslationProvider>
  );
}

export default App;