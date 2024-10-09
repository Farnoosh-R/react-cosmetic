import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = ({
    images=[
        {
            imgSrc: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
            num: 1
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
            num: 2
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
            num: 3
        },
        {
            imgSrc: "https://png.pngtree.com/background/20230412/original/pngtree-natural-forest-cloud-smoke-picture-image_2394854.jpg",
            num: 4
        },
        {
            imgSrc: "https://png.pngtree.com/background/20231030/original/pngtree-lush-verdant-woodland-a-3d-rendered-scene-of-a-dense-green-picture-image_5808749.jpg",
            num: 5
        },
        {
            imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/046/718/679/small_2x/a-vibrant-forest-bursting-with-greenery-and-various-plants-illuminated-by-rays-of-sunlight-filtering-through-the-canopy-photo.jpg",
            num: 6
        }
    ]
}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <Slider {...settings}>
        {images.map((slide) => {
            return(
                <div>
                <img className="mx-auto" src={slide.imgSrc}/>
                <h3>{slide.num}</h3>
              </div>
            )
        })}
 
      </Slider>
    )
}
export default SlideShow;