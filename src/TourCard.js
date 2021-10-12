import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const TourCard = ({
    id,
    isLiked,
    image,
    info,
    price,
    name,
    removeTour,
    setLike,
}) => {
    const [readMore, setReadMore] = useState(false);
    const dispatch = useDispatch();
    const allTours = useSelector((state) => state.tours);

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? `свернуть` : `далее`}
                    </button>
                </p>
                <button onClick={() => removeTour(id)} className="delete-btn">
                    удалить
                </button>{" "}
                <button
                    onClick={() => setLike(id, isLiked)}
                    className="delete-btn like-btn"
                >
                    {isLiked ? (
                        <FaHeart style={{ color: "red", fontSize: "50px" }} />
                    ) : (
                        <FaRegHeart
                            style={{ color: "red", fontSize: "50px" }}
                        />
                    )}
                </button>
            </footer>
        </article>
    );
};

export default TourCard;
