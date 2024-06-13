import axios from "axios"

const key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjE5ZTE5OGIzYWMyMTU3YThmZDY3YWRjOTQ4MjIxYSIsInN1YiI6IjY2NmFhMzI3YWJmYWY2MjEzNGVhNjQ3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b05mm805dHR8iYr0JTTU2vOcRa5ybLb7lwg5ZFE1P_U'
const headers = {
    Authorization: key
}

const BASE_URL = 'https://api.themoviedb.org/3/'

export async function fetchTrends(period) {
    const endPoint = `trending/movie/${period}`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }

    return await axios.get(url, { headers, params })
}

export async function fetchByName(name) {
    const endPoint = 'search/movie'
    const url = `${BASE_URL}${endPoint}`
    const params = {
        query: name,
        include_adult: 'false',
        language: 'en-US',
        page: '1'
    }

    return await axios.get(url, { headers, params })
}

export async function fetchActors(id) {
    const endPoint = `movie/${id}/credits`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }
    return await axios.get(url, { headers, params })

}

export async function fetchReviews(id) {
    const endPoint = `movie/${id}/reviews`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US',
        page: '1',
    }

    return await axios.get(url, { headers, params })
}

export async function fetchFullInfo(id) {
    const endPoint = `movie/${id}`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }

    return await axios.get(url, { headers, params })
}