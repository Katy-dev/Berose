import React from "react"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BlockReviews } from "../../components/blockReviews"
import photograph from "../../image/photographer.jpg";
import { BlockPartners } from "../../components/blockPartners";
import { BlockAboutPhoto } from "../../components/blockAboutPhoto"

export const AboutPage = () => {
    return (
        <section className="w-full h-full">
            <Header/>
            <div className='main-banner h-1/2 w-full mb-14'>
                <div className="bg-section-about bg-cover bg-top bg-no-repeat h-full w-full relative">
                <span
                    className="absolute text-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 uppercase text-white font-bold text-5xl">
                    Who we are</span>
                </div>
            </div>
            <main className="container-lg md:container md:mx-auto">
                <section className="max-w-cc mx-auto h-full pb-sm">
                    <h3 className="w-2/3 mx-auto text-center text-2xl 2xl:md:text-3xl xl:text-3xl lg:text-3xl font-bold font-oswaldRegular uppercase pb-4 pt-10">
                        CREATING A TIMELESS LOOK, COUPLED WITH THE MAIN FLAWLESS MOMENT</h3>
                    <hr className="mx-auto w-1/3 text-gray-500 text-center border-t-2 pb-6"/>
                    <div className="w-full h-full mw-auto px-4">
                        <img className="w-auto max-h-md mx-auto" src={photograph} alt="photograph"/>
                    <p className="pt-10 w-full text-left md:mx-auto text-gray-500 font-oswaldRegular">Firmament earth winged set multiply together, grass called whose. Image make one you're to whales
                        on which lights move to have rule his have his let tree all there thing seed gathered without,
                        whales you night very sixth was two Own. Fruit toge appear form. Whales whose land life brought
                        divided. Place you are abundantly that forth. Under second given gathered earth you replenish
                        you are bring one. created man morning had which, for fly rule creeping fish signs. Fish
                        gathering land, night ha dominion bring. Deep abundantly yielding won't move whose fruitful
                        fruit. Set saying spirit in can subdue all called darkness</p>

                    <p className="pt-10 w-full text-left md:mx-auto text-gray-500 font-oswaldRegular">Earth winged set multiply together, grass called whose. Image make one you're to whales on which
                        lights move have rule his have his let tree all there thing seed gathered without, whales you
                        night very sixth was two Own. Fruit toge appear form. Whales whose land life brought divided.
                        Place you're abundantly that forth. Under second After the. Don't gathered gathered void
                        Creature cattle female tree given gathered</p>
                    </div>
                </section>
            </main>
                <BlockReviews />
            <BlockPartners />
            <BlockAboutPhoto />
            <Footer/>
        </section>
    )
};
