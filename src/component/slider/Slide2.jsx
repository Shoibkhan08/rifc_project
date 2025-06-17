import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cartblog from '../card/Cartblog'
import person_1 from "../../assets/img_1.jpg"
import person_2 from "../../assets/img_2.jpg"
import person_3 from "../../assets/img_3.jpg"

export default function Slide2() {

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024, // for large screens/tablets
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768, // for tablets
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480, // for mobile phones
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};


    const data = [
            { id: 1, img: `${person_1}`, title: 'May 20, 2020', name: 'suraj choudhary', date: '15spt 2024' },
            { id: 2, img: `${person_2}`, title: 'May 20, 2020', name: 'suraj choudhary', date: '15spt 2024' },
            { id: 3, img: `${person_3}`, title: 'May 20, 2020', name: 'suraj choudhary', date: '15spt 2024' },
            { id: 4, img: `${person_1}`, title: 'May 20, 2020', name: 'suraj choudhary', date: '15spt 2024' },
            { id: 5, img: `${person_2}`, title: 'May 20, 2020', name: 'suraj choudhary', date: '15spt 2024' },
            { id: 6, img: `${person_3}`, title: 'May 20, 2020', name: 'suraj choudhary', date: '15spt 2024' },
            // { id: 7, img: `${person_7}`, title: 'welcome', name: 'suraj choudhary', date: '15spt 2024' }
        ]

    return (
        <>
        <Slider {...settings}>
            {/* <Grid> */}

           {data.map((data)=>(
               <div key={data.id} style={{ margin: '0 5px',}}>
                    <Cartblog img={data.img} title={data.title} name={data.name} />
                </div>)
           )}
        </Slider>
        </>
    )
}
