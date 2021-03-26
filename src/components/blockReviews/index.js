import React, {Component} from "react";
import Slider from "react-slick";
import avatar2 from "../../image/avatar/avatar2.jpg"
import avatar3 from "../../image/avatar/avatar3.jpg"
import avatar4 from "../../image/avatar/avatar4.jpg"
import avatar5 from "../../image/avatar/avatar5.jpg"
import avatar6 from "../../image/avatar/avatar6.jpg"
import avatar7 from "../../image/avatar/avatar7.jpg"

const reviewsList = [
    {
        href: avatar7,
        context: "You are real professionals, I am very glad that I chose you!",
        author: "by Luiza Burguen"
    },
    {
        href: avatar2,
        context: "It was a pleasure to work with you, thank you very much!",
        author: "by Jenna Ortega"
    },
    {
        href: avatar3,
        context: "You are wonderful. The best moments in my life will forever remain not only in memory but also in photos.",
        author: "by Kate Mur"
    },
    {
        href: avatar4,
        context: "It was a great pleasure to work with you, it was the best experience of my life.",
        author: "by Joan Preston"
    },
    {
        href: avatar5,
        context: "Great job! You are the best!",
        author: "by Luck Morris"
    },
    {
        href: avatar6,
        context: "Got nice emotions thank you for everything and thank you for a good job.",
        author: "by Jon Dou"
    },

];

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none"}}
            onClick={onClick}
        />
    );
}

export class BlockReviews extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="h-2/3 w-full mx-auto mb-6">
                <div className="bg-bgBlockReview bg-cover bg-center bg-no-repeat h-full w-full px-8 relative">
                    <div className="absolute opacity-80 bg-black inset-0 w-full h-full">
                        <div className="max-w-sl lg:max-w-sl mx-auto px-2 py-8">
                            <Slider {...settings}>
                                {
                                    reviewsList.map((item, index) => {
                                        return (
                                            <div
                                                className="flex justify-center items-center h-full w-full focus:outline-none focus:shadow-outline p-8"
                                                key={index}>
                                                <div className="flex items-center justify-center">
                                                    <img
                                                        className="rounded-full w-36 h-36 p-2 focus:outline-none focus:shadow-outline"
                                                        src={item.href} alt="avatar"/>
                                                </div>
                                                <p className="p-4 mx-auto text-center font-oswaldLight text-white text-2xl">{item.context}</p>
                                                <h5 className="p-4 mx-auto text-center font-oswaldRegular text-white text-3xl">{item.author}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
