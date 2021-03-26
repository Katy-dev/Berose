import React from "react"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BlockAboutServices } from "../../components/blockAboutServices";
import { BlockPricing } from "../../components/blockPricing";
import { FromOurJournal } from "../../components/fromOurJournal";

export const ServicesPage = () => {
    return(
        <section className="w-full h-full">
            <Header />
            <div className='h-1/2 w-full mb-14'>
                <div className="bg-pageServices bg-cover bg-center bg-no-repeat h-full w-full relative">
                <span
                    className="absolute text-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 uppercase text-white font-bold text-5xl">
                    What we offer</span>
                </div>
            </div>
            <main className="container-lg md:container md:mx-auto max-w-cc">
                <BlockAboutServices />
                <BlockPricing />
                <FromOurJournal />
            </main>
            <Footer />
        </section>
    )
};