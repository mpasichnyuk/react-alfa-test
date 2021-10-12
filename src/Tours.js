import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="title">
                <h2>Наши туры</h2>
                <div className="underline"></div>
            </div>
            <div className="mainContent">
                {tours.map((tour) => {
                    return (
                        <Tour
                            key={tour.id}
                            {...tour}
                            removeTour={removeTour}
                        ></Tour>
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;
