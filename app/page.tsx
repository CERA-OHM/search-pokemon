import Image from 'next/image'
import { PokemonGrid } from '@/components/pokemon-grid'
import { PokemonCard } from '@/components/pokemon-card'
import { getPokemonList } from '@/lib/pokemonAPI'

export default async function Home() {
  const pookemonList = await getPokemonList();
  return (
    <PokemonGrid pokemonList={pookemonList}/>
  )
}
