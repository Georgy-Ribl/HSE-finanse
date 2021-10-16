import * as React from 'react';
import {Typography} from "@material-ui/core";

function Title(props) {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {/*{props.children}*/}
        </Typography>
    );
}

// Title.propTypes = {
//     children: PropTypes.node,
// };

export default Title;