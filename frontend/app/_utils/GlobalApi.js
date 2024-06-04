const {default: axios} = require("axios");

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY 
const apiUrl = 'http://localhost:1337/api'

const axiosClient = axios.create({
    baseURL:apiUrl,
    headers: {
        Authorization:`Bearer ${apikey}`
    }
})

const getLatestStores=()=> axiosClient.get('/insta-stores?populate=*'); 
const getStoreById=(id)=> axiosClient.get('/insta-stores/'+id+'?populate=*')

// const getProductByCategory(Category)=> axiosClient.get('/insta-stores?ilters[category][$eql='+Category+"?&populate=*")

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLatestStores,
    getStoreById,
    // getProductByCategory
}
