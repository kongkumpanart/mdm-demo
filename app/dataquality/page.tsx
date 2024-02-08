import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import SideNav from '@/components/SideNav';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function dataquality() {
  return (
    <>
      <Navbar />
      <SideNav />
      <Footer />
    </>
  );
}
