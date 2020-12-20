import React, { Component } from 'react';
import Cronometro from "./assets/cronometro.png";
import './App.css';
class App extends Component {

	constructor(props){
		
		super(props);
		
		this.state = {
			numero: 0,
			botao: "Iniciar"
		}

		this.timer = null;
	};

	iniciar = (event) => {
		event.preventDefault();

		let state = this.state
		
		if(this.timer !== null){
			clearInterval(this.timer);
			this.timer = null;
			state.botao = "Iniciar"
		}else{
			this.timer = setInterval(()=>{
				let state = this.state;
				state.numero += 0.1;
				this.setState(state);
			},100);
			state.botao = "Parar"
		}
	};

	zerar = (event) => {
		event.preventDefault();

		if(this.timer !== null){
			clearInterval(this.timer);
			this.timer = null;
		}

		let state = this.state;
		state.numero = 0;
		state.botao = "Iniciar";
		this.setState(state);
	};

	render(){
		return(
			<div className="cronometro-corpo">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-lg-4">
							<div className="cronometro">
								<img className="img-fluid" src={Cronometro} alt=""></img>
								<button className="contador">{this.state.numero.toFixed(1)}</button>
								<div className="controladores">
									<button onClick={this.iniciar}>{this.state.botao}</button>
									<button onClick={this.zerar}>Zerar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default App;