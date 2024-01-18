import Badge from "react-bootstrap/Badge";
import persona from "../../assets/people.svg";

function Row({ empleado }) {
    return (
        <div className="col-12 border rounded d-flex justify-content-start align-items-center px-1 gap-3 py-3 col-sm-6 col-lg-4">
            <img
                src={persona}
                alt="imagen de empleado"
                className="bg-secondary border rounded-circle"
            />
            <div>
                <p className="fw-medium">{empleado.fullName}</p>
                <p className="small">
                    {empleado.title}{" "}
                    <Badge bg="info" className="text-ligth mediano">
                        {empleado.department}
                    </Badge>
                </p>
            </div>
        </div>
    );
}

export default Row;
