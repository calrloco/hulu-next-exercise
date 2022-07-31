import ThumbNail from "./ThumbNails";
import FlipMove from "react-flip-move";

function Results({results}) {
    return(
        <FlipMove className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 my-5 md:gap-3">
            {
                results.map((result)=>(
                    <ThumbNail key={result.id} result={result} />
                ))
            }
        </FlipMove>
    )
}
export default Results