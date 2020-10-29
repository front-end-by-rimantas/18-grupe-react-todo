import '../css/list.css';
import Item from './Item';

function List() {
    const todosList = [
        {
            id: 1,
            text: 'Iskepti blynu',
            complete: false
        },
        {
            id: 2,
            text: 'Pasigaminti kavos',
            complete: false
        },
        {
            id: 3,
            text: 'Atsiversti Murakami knyga',
            complete: true
        },
    ];

    const todoItems = todosList.map(todo =>
        <Item key={'todo_' + todo.id} text={todo.text} completionStatus={todo.complete} />
    )

    return (
        <div className="list">
            {todoItems}
        </div>
    );
}

export default List;