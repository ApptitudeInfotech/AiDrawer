import React from "react";
import PropTypes from 'prop-types';


import AiOverlay from "@aiui/ai-overlay";


/**
 * Minimal Drawer React Component.
 *
 * @author [Apptitude Infotech](https://github.com/ApptitudeInfotech)
 */
const AiDrawer = (props) => {
    const {
        opened = false,
        color = '#ffffff',
        anchor = 'left',
        onClose = () => { },
        width = 280,
        children,
        ...rest
    } = props;

    const anchorStyle = {};
    if (anchor === "left") {
        anchorStyle.top = 0;
        anchorStyle.left = 0;
        anchorStyle.width = `${Number(width)}px`;
        anchorStyle.height = `100%`;
        anchorStyle.transform = (opened ? `translate3d(0, 0, 0)` : `translate3d(-100%, 0, 0)`);
    } else if (anchor === "right") {
        anchorStyle.top = 0;
        anchorStyle.right = 0;
        anchorStyle.width = `${Number(width)}px`;
        anchorStyle.height = `100%`;
        anchorStyle.transform = (opened ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`);
    } else if (anchor === "top") {
        anchorStyle.top = 0;
        anchorStyle.left = 0;
        anchorStyle.right = 0;
        anchorStyle.width = `100%`;
        anchorStyle.minHeight = `40%`;
        anchorStyle.maxHeight = `80%`;
        anchorStyle.transform = (opened ? `translate3d(0, 0, 0)` : `translate3d(0, -100%, 0)`);
    } else if (anchor === "bottom") {
        anchorStyle.bottom = 0;
        anchorStyle.left = 0;
        anchorStyle.right = 0;
        anchorStyle.width = `100%`;
        anchorStyle.minHeight = `40%`;
        anchorStyle.maxHeight = `80%`;
        anchorStyle.transform = (opened ? `translate3d(0, 0, 0)` : `translate3d(0, 100%, 0)`);
    }


    return (
        <React.Fragment>
            <AiOverlay opened={opened} onClose={onClose} />

            <div title="drawer"
                style={{
                    display: `block`,
                    position: `fixed`,
                    visibility: `hidden`,
                    overflow: `auto`,
                    willChange: `transform`,
                    transitionDuration: `0.3s`,
                    transformStyle: `preserve-3d`,
                    zIndex: 1010,
                    WebkitUserSelect: `none`,
                    userSelect: `none`,
                    boxShadow: `0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)`,
                    background: `${color}`,
                    visibility: (opened ? `visible` : `hidden`),
                    ...anchorStyle,
                }}

                {...rest}
            >
                {children}
            </div>
        </React.Fragment>
    );
};

AiDrawer.propTypes = {
    /**
    * If true, the Drawer is open   
    */
    opened: PropTypes.bool,
    /**
    * Drawer Color   
    */
    color: PropTypes.string,
    /**
    * Drawer Placement Anchor   
    */
    anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    /**
   * Drawer Width (for anchor `left` & `right`)  
   */
    width: PropTypes.number,
    /**
     * Callback fired when the component requests to be closed
     */
    onClose: PropTypes.func,
    /**
     * Drawer children, menu buttons
     */
    children: PropTypes.node
};

AiDrawer.defaultProps = {
    opened: false,
    color: '#ffffff',
    anchor: 'left',
    width: 280,
    onClose: () => { },
};

export default AiDrawer;