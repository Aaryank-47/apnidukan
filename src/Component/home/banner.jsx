import { bannerData } from "../../constant/data";
import Carousel from "react-multi-carousel";
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const Image =  styled('img')({
    marginTop:15,
    width: '100%',
    height:265,
    borderRadius: 30

})

const responsive = {
   desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
 
const Banner = () => {
     return( 
       < Carousel 
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
       swipeable={false}
       draggable={false}
       //showDots={true}
       
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={3200}
       keyBoardControl={true}
       responsive =  {responsive}  
       >
        {
                  bannerData.map(data => (
                  <Image src={data.url} alt="banner" />
                ))
            }
        
       </ Carousel>
     )
}
export default Banner;