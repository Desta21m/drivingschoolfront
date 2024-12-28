import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Jese Leos",
    text: "SkillWheel provided me with the best driving lessons I could ever ask for. The instructors were friendly and helped me pass my driving test on the first try!",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Ana Smith",
    text: "The online courses offered by SkillWheel are fantastic. I learned everything I needed to know about defensive driving!",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Chris Johnson",
    text: "As a teen, I was nervous about getting my license. But with SkillWheel’s instructors, I gained confidence and passed the test easily!",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    name: "David Brown",
    text: "SkillWheel’s advanced defensive driving course taught me valuable techniques that I use every day!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 5,
    name: "Emily Clark",
    text: "The motorcycle safety course with SkillWheel was the best decision I made. I feel more prepared and safe on the road!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials = () => {

  const { t } = useTranslation('home');
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="py-10 mb-10 w-full max-w-screen-lg">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
          {t("tastiTxt")}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          {t("tastiTitel")}
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          {t("tastiText")}
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
