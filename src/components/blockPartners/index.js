import React, { Component } from "react";
import Slider from "react-slick";
import partnerOne from "../../image/icon/logoParthnerOne.png";
import partnerTwo from "../../image/icon/logoPartnerTwo.png";
import partnerThree from "../../image/icon/logoPartnerThree.png";
import partnerFour from "../../image/icon/logoPartnerFive.png";

const partnersList = [
    partnerOne,
    partnerTwo,
    partnerThree,
    partnerFour,
    partnerOne,
    partnerTwo,
];

export class BlockPartners extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="mx-auto py-sm px-5 max-w-cc">
                <div className="max-w-sl lg:max-w-sl mx-auto">
                    <Slider {...settings}>
                        {
                            partnersList.map((item, index) => {
                                return (
                                    <div className="focus:outline-none focus:shadow-outline" key={index}>
                                        <img className="mx-auto w-full h-auto p-2 focus:outline-none focus:shadow-outline" src={ item } alt="logo"/>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        );
    }
}
