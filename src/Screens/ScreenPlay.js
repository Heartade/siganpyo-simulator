import React, {Component} from 'react';
import TimeTable from './ScreenPlay/TimeTable.js';
import TimeButton from '../Components/TimeButton.js';
import OverlayButton from '../Components/OverlayButton.js';

export default class ScreenPlay extends Component {
  state = {
    table: [
        [...Array(12)],
        [...Array(12)],
        [...Array(12)],
        [...Array(12)],
        [...Array(12)],
      ], 
    tableName: "혼란",
    classHours: 0,
    loop: false,
    started: false,
    playing: false
  }

  constructor(props) {
    super(props)

    this.default_color = '#EEEEEE';
    this.current_color = '#FFCC66';
    this.subject_colors = [
      '#EEBB33',
      '#CC3366',
      '#66CC33',
      '#66AAFF',
      '#FFFFFF'
    ]
    this.subject_names = [
      [
        '노랑의 이해',
        '노랑 개론',
        '사회 속의 노랑',
        '노랑의 심리학',
        '4차 산업혁명과 노랑',
        '초급 노랑',
        '중급 노랑',
        '고급 노랑',
        '기초 노랑',
        '심화 노랑',
        '노랑의 이론',
        '노랑의 실제',
        '노랑 실험',
        '노랑과 인공지능',
        '노랑 캡스톤 프로젝트'
      ],
      [
        '빨강의 이해',
        '빨강 개론',
        '사회 속의 빨강',
        '빨강의 심리학',
        '4차 산업혁명과 빨강',
        '초급 빨강',
        '중급 빨강',
        '고급 빨강',
        '기초 빨강',
        '심화 빨강',
        '빨강의 이론',
        '빨강의 실제',
        '빨강 실험',
        '빨강과 인공지능',
        '빨강 캡스톤 프로젝트'
      ],
      [
        '초록의 이해',
        '초록 개론',
        '사회 속의 초록',
        '초록의 심리학',
        '4차 산업혁명과 초록',
        '초급 초록',
        '중급 초록',
        '고급 초록',
        '기초 초록',
        '심화 초록',
        '초록의 이론',
        '초록의 실제',
        '초록 실험',
        '초록과 인공지능',
        '초록 캡스톤 프로젝트'
      ],
      [
        '파랑의 이해',
        '파랑 개론',
        '사회 속의 파랑',
        '파랑의 심리학',
        '4차 산업혁명과 파랑',
        '초급 파랑',
        '중급 파랑',
        '고급 파랑',
        '기초 파랑',
        '심화 파랑',
        '파랑의 이론',
        '파랑의 실제',
        '파랑 실험',
        '파랑과 인공지능',
        '파랑 캡스톤 프로젝트'
      ],
      ['공강']
    ]
    this.default_cell = {
      class_info: 'None',
      color: this.default_color,
    }
    this.currentUserLoc = [0,0];
    this.interval = null;
    this.blockMoveLock = false;
    this.templates = [
      [
        "?????????XXX",
        "?????????XXX",
        "?????????XXX",
        "?????????XXX",
        "?????????XXX",
        "저녁이 있는 삶"
      ],
      [
        "XXX?????????",
        "XXX?????????",
        "XXX?????????",
        "XXX?????????",
        "XXX?????????",
        "아침이 있는 삶"
      ],
      [
        "????###?????",
        "????###?????",
        "????###?????",
        "????###?????",
        "????###?????",
        "강제적 점심 단식"
      ],
      [
        "????????????",
        "????????????",
        "????????????",
        "????????????",
        "XXXXXXXXXXXX",
        "불금의 공강"
      ],
      [
        "#???????????",
        "#???????????",
        "#???????????",
        "#???????????",
        "#???????????",
        "아침형 인간"
      ],
    ]

    for(var i = 0; i < 5; i++) {
      for(var j = 0; j < 12; j++) {
        this.state.table[i][j] = {...this.default_cell};
      }
    }
  }

  startLoop() {
    this.setState({loop: true, started: true, playing: true}, ()=>{
      this.interval = setInterval(this.loop.bind(this), 1000);
    })
  }

  endLoop() {
    this.setState({playing: false});
    if(this.interval != null)
      clearInterval(this.interval)
  }

  pauseLoop() {
    this.setState({loop: false}, ()=>{
      if(this.interval != null)
        clearInterval(this.interval)
    })
  }

