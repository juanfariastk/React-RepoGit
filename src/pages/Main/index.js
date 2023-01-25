import React, {Component} from "react";
import { Link } from "react-router-dom";

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton, List } from "./styles";

import api from "../../services/api";

export default class Main extends Component {
    state={ new_repo:'', repositories:[], loading:false, }

    componentDidMount(){
        const repositories = localStorage.getItem('repositories')
        if(repositories){
            this.setState({repositories:JSON.parse(repositories)})
        }
    }
    componentDidUpdate(_, prevState){
        const {repositories} = this.state
        if(prevState.repositories !== repositories){
            localStorage.setItem('repositories', JSON.stringify(repositories))
        }
    }
    
    handleInputChange = e => { this.setState({new_repo: e.target.value})};

    handleSubmit = async e =>{
        e.preventDefault()

        this.setState({loading:true})
        console.log(this.state.new_repo)

        const {new_repo, repositories} = this.state

        const response = await api.get(`repos/${new_repo}`)
        
        const data = { name: response.data.full_name,}

        this.setState({ repositories:[...repositories, data], new_repo:'', loading:false,})
    }
    render() {
        const {new_repo, repositories, loading} = this.state

        return (
        <Container>
            <h1>
                <FaGithubAlt/>
                Repositórios
            </h1>

            <Form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Adicionar repositório" value={new_repo} onChange={this.handleInputChange}/>
                <SubmitButton loading={loading}>
                    {loading ? (<FaSpinner color="#fff" size={14}/>) : (<FaPlus color="#fff" size={14} />)}
                </SubmitButton>
            </Form>

            <List>
                {repositories.map(repo => (
                    <li key={repo.name}> <span>{repo.name}</span> <Link to={`/repository/${encodeURIComponent(repo.name)}`}>Detalhes</Link> </li>
                ) )}
            </List>

        </Container>
    )};
  }
