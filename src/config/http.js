import axios from "axios";

export const moviesApis = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3/",
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjdkMDUyODQ2NDI3MTkzMGY2NWI0Y2RmYzY4OWVlYiIsIm5iZiI6MTc0MzY0MTA2OS42MjcsInN1YiI6IjY3ZWRkOWVkNDkwOWUyNWIwN2E3OTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AqQJ2lq-2RG_kQHAPOytufiuuK6jDB7X75nCQ6GWbz0"
        }
    }
)