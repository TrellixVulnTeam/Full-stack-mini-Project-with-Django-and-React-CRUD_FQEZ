import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticleList from './components/ArticleList';
import Form from './components/Form';


function App() {
  const [articles, setArticles] = useState([]);
  //fetch data from backend
  const [editArticle, setEditArticle] = useState(null);

  
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Token 238ece94dcbbe0072e63ccd0f3f040ee9305baa0',
        

      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
    //return promi
  },[]);
  //fetch

  const editBtn = (article) => {
    setEditArticle(article)

  }







  //iupdate blog
  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
      if(myarticle.id === article.id) {
        return article;

      }
      else {
        return myarticle;
      }
    })

    setArticles(new_article)
    
  }

  //create blog  method

  const articleForm = () => {
    setEditArticle({title:'', description:''})
  }

  //insert blog method

  const insertedInformation = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)

  }


  //delete blog

  const deleteBtn = (article) => {
    const new_articles = articles.filter(myarticle => {
      if(myarticle.id === article.id) {
        return false
      }
      return true;
    })

    setArticles(new_articles)

  }





  //render data, title and description articlelist.js
  return (
    <div> 
     {/*  create blog */}
      <div className = 'text-center'>
      <div className = 'row'>
        <div className = 'col'>
          
          <button onClick = {articleForm} className = 'btn btn-primary'>Create Blog</button>
          
          </div>
          </div>
          </div>
      
      <h1>Full stack Project</h1>
     

      <ArticleList articles = {articles} editBtn = {editBtn}  deleteBtn = {deleteBtn}/>


      {editArticle ? <Form article ={editArticle} updatedInformation={updatedInformation} insertedInformation = {insertedInformation} /> : null}
      
      
      
    </div>
  );
}

export default App;
