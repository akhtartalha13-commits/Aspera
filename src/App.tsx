import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

// Route-level code splitting keeps the initial bundle small; each page
// loads on demand.
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const ChinesePage = lazy(() => import('@/pages/ChinesePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} aria-busy="true" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Standalone Chinese landing page (its own chrome) */}
          <Route path="zh" element={<ChinesePage />} />
        </Routes>
      </Suspense>
    </>
  )
}
