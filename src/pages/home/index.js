import React from "react"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { MainBanner } from "../../components/mainBanner";
import { BlockAboutCompany } from "../../components/bannerAboutCompany";
import { BlockGallery } from "../../components/blockGallery";
import { BlockServices } from "../../components/blockServices";
import { BlockPricing } from "../../components/blockPricing";
import { BlockPartners } from "../../components/blockPartners";

export const HomePage = () => {
    return (
        <section className="w-full h-full">
            <Header />
            <main className="container-lg md:container md:mx-auto max-w-cc">
                <MainBanner />
               <BlockAboutCompany />
               <BlockGallery />
                <BlockServices />
               <BlockPricing />
               <BlockPartners />
            </main>
            <Footer/>
        </section>
    )
};