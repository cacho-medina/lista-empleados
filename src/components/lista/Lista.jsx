import Row from "../row/Row";
import empleados from "../../utils/empleados";
function Lista() {
    return (
        <section className="container-fluid">
            <h1 className="text-center py-2">Lista empleados</h1>
            <div className="row">
                {empleados.map((empleado, index) => {
                    return <Row key={index} empleado={empleado} />;
                })}
            </div>
        </section>
    );
}

export default Lista;
