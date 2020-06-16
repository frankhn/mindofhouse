import React, { Fragment } from "react";
import './Map.scss'

export interface IMapProps { };

const Map: React.FC<IMapProps> = (props) => {
    return (
        <Fragment>
            <iframe
                width="100%"
                height="495"
                className="frame"
                title="my title map"
                // frameborder="0"
                scrolling="no"
                // marginheight="0"
                // marginwidth="0"
                src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed">
            </iframe>
        </Fragment>
    );
}

export default Map;