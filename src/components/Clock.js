function Clock(props) {
    return (
        <div className="title">{props.date.toLocaleTimeString()}</div>
    );
}

export default Clock;