  resumeLoop() {
    if(this.state.loop) return;
    this.setState({loop: true, started: true}, ()=>{
      this.interval = setInterval(this.loop.bind(this), 1000);
    })
  }

  resetLoop() {
    this.pauseLoop();
    var table = this.state.table;
    for(var i = 0; i < 5; i++) {
      for(var j = 0; j < 12; j++) {
        table[i][j] = this.default_cell;
      }
    }
    this.currentUserLoc = [0,0];
    this.setState({table: table, classHours: 0});
  }

  loop() {
    if(this.state.loop === false) return false;

    this.blockMoveLock = true;
    this.currentUserLoc[1]--;

    var table = this.state.table;

    if(this.currentUserLoc[1] === -1 || table[this.currentUserLoc[0]][this.currentUserLoc[1]].color
      !== this.default_color
      ) {
      // when finished
      if(this.currentUserLoc[1] === 10) {
        console.log("finished");
        this.setState({loop: false});
        clearInterval(this.interval);
        this.endLoop();
        for(var i = 0; i < 5; i++) {
          for(var j = 0; j < 12; j++) {
            if(table[i][j].color === this.default_color) {
              table[i][j].color = this.subject_colors[4];
            }
          }
        }
        this.setState({table: table}, ()=>{this.checkTable()});
        return false;
      }
      // if four classes in a row
      if(this.currentUserLoc[1] !== -1 &&
        table[this.currentUserLoc[0]][this.currentUserLoc[1]+1].color !== this.subject_colors[4] &&
        this.currentUserLoc[1]>=2 && 
        table[this.currentUserLoc[0]][this.currentUserLoc[1]+1].color
        === table[this.currentUserLoc[0]][this.currentUserLoc[1]].color &&
        table[this.currentUserLoc[0]][this.currentUserLoc[1]+1].color
        === table[this.currentUserLoc[0]][this.currentUserLoc[1]-1].color &&
        table[this.currentUserLoc[0]][this.currentUserLoc[1]+1].color
        === table[this.currentUserLoc[0]][this.currentUserLoc[1]-2].color
        ) {
        for(var j = -1; j < 3; j++)
          table[this.currentUserLoc[0]][this.currentUserLoc[1]-j] = this.default_cell
        this.setState({classHours: this.state.classHours-4});
      }
      // finish placing a block
      this.currentUserLoc[0] = Math.floor(Math.random()*5);
      this.currentUserLoc[1] = 11;
      const subject_color = Math.floor(Math.random()*5);
      table[this.currentUserLoc[0]][this.currentUserLoc[1]] = {
        class_info: this.subject_names[subject_color][Math.floor(Math.random()*this.subject_names[subject_color].length)],
        color: this.subject_colors[subject_color],
      }
      if(table[this.currentUserLoc[0]][this.currentUserLoc[1]].color !== this.subject_colors[4])
        this.setState({classHours: this.state.classHours+1});
      this.setState({table: table});
      this.blockMoveLock = false;
      return false;
    } else {
      // move the block
      table[this.currentUserLoc[0]][this.currentUserLoc[1]] = table[this.currentUserLoc[0]][this.currentUserLoc[1]+1];
      table[this.currentUserLoc[0]][this.currentUserLoc[1]+1] = this.default_cell;
      this.setState({table: table}, ()=>{});
      this.blockMoveLock = false;
      return true;
    }
  }

  keyHandle(event) {
    console.log(event.key);
    if(this.blockMoveLock || !this.loop || this.state.creditTxt_focus) return;
    switch(event.key) {
      case 'ArrowLeft':
        this.keyLeft();
        break;
      case 'ArrowRight':
        this.keyRight();
        break;
      case 'ArrowUp':
        this.keyUp();
        break;
      default:
        break;
    }
  }

  keyLeft() {
    this.blockMoveLock = true;
    console.log("left");
    if(this.state.loop && 
      this.currentUserLoc[0] !== 0 &&
      this.state.table[this.currentUserLoc[0]-1][this.currentUserLoc[1]].color === this.default_color) {
        this.currentUserLoc[0]--;
        var table = this.state.table;
        table[this.currentUserLoc[0]][this.currentUserLoc[1]] = table[this.currentUserLoc[0]+1][this.currentUserLoc[1]];
        table[this.currentUserLoc[0]+1][this.currentUserLoc[1]] = this.default_cell;
        this.setState({table: table}, ()=>{});
    }
    this.blockMoveLock = false
  }

