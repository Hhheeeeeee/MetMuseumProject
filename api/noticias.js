export default async function handler(req, res) {
  const lang = req.query.lang || "es";

  const url = `https://newsapi.org/v2/everything?qInTitle=(museo%20OR%20museos)&language=${lang}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "ok") {
      return res.status(500).json({ error: "Error al obtener noticias" });
    }

    res.status(200).json(data.articles.slice(0, 7));
  } catch (error) {
    res.status(500).json({ error: "Fallo al conectar con NewsAPI" });
  }
}
