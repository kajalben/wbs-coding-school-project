// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const route = async (req, res) => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30").then((res) => res.json())
  res.statusCode = 200
  res.json({ data })
}

export default route;
