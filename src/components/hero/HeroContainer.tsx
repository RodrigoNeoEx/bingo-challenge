const HeroContainer = ({children}:any) => {
  return (
    <section className='bg-blue-100 text-white text-center p-4 grid md:grid-cols-2 xl:justify-self-center'>
      {children}
    </section>
  )
}

export default HeroContainer;