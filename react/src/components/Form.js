import React, { useState } from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';


function Form(props) {

        const [title, setTitle] = useState(props.article.title)
        const [description, setDescription] = useState(props.article.description)

        const [token] = useCookies(['mytoken'])
        //update blog
        const updateArticle = () => {
                APIService.UpdateArticle(props.article.id, {title, description}, token['mytoken'])
                .then(resp => props.updatedInformation(resp))

        }

        //create blog
        const insertArticle = () => {
                APIService.InsertArticle({ title, description }, token['mytoken'])
                .then(resp => props.insertedInformation(resp))
        }




        return (
                <div>
                        {/* {props.article && props.article.title} render blog */}
                        {props.article ? (

                                <div className = 'mb-3'>
                                        {/* update and render data input field */}
                                        <label htmlFor = 'title' className = 'form-label'>Title</label>
                                        <input type = 'text' className = 'form-control' id = 'title' placeholder = 'Please Enter Title' value = {title} onChange = {e => setTitle(e.target.value)} />

                                        <label htmlFor = 'description' className = 'form-label'>Description</label>
                                        <textarea className = 'form-control' id = 'description' rows = '5' value = {description} onChange = {e => setDescription(e.target.value)} ></textarea><br />

                                        {/* update and create blog */}
                                        {
                                                props.article.id ? <button onClick = {updateArticle} className = 'btn btn-success'>Update Blog</button>
                                                : <button onClick = {insertArticle} className = 'btn btn-success'>Create Blog</button>
                                        }



                                        
                                        {/* update and render data input field */}
                                </div>

                        ) : null}

                </div>
        )
        
}



export default Form;