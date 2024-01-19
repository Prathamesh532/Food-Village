import { useState, useEffect } from 'react'
import CarouselItems from './CarouselItems';


const CarouselContainer = () => {
  const [foodType, setFoodType] = useState([]);

  useEffect(() => {
    getItemType();
  }, []);

  const getItemType = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const itemTypeData = json?.data?.cards[1]?.card?.card?.imageGridCards?.info;
    setFoodType(itemTypeData);
  };


  return (
    <div className='CarouselContainer'>
      <div className='CarouselTrack'>
        {
          foodType.map(item => {
            return <CarouselItems imageId={item.imageId} key={item.id} width={300} 
              height={200} />
          })
        }
      </div>
    </div>
  )
}

export default CarouselContainer
