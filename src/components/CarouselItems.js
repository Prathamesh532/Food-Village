import { IMG_URL } from "../utils/constant"


const CarouselItems = ({ imageId ,  width, height }) => {
    console.log(imageId);

    return (
        <div className='CarouselItems' style={{ width, height }}>
            <img
                className="CarouselImage"
                src={IMG_URL + imageId}
                alt={`Slide img`}
            />
        </div>
    )
}

export default CarouselItems
