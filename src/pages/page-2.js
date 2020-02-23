import React from "react"
import { Link } from "gatsby"
import axios from 'axios';

import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends React.Component{
  state = {
    loading:true,
    error:false,
    fetchedData : [],
  }
  async componentDidMount(){
    const response = await axios.get('https://swapi.co/api/people/');
    if(response && response.data.results){
      this.setState({
        fetchedData: response.data.results,
        loading:false,
      })
    }
  }
  render(){
    const {fetchedData} = this.state;
    return(
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        {fetchedData.map(person =>  <p key={person.name}>{person.name}</p> )}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage
