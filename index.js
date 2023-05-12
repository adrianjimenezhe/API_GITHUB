const axios = require('axios')
require('dotenv').config()

const githubtoken = process.env.GITHUB_TOKEN

const baseurl = 'https://api.github.com'

axios.get(`${baseurl}/users/google/repos?per_page=10&sort=stars`, {
    headers: {
        Authorization: `Bearer ${githubtoken}`
    }
})
.then(response => {
    console.log('Los primeros 10 repositorios más populares de GITHUB "google".')
    response.data.forEach (repo =>console.log(repo.name))
})
.catch(error=>{console.log(error)})

   