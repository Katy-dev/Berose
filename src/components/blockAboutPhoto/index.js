import React from "react";
import photo1 from "../../image/blockAbout/blockAboutGallery5.jpg";
import photo2 from "../../image/blockAbout/blockAboutGalerry1.jpg";
import photo3 from "../../image/blockAbout/blockAboutGallery2.jpg";
import photo4 from "../../image/blockAbout/blockAboutGallery3.jpg";
import photo5 from "../../image/blockAbout/blockAboutGallery4.jpg";
import iconCamera from "../../image/icon/photo-camera.svg";

const photoList = [
    photo1,
    photo3,
    photo5,
    photo4,
    photo2,
];

export const BlockAboutPhoto = () => {
    return (
        <section className="md:mx-auto pt-sm h-auto w-full">
            <div className=" w-full flex flex-row flex-nowrap justify-between pb-2">
                {
                    photoList.map((item, index) => {
                        return (
                            <div className="wrapper_img relative max-w-md h-full overflow-hidden">
                                <div>
                                    <img className="img w-full h-auto transform duration-500 transition-all ease-out"
                                         src={item} alt="photo"/>
                                    <div
                                        className="flex justify-center items-center absolute opacity-0 hover:opacity-80 bg-gradient-to-t from-red-700 to-black hover:-translate-y-1  inset-0 w-full h-full">
                                        <img className="block w-12 h-12" src={iconCamera} alt="camera"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
};
