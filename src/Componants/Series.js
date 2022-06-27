import react from "react";
import sample from "../JsonFile/sample"


function Series() {
    return (
        <div style={{ height: "60vh" }}>

            <nav class="nav nav-pills bg-dark">
                <div style={{ color: "white", marginLeft: "10%" }}>Popular Series</div>

            </nav>

            {sample && sample.map(({ title, programType, images }) => (
                <div key={title}>{programType}</div>
            )



            )}

        </div >
    );
}

export default Series;
