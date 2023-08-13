import style from '@/styles/Asteroidpage.module.scss'

export default  async function AsteroidPage(id:any) {
    async function getAsteroid(id:any){
        const respons=await fetch(`https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=BDfzLDpe4sPx7D4cbDuYXSIhiMTC2SUFkcXwn6i1&asteroid_id=${+id}`)

        return respons.json();
    }
    const Asteroid= await getAsteroid(id)
  return (
    <div>page</div>
  )
}
