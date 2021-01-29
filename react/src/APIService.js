//CRUD operation
//update blog
export default class APIService {
        //update blog`
        static UpdateArticle(article_id, body) {
                return fetch(`http://127.0.0.1:8000/api/articles/${article_id}`, {
                        'method': "PUT",
                        headers: {
                                "Content-Type": "application/json",
                                'Authorization': 'Token 238ece94dcbbe0072e63ccd0f3f040ee9305baa0',
                        },
                        body: JSON.stringify(body)
                }).then(resp => resp.json())
                
        }
        //create blog
        static InsertArticle(body) {
                return fetch('http://127.0.0.1:8000/api/articles/', {

                        'method': "POST",
                        headers: {
                                "Content-Type": "application/json",
                                'Authorization': 'Token 238ece94dcbbe0072e63ccd0f3f040ee9305baa0',
                        },
                        body: JSON.stringify(body)

                }).then(resp => resp.json())
        }
        //delete blog
        static DeleteArticle(article_id) {

                return fetch(`http://127.0.0.1:8000/api/articles/${article_id}`, {

                        'method': "DELETE",
                        headers: {
                                "Content-Type": "application/json",
                                'Authorization': 'Token 238ece94dcbbe0072e63ccd0f3f040ee9305baa0',
                        }
                })

        }


        //login from
        static LoginUser(body) {
                return fetch('http://127.0.0.1:8000/auth/', {

                        'method': "POST",
                        headers: {
                                "Content-Type": "application/json",
                                'Authorization': "Token 238ece94dcbbe0072e63ccd0f3f040ee9305baa0",
                        },
                        body: JSON.stringify(body)

                }).then(resp => resp.json())
        }



         //register user
        static RegisterUser(body) {
                return fetch('http://127.0.0.1:8000/api/users/', {

                        'method': "POST",
                        headers: {
                                "Content-Type": "application/json",
                                'Authorization': "Token 238ece94dcbbe0072e63ccd0f3f040ee9305baa0",
                        },
                        body: JSON.stringify(body)

                }).then(resp => resp.json())
        }

        



}