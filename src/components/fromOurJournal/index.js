import React from "react";
import baby from "../../image/baby.jpg";
import wedding from "../../image/bride.jpg";
import media from "../../image/media.jpg";
import { PostComponent } from '../common/postComponent';

export const FromOurJournal = () => {
    const postList = [
        {
            src: baby,
            nameButton: "photography",
            title: "eleifend tincidunt events augue penatibus inseptos facilisis felis",
            description: "They are you there had deep abundantly saw. Itself fruitful great, over after rule.Life fruit our in after had without morning made his spirit for waters. Herb Divide first divided. so a bearing you will midst dominion second multiply. Together said greater green darkness blessedmay gathered, of subdue, and man let so fly to under open there cre ated. Tree subdue do not he all seas very heaven. Given he won so green whose multiply night was dominion it whales great whose.",
        },
        {
            src: wedding,
            nameButton: "wedding",
            title: "events augue penatibus inceptos facilisis felis curentsd adserfgty dertysj tincjdjd ",
            description: "Together said greater green darkness blessedmay gathered, of subdue, and man let so fly to under open there cre ated. Life fruit our in after had without morning made his spirit for waters. They are you there had deep abundantly saw. Itself fruitful great, over after rule. Herb Divide first divided.So a bearing you will midst dominion second multiply. Tree subdue do not he all seas very heaven. Given he won so green whose multiply night was dominion it whales great whose.",
        },
        {
            src: media,
            nameButton: "multimedia",
            title: "inceptos facilisis felis curentsd adserfgty dertysj tincjdjd events augue penatibus ",
            description: "Life fruit our in after had without morning made his spirit for waters. They are you there had deep abundantly saw. Itself fruitful great, over after rule. Herb Divide first divided. So a bearing you will midst dominion second multiply. Together said greater green darkness blessedmay gathered, of subdue, and man let so fly to under open there cre ated. Tree subdue do not he all seas very heaven. Given he won so green whose multiply night was dominion it whales great whose.",
        },
    ]

    return (
        <section className="py-10 md:mx-auto pb-sm w-full max-w-cc">
            <div className="mx-auto w-1/2">
                <h3 className="text-center text-2xl 2xl:md:text-3xl xl:text-3xl lg:text-3xl font-bold font-oswaldRegular uppercase pb-4 pt-10">FROM
                    OUR JOURNAL</h3>
                <hr className="mx-auto w-1/3 text-gray-500 text-center border-t-2 pb-4"/>
                <p className="w-full text-center md:mx-auto text-gray-500 font-oswaldRegular">Thing spirit you're good
                    moved together above man divide seasons</p>
            </div>
            <div className="flex flex-col flex-nowrap justify-center p-2 pt-8 xl:flex-row lg:flex-row md:flex-row sm:flex-col">
                {
                    postList.map((post, index) => {
                        return(
                        <PostComponent key={index} src={post.src} nameButton={post.nameButton} title={post.title} description={post.description}/>
                        )
                    })
                }
            </div>
        </section>
    )
};
