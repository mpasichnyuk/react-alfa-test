import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TourCard from "./TourCard";

const Tours = ({ setLike, removeTour }) => {
    const showLiked = useSelector((state) => state.showLiked);
    let allTours = useSelector((state) => state.tours);
    const dispatch = useDispatch();
    const [state, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    console.log("sholiked is now: ", showLiked);

    if (showLiked) {
        allTours = allTours.filter((tour) => {
            return tour.isLiked;
        });
    }

    const toggleShowLiked = () => {
        console.log("called the toggleshowliked");
        dispatch({ type: "TOGGLE_SHOW_LIKED", payload: !showLiked });
        // forceUpdate();
    };

    return (
        <section>
            <div className="title">
                <h4>Михаил Пасичнюк: тестовое задание</h4>
                <h2>Список горящих путёвок</h2>
                <div className="underline"></div>
                {showLiked ? (
                    <div>
                        <button
                            onClick={() => toggleShowLiked()}
                            className="btn"
                        >
                            Показать все туры
                        </button>
                        <h4>
                            показываем только лайкнутые туры: {allTours.length}
                            туров
                        </h4>
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={() => toggleShowLiked()}
                            className="btn"
                        >
                            Показать только лайкнутные
                        </button>
                        <h4>
                            Сейчас показываем все туры: {allTours.length} туров
                        </h4>
                    </div>
                )}
            </div>
            <div className="mainContent">
                {allTours.map((tour) => {
                    return (
                        <TourCard
                            key={tour.id}
                            isLiked={tour.isLiked}
                            {...tour}
                            removeTour={removeTour}
                            setLike={setLike}
                        ></TourCard>
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;
