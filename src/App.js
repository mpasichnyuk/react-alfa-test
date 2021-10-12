import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useDispatch, useSelector } from "react-redux";

// URL for API to fetch the data
const url = "https://course-api.com/react-tours-project";

function App() {
    const dispatch = useDispatch();
    const allTours = useSelector((state) => state.tours);
    const [loading, setLoading] = useState(false);
    const [state, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const setLike = (id, isLiked) => {
        allTours.find((x) => x.id === id).isLiked = !isLiked;
        console.log("set liked wroked! ", allTours);
        dispatch({ type: "UPDATE_TOURS", payload: allTours });
        forceUpdate();
    };

    const removeTour = (id) => {
        const newTours = allTours.filter((tour) => tour.id !== id);
        dispatch({ type: "UPDATE_TOURS", payload: newTours });
    };

    const fetchTours = async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            tours.forEach((tour) => {
                tour.isLiked = false;
            });
            dispatch({ type: "UPDATE_TOURS", payload: tours });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    // useEffect(() => {
    //     fetchTours();
    // }, []);

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (allTours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h3>Михаил Пасичнюк: тестовое задание</h3>
                    <p>SPA с карточками о горячих путевках</p>
                    <h2>Сейчас список туров пуст</h2>
                    <button className="btn" onClick={() => fetchTours()}>
                        Загрузить список туров с сервера
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Tours setLike={setLike} removeTour={removeTour} />
        </main>
    );
}

export default App;
