import React, {Component} from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../services/api";
// const { repository } = useParams()

import {Container, Loading, Owner, IssuesList} from './styles.js'

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Repository extends Component{
  state = { repository:{}, issues:[], loading:true }
  async componentDidMount(){
    const { repository } = this.props.params
    const [ repository_data, issues ] = await Promise.all([api.get(`/repos/${repository}`), await api.get(`/repos/${repository}/issues`, {params:{state:'open', per_page:5,}}) ])
    
    this.setState({repository: repository_data.data, issues:issues.data,loading:false})
  }

  render(){
    const {repository, issues, loading } = this.state

    if(loading){
      return <Loading>Carregando...</Loading>
    }

    return <Container>
      <Owner>
        <Link to="/">Voltar</Link>
        <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login}></img>
            <div>
              <strong> 
                <a href={issue.html_url}>{issue.title}</a> 
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>
    </Container>
  }
}
export default withParams(Repository);