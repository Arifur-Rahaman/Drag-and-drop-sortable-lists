import update from "immutability-helper";
import { useCallback} from "react";
import { Card } from "./Card.js";
const style = {
    width: 400
};
const Container = ({tasks, setTasks}) => {
    const moveCard = useCallback((dragIndex, hoverIndex) => {

        setTasks((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]]
                ]
            })
        );
    }, []);

    const renderCard = useCallback((task, index) => {
        return (
            <Card
                key={task.title}
                index={index}
                id={task.title}
                text={task}
                moveCard={moveCard}
            />
        );
    }, []);

    return (
        <>
            <div style={style}>{tasks.map((task, i) => renderCard(task, i))}</div>
        </>
    );

};

export default Container