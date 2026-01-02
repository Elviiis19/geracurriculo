import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// Lazy Load Components (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const Builder = lazy(() => import('./pages/Builder'));

// Lazy load named exports
const About = lazy(() => import('./pages/Static').then(module => ({ default: module.About })));
const Privacy = lazy(() => import('./pages/Static').then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import('./pages/Static').then(module => ({ default: module.Terms })));
const Cookies = lazy(() => import('./pages/Static').then(module => ({ default: module.Cookies })));
const Contact = lazy(() => import('./pages/Static').then(module => ({ default: module.Contact })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-3">
      <Loader2 size={40} className="text-blue-600 animate-spin" />
      <p className="text-slate-500 font-medium text-sm">Carregando...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rota Genérica do Editor */}
          <Route path="/builder" element={<Builder />} />
          
          {/* Rotas Amigáveis para SEO (Cada modelo tem sua URL) */}
          <Route path="/modelo/:slug" element={<Builder />} />

          {/* Páginas Institucionais */}
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;