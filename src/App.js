import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl">

            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.review}</p>
              <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
            </div>
          </div>
        )

        )}
        </Slider>

      </div>
  
     

    </div>
  );
}

const data = [
  {
    name: 'John Arthur',
    img: '/developers/1.jpg',
    review: 'Information of the first developer',
  },
  {
    name: 'Rupam Bharali',
    img: '/developers/2.jpeg',
    review: 'Information of the second developer',
  },
  {
    name: 'Abhinav Bora',
    img: '/developers/3.jpg',
    review: 'Information of the third developer',
  },
  {
    name: 'Bazuka',
    img: '/developers/4.jpeg',
    review: 'Information of the fourth developer',
  },
  {
    name: 'The Rock',
    img: '/developers/5.jpg',
    review: 'Information of the fifth developer',
  },
  
]


export default App;
