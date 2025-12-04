import { useEffect, useState } from "react"

const key = 'e73522c3c64d4bb8819f864f78b61c76'
const latestNewsUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${key}`

const useGetNews = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchNews = async () => {
        try {
            setLoading(true)
            const response = await fetch(latestNewsUrl)

            if (!response.ok) {
                setLoading(false)
                throw new Error('Ошибка с сервером!')
            }

            const data = await response.json()
            setData(data.articles)
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return { data, loading, error }
}

export default useGetNews