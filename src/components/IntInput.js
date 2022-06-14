// sliders are harder than you might expect
import ReactSlider from "react-slider";

// what's the simplest way to do this?

export default function IntInput(props) {
    return (
        <div id="IntInput">
            <ReactSlider 
            className="horizontal-slider" 
            thumbClassName="example-thumb" 
            trackClassName="example-track"/>
        </div>
    );
}