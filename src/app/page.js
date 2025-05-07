'use client';

import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import ListSection from '@/components/ListSection';
import FeatureSection from '@/components/FeatureSection';
import CasesSection from '@/components/CasesSection';
import SocialProof from '@/components/SocialProof';

export default function Home() {
  return (
    <>
      <NextSeo
        title="AP Consultancy - Professional Consulting Services"
        description="Expert consulting services to help your business grow and succeed. We provide comprehensive solutions for your business needs."
      />
      {/* <Navbar /> */}
      <main>
        <Header />
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
      </main>
      {/* <Footer /> */}
    </>
  );
}
