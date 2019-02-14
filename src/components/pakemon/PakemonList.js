import React from 'react';
import PakemonCard from "./PakemonCard";
import {Response} from '../common/Helper';
import Page from '../common/Page';
import './PakemonCard.css';
class PakemonList extends React.Component {
  constructor() {
    super();
    this.state = {
        results: [], 
        loading:false,
        error: null,
        totalPages: 0,
        offset: 1
    }
    this.handleChangePage=this.handleChangePage.bind(this)
    this.fetchCurrencies = this.fetchCurrencies.bind(this)
  }

  componentDidMount() {
    this.fetchCurrencies()
  }

  fetchCurrencies(){
    this.setState({
      loading: true
    });
    const {offset} = this.state
    fetch(`https://pokeapi.co/api/v2/ability/?limit=12&offset=${offset}`)
      .then(Response)
      .then((data) => {
        console.log(data.results)
        this.setState({
            results: data.results,
            loading:false,
            totalPages: Math.ceil(data.count/10)           
        })
      })
      .catch((error) => {
          this.setState({
              error: error.errorMessage,
              loading:false,
          })
      })
  }

  handleChangePage(event){
    let nextPage = this.state.offset;
    nextPage = event === "next" ? nextPage + 1 : nextPage - 1; 
    this.setState({ offset: nextPage }, ()=>{
      this.fetchCurrencies()
    });
  }
 render() {
      const {results, offset, totalPages} = this.state
      console.log(results)
    return (
      <div className="PokemonList">  
          <div className="PokemonListCard">
              {results.map(res => (<PakemonCard key={res.name} url={res.url} name ={res.name}/>))}
          </div>
          <Page
              offset={offset}
              totalPages={totalPages}
              handleChangePage={this.handleChangePage}
              className="Page"
            />
      </div>
    )}}
export default PakemonList;