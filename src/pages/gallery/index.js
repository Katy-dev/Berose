import React from "react"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BlockPartners } from "../../components/blockPartners";
import { ImageGallery } from "../../components/componentImageGallery";

export const GalleryPage = () => {
    return(
        <section className="w-full h-full">
            <Header />
            <main className="container-lg md:container md:mx-auto">
            <ImageGallery />
            </main>
            <BlockPartners />
            <Footer />
        </section>
    )
};
