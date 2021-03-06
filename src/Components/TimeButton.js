import React, {Component} from 'react';

export default class TimeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn_press: false,
            btn_hover: false
        }
    }
    static defaultProps = {
        width: "60px",
        height: "40px",
        fontFamily: "Noto Sans KR",
        lightShadow: "0px 0px 10px 4px #666666",
        hoverShadow: "0px 0px 20px 8px #666666",
        heavyShadow: "0px 0px 6px 2px #444444",
        borderRadius: "4px",
        default_color: "#FFFFFF",
        hover_color: "#FFFFFF",
        press_color: "#FFFFFF"
    }
    button_common = {
        color: "#FFFFFF",
        width: this.props.width,
        height: this.props.height,
        fontSize: "1rem",
        boxShadow: this.props.lightShadow,
        border: "0",
        borderRadius: this.props.borderRadius,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        alignContent: "center",
        justifyContent: "center",
        outline: "0"
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
            boxShadow: this.props.heavyShadow,
        }
        const button_hover = {
            ...this.button_common,
            color: this.props.hover_color,
            backgroundColor: this.props.hover_bcg_color,
            boxShadow: this.props.hoverShadow,
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