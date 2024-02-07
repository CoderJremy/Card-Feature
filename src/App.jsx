import { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
    const [index, setIndex] = useState(0);

    const categoryBgColors = {
        basketball: "hsl(28, 100%, 55%)",
        football: "hsl(200, 100%, 50%)",
    };

    const data = [
        {
            imagePath:
                "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX4n2YLQE2JceIRELRxisiFQPdeRAZFurulyeYj6TVLTHNNWme",
            heading: "Michael Jordan",
            paragraph:
                "His unparalleled basketball prowess revolutionized the game, setting a standard of excellence that few have matched.",
            category: "Basketball",
        },
        {
            imagePath: "https://i.cbc.ca/1.6780509.1678947657!/fileImage/httpImage/1456603641.jpg",
            heading: "Tyreek Hill",
            paragraph:
                "Hill's blazing speed and electrifying agility make him a game-changer on the football field, leaving opponents in his wake as he races towards the end zone.",
            category: "Football",
        },
        {
            imagePath:
                "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/GettyImages-1250842920-copy.jpg",
            heading: "Kevin Durant",
            paragraph:
                "With a silky-smooth shooting stroke and versatility on the court make him a formidable force in basketball, challenging defenders and dazzling fans with his skill.",
            category: "Basketball",
        },
    ];

    function viewNextSlide() {
        index < 2 ? setIndex((i) => i + 1) : setIndex(0);
    }

    function viewPreviousSlide() {
        index === 0 ? setIndex(2) : setIndex((i) => i - 1);
    }

    return (
        <>
            <Card
                imgUrl={data[index].imagePath}
                heading={data[index].heading}
                paragraph={data[index].paragraph}
                category={data[index].category}
                styling={
                    data[index].category === "Basketball"
                        ? { backgroundColor: categoryBgColors.basketball }
                        : { backgroundColor: categoryBgColors.football }
                }
            />
            <div className="controls">
                <button id="next-btn" onClick={viewNextSlide}>
                    Next Slide
                </button>
                <button id="previous-btn" onClick={viewPreviousSlide}>
                    Previous Slide
                </button>
            </div>
        </>
    );
}

export default App;
