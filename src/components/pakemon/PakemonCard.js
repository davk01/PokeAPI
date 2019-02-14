import React from 'react';

class PakemonCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
            imageUrl: "",
            iconIndex: 0,
            loading: true,
            toMenyRequests:false
        }
      }
    
    componentDidMount() {
      const {url, name} = this.props;
      const iconIndex = url.split("")[url.split("").length-2];
      
      this.setState({
        name: name,
        imageUrl: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${iconIndex}.png?raw=true`,
        iconIndex: +iconIndex
      })
    }
     render() {
       const {name, iconIndex, imageUrl} = this.state;
       return(
        <div className="PokemonLCard">
            <h1>{iconIndex}</h1>
            <div>
                <img 
                    title={name} 
                    src={imageUrl} 
                    onLoad={() =>this.setState({loading: false}) } 
                    onError={() => this.setState({ toMenyRequests:true})}
                    />
                <h2>{name}</h2>
            </div>
        </div>
        )
      }
    }

export default PakemonCard;