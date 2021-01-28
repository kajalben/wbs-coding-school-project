export default function PokemonDetails({ pokemon }) {
  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.other.dream_world.front_default} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { pokeid } = context.query;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`).then((res) => res.json())

  return {
    props: {
      pokemon: data
    }
  }
}