  keyRight() {
    this.blockMoveLock = true;
    console.log("right");
    console.log(this.currentUserLoc[0]+':'+this.currentUserLoc[1]);
    if(this.state.loop && 
      this.currentUserLoc[0] !== 4 &&
      this.state.table[this.currentUserLoc[0]+1][this.currentUserLoc[1]].color === this.default_color) {
        this.currentUserLoc[0]++;
        var table = this.state.table;
        table[this.currentUserLoc[0]][this.currentUserLoc[1]] = table[this.currentUserLoc[0]-1][this.currentUserLoc[1]];
        table[this.currentUserLoc[0]-1][this.currentUserLoc[1]] = this.default_cell;
      this.setState({table: table}, ()=>{});
    }
    this.blockMoveLock = false
  }

  keyUp() {
    while(this.loop()){}
  }

  componentDidMount() {
    this.keyDownListener = this.keyHandle.bind(this);
    document.addEventListener("keydown", this.keyDownListener);
    //this.startLoop();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownListener);
    this.endLoop();
  }

  checkTable() {
    for(var i = 0; i < this.templates.length; i++) {
      var flag = true;
      for(var j = 0; j < 5; j++) {
        for(var k = 0; k < 12; k++) {
          console.log(this.templates[i][j][k])
          switch(this.templates[i][j][k]) {
            case '#':
              if(this.state.table[j][k].color === this.subject_colors[4]) flag=false;
              break;
            case '?':
              break;
            case 'X':
              if(this.state.table[j][k].color !== this.subject_colors[4]) flag=false;
              break;
            default:
              break;
          }
          if(!flag) break;
          console.log(flag);
        }
        if(!flag) break;
      }
      if(flag) {
        this.setState({tableName: this.templates[i][5]});
        return;
      }
    }
  }
  
