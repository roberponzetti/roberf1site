import React, {Component} from 'react'
import TeamGrid from '../Organisms/TeamGrid'
import axios from 'axios'

class Teams extends Component {

  constructor(props){
    super(props)

    this.state = {
      teams:[]
    }
  }

  componentDidMount(){
    axios.get('https://ergast.com/api/f1/constructors.json')
    .then(response =>
        this.setState({
            teams: response.data
        })
    )
  }

  render(){
    const {teams} = this.state

    return <TeamGrid teams={teams} />
  } 
}

export default Teams;