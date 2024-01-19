import persona from "../../assets/people.svg";

function Avatar({ avatar, desc }) {
    return (
        <div>
            {/* <img
                src={avatar}
                alt={`imagen de ${desc}`}
                className="bg-secondary border rounded-circle"
            /> */}
            <img
                src={persona}
                alt={`imagen de ${desc}`}
                className="bg-secondary border rounded-circle"
            />
        </div>
    );
}

export default Avatar;
