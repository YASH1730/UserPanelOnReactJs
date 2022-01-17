import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: ' https://gorest.co.in/public-api',
    headers: {
        Authorization: 'Bearer c86d5d11d5854492719710b963bde41698a6795443321b44caf12323f4d5ec0a'
    }
}
)

const api =  {
    
    getUser: (page=1) =>

    axiosInstance({
        'method':'GET',
        'url':`/users?page=${page}`
    })
,
    createNewUser: (data) =>
    axiosInstance({
        'method': 'POST',
        'url':'/users',
        "data" : data
        
    })
,
    deleteUser : (userId)=> 
    axiosInstance({
        'method' : 'DELETE',
        'url': `users/${userId}`
    })
,
    viewUser : (userId)=> 
    axiosInstance({
        'method' : 'GET',
        'url': `users/${userId}`
    })
,
    updateUser : (userId,data)=> 
    axiosInstance({
        'method' : 'Put',
        'url': `users/${userId}`,
        'data' : data

    })
}

export default api;