  render() {
    const root_div_style = {
      backgroundColor: "#FFFFFF",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      alignContent: "stretch",
      justifyContent: "stretch",
      flexDirection: "column",
      height: "100vh",
      color: "#666666",
      fontSize: "0.8rem"
    }
    const table_div_style = {
      flex: "1",
      display: "flex",
      alignItems: "center",
      alignContent: "stretch",
      flexDirection: "column",
      boxShadow: "0px 0px 20px 4px #CCCCCC",
      width: "90%",
      maxWidth: "480px",
      margin: "0px 24px 24px 24px",
      borderRadius: "12px",
      overflow: "hidden"
    }
    const control_div_style = {
      height: "48px", 
      margin: "6px 0px 12px 0px",
      display: "flex",
      alignItems: "stretch",
      alignContent: "stretch",
      flexDirection: "row",
      width: "80%",
      maxWidth: "480px",
      overflow: "hidden"
    }
    const modal_style = {
      display: this.state.started ? "none" : "flex",
      alignItems: "center",
      alignContent: "center",
      position: "absolute",
      flexDirection: "column",
      justifyContent: "center",
      zIndex: "10",
      top: "7.5%",
      height: "85%",
      width: "85%",
      background: "rgba(0, 0, 0, 0.5)",
      boxShadow: "0px 0px 20px 4px #AAAAAA",
      backdropFilter: "blur(4px)",
      borderRadius: "12px"
    }

    return (
      
      <div style={root_div_style}>
        <div style={control_div_style}>
          <input type="text" defaultValue="2019년 2학기" style={{
            fontWeight: "500",
            margin: "8px 0px 8px 8px",
            border: "0px",
            outline: "0px",
            color: this.state.creditTxt_focus? "#666666":"#888888",
            backgroundColor: this.state.creditTxt_hover? "#EEEEEE":"#FFFFFF",
            fontSize: "1rem",
            borderRadius: "4px",
            flex: "4"
          }}
            onFocus={()=>{this.setState({creditTxt_focus: true})}}
            onBlur={()=>{this.setState({creditTxt_focus: false})}}
            onMouseOver={()=>{this.setState({creditTxt_hover: true})}}
            onMouseOut={()=>{this.setState({creditTxt_hover: false})}}
          />

          <p style={{
            fontWeight: "500", lineHeight: "32px", margin: "8px 8px 8px 0",fontSize: "1rem", color: "#888888", flex: "1", textAlign: "right"}}>
          {this.state.classHours}학점
          </p>
        </div>
        <div style={table_div_style}>
          <TimeTable defaultColor={this.default_color} table={this.state.table} />
        </div>
        <div style={{...control_div_style,
        margin: "0px 24px 24px 24px",
        flexDirection: "column",
        display: this.state.started?this.state.playing?"none":"flex":"none",
        height: "64px",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        flex: "0 0 auto"
        }}>
          <p style={{margin: "0"}}>당신의 시간표는</p>
          <p style={{margin: "0", fontSize: "1rem", fontWeight: "bold"}}>{this.state.tableName}</p>
        </div>
        <div style={{...control_div_style,
        display: this.state.started?this.state.playing?"flex":"none":"flex",
        overflow: "visible",
        justifyContent: "space-between",
        height: "64px"}}>
          <TimeButton 
            width="40px"
            height="40px"
            default_color="#66AAFF"
            hover_color="#AADDFF"
            press_color="#AADDFF"
            default_bcg_color="#FFFFFF" 
            hover_bcg_color="#FFFFFF" 
            press_bcg_color="#CCCCCC" 
            lightShadow="0px 0px 20px 4px #CCCCCC"
            heavyShadow= "0px 0px 6px 2px #AAAAAA"
            onClick={this.resetLoop.bind(this)}>
            <i className="material-icons md-24">replay</i>
          </TimeButton>
          <TimeButton 
            width="40px"
            height="40px"
            default_color="#66AAFF"
            hover_color="#AADDFF"
            press_color="#AADDFF"
            default_bcg_color="#FFFFFF" 
            hover_bcg_color="#FFFFFF" 
            press_bcg_color="#CCCCCC" 
            lightShadow="0px 0px 20px 4px #CCCCCC"
            heavyShadow= "0px 0px 6px 2px #AAAAAA"
            onClick={this.resumeLoop.bind(this)}>
            <i style={{
              color: this.state.loop?"#66CC33":"#66AAFF"
            }} className="material-icons md-24">play_arrow</i>
          </TimeButton>
          <TimeButton 
            width="40px"
            height="40px"
            default_color="#66AAFF"
            hover_color="#AADDFF"
            press_color="#AADDFF"
            default_bcg_color="#FFFFFF" 
            hover_bcg_color="#FFFFFF" 
            press_bcg_color="#CCCCCC" 
            lightShadow="0px 0px 20px 4px #CCCCCC"
            heavyShadow= "0px 0px 6px 2px #AAAAAA"
            onClick={this.pauseLoop.bind(this)}>
            <i style={{
              color: this.state.loop?"#66AAFF":"#CC3366"
            }} className="material-icons md-24">pause</i>
          </TimeButton>
        </div>
        <div style={modal_style}>
          <p style={{fontSize: "1.5rem", color: "#FFFFFF"}}>
            시간표 시뮬레이터 2019
          </p>
          <TimeButton 
            default_bcg_color={this.subject_colors[2]} 
            hover_bcg_color="#229911" 
            press_bcg_color="#116606" 
            onClick={this.startLoop.bind(this)}>
            시작
          </TimeButton>
        </div>
        <OverlayButton
          left="0" 
          default_bcg_color="rgba(0,0,0,0)"
          hover_bcg_color="rgba(102,170,255,0.2)"
          press_bcg_color="rgba(102,170,255,0.3)"
          borderRadius="0px 16px 16px 0px"
          height="80%"
          width="15%"
          top="10%"
          onClick={this.keyLeft.bind(this)}/>
        <OverlayButton
          right="0" 
          default_bcg_color="rgba(0,0,0,0)"
          hover_bcg_color="rgba(102,170,255,0.2)"
          press_bcg_color="rgba(102,170,255,0.3)"
          borderRadius="16px 0px 0px 16px"
          height="80%"
          width="15%"
          top="10%"
          onClick={this.keyRight.bind(this)}/>
        <OverlayButton
          top="0" 
          default_bcg_color="rgba(0,0,0,0)"
          hover_bcg_color="rgba(102,170,255,0.2)"
          press_bcg_color="rgba(102,170,255,0.3)"
          borderRadius="0px 0px 16px 16px"
          height="10%"
          width="50%"
          left="25%"
          onClick={this.keyUp.bind(this)}/>

      </div>  
    );
  }
}
