import { useEffect, useState } from "react"

const key = 'e73522c3c64d4bb8819f864f78b61c76'

export const useGetNews = ({ currentPage = 1, pageSize = 10, selectedCategory = 'All' }) => {
    const newsUrl = `https://newsapi.org/v2/everything?q=${selectedCategory}&pageSize=${pageSize}&page=${currentPage}&apiKey=${key}`

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchNews = async () => {
        try {
            setLoading(true)
            const response = await fetch(newsUrl)

            if (!response.ok) {
                setLoading(false)
                throw new Error('Ошибка с сервером!')
            }

            const data = await response.json()
            setNews(data.articles)
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [currentPage, selectedCategory])

    return { news, loading, error }
}