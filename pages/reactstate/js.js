

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typed:'',
      m1:0,
      m2:0,
      operation:'Addition'
    };
  }
  

  calculate(a,b,operand) {
    let x = Number(a); let y = Number(b);
    if(operand == 'Addition') return (x + y);
    else if(operand == 'Subtraction') return (x - y);
    else if(operand == 'Multiplication') return (x * y);
    else if(operand == 'Division') return (x / y);}
  
  MathAddition()       {this.setState({operation:'Addition'});}
  MathSubtraction()    {this.setState({operation:'Subtraction'});}
  MathMultiplication() {this.setState({operation:'Multiplication'});}
  MathDivision()       {this.setState({operation:'Division'});}
  
  BINDm1(e) {this.setState({m1:e.target.value })}
  BINDm2(e) {this.setState({m2:e.target.value })}
  
  displayTyped(event) {this.setState({typed:event.target.value})}
  
  render() {
    return (
      <section id="-app">
        <h2> Printer: </h2>
        <input value={this.state.typed} onChange={this.displayTyped.bind(this)} />
        <h5>{this.state.typed}</h5>
        <hr/> 
        <h2> Calculator: </h2>
        <input value={this.state.m1} onChange={this.BINDm1.bind(this)} placeholder="First value"/>
        <input value={this.state.m2} onChange={this.BINDm2.bind(this)} placeholder="Second value"/>
        <h2>{this.calculate(this.state.m1, this.state.m2, this.state.operation)}</h2>
        <h5> Currently: {this.state.operation}</h5>
        <button onClick={this.MathAddition.bind(this)}> Addition </button>
        <button onClick={this.MathSubtraction.bind(this)}> Subtraction </button>
        <button onClick={this.MathMultiplication.bind(this)}> Multiplication </button>
        <button onClick={this.MathDivision.bind(this)}> Division </button>
        <p/>
      </section>
    );
  }
}
          
class PropState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'btn1':0,
      'btn2':0,
      'btn3':0,
      'btn4':0,
      'btn5':0,
      current:0,
      highest:'',
    }
  }
  
  increaseState(id) {
    let currentState = this.state[id];
    this.setState({[id]:(currentState+1)});
  }
    
  tryActive(e) {
    let id = String(e.target.id);
    this.increaseState(id);
    document.getElementById('btn1').className = '';
    document.getElementById('btn2').className = '';
    document.getElementById('btn3').className = '';
    document.getElementById('btn4').className = '';
    document.getElementById('btn5').className = '';
    if(this.state[id] >= this.state.current) {
      this.setState({current:this.state[id], highest:id}); 
    }
    let highest = String(this.state.highest);
    if(highest) {
      document.getElementById(highest).className = 'active';
    }
    
  } 
    
  render() {
    return (
      <section id="-app-2">
        <div id="buttons">
          <button id="btn1" onClick={this.tryActive.bind(this)}>{this.state.btn1}</button>
          <button id="btn2" onClick={this.tryActive.bind(this)}>{this.state.btn2}</button>
          <button id="btn3" onClick={this.tryActive.bind(this)}>{this.state.btn3}</button>
          <button id="btn4" onClick={this.tryActive.bind(this)}>{this.state.btn4}</button>
          <button id="btn5" onClick={this.tryActive.bind(this)}>{this.state.btn5}</button>
        </div>
      </section>
    );
  }
}



ReactDOM.render(<App/>,document.getElementById('App'));
ReactDOM.render(<PropState/>,document.getElementById('Prop'));

