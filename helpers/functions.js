import axios from 'axios';
export function getInfoGitHub() {
    return axios.get(`https://api.github.com/users/lucas1eichhorn`)
        .then(res => {
            const statusCode = res.status > 200 ? res.status : false;
            return {
                user: res.data,
                statusCode
            }
        })

}

export function getProjectsGitHub() {
    return axios.get(`https://api.github.com/users/lucas1eichhorn/repos`)
        .then(res => {
            const statusCode = res.status > 200 ? res.status : false;
            return {
                projects: res.data,
                statusCode
            }
        })

}