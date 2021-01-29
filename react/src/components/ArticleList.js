import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import APIService from '../APIService';
import {useCookies} from 'react-cookie';

function ArticleList(props) {

  const [token] = useCookies(['mytoken'])

        //editbtn update blog

        const editBtn = (article) => {
                props.editBtn(article)
        }

        //delete blog

        const deleteBtn = (article) => {
          APIService.DeleteArticle(article.id, token['mytokem'])
          .then(() => props.deleteBtn(article))
          .catch(error => console.log(error))
          
        }



  return (
    //render data, title and description
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>

                  <Button variant="primary" onClick = {() => editBtn(article)} >Update</Button>

                  <Button onClick = {() => deleteBtn(article)} variant="danger">Delete</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
