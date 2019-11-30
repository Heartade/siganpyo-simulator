import React, {Component} from 'react';

export default class OverlayButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn_press: false,
            btn_hover: false
        }
    }
    static defaultProps = {
        left: "auto",
        right: "auto",
        width: "60px",
        height: "40px",
        fontFamily: "Noto Sans KR",
        lightShadow: "0px 0px 10px 4px #666666",
        heavyShadow: "0px 0px 6px 2px #444444",
        default_color: "#FFFFFF",
        hover_color: "#FFFFFF",
        press_color: "#FFFFFF"
    }
    button_common = {
        position: "absolute",
        top: this.props.top,
        left: this.props.left,
        right: this.props.right,
        color: "#FFFFFF",
        width: this.props.width,
        height: this.props.height,
        fontSize: "1rem",
        border: "0",
        borderRadius: this.props.borderRadius,
        overflow: "hidden",
        display: "flex",
        maxWidth: "360px",
        alignItems: "center",
        justifyItems: "center",
        alignContent: "center",
        justifyContent: "center",
        outline: "0",
        zIndex: "5",
        filter: "blur(6px)"
    }
    render() {
        const button_normal = {
            ...this.button_common,
            backgroundColor: this.props.default_bcg_color,
            color: this.props.default_color,
        }
        const button_press = {  
            ...this.button_common,
            backgroundColor: this.props.press_bcg_color,
            color: this.props.press_color,
        }
        const button_hover = {
            ...this.button_common,
            color: this.props.hover_color,
            backgroundColor: this.props.hover_bcg_color,
        }
        return (
            <button style={
                this.state.btn_press ? button_press :
                this.state.btn_hover ? button_hover :
                button_normal}
                onMouseOver={()=>{this.setState({btn_hover: true})}}
                onMouseOut={()=>{this.setState({btn_hover: false})}}
                onMouseDown={()=>{this.setState({btn_press: true, btn_hover: false})}}
                onMouseUp={()=>{this.setState({btn_press: false})}}
                onTouchStart={()=>{this.setState({btn_press: true})}}
                onTouchEnd={()=>{this.setState({btn_press: false, btn_hover: false})}}
                onTouchCancel={()=>{this.setState({btn_press: false, btn_hover: false})}}
                onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}