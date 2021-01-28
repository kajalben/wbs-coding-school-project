import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const expression = new RegExp('\/[0-9]+\/');

  useEffect(async () => {
    const data = await fetch("/api/pokemon").then((res) => res.json())
    setPokemon(data.data.results)
  }, []);

  return (
    <ul>
      {pokemon.map((p) => (
        <li key={p.name}>
          <Link href={`/pokemon${expression.exec(p.url)}`}>
            {p.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
