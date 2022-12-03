function About() {
  return (
    <div className="mt-20  flex justify-center ">
      <form action="" className="items-center flex flex-col  lg:border-orange-600 lg:border-2  lg:px-36 py-9 text-black">
        <h1 className='mb-7 text-3xl text-white'>Contact Us!</h1>
        <div className='w-full flex flex-col lg:flex-row'>
          <input className="rounded-sm p-2 lg:mr-2" placeholder="Name" type="text" />
          <input
            className="mt-2 lg:mt-0 rounded-sm p-2"
            placeholder="Surname"
            type="text"
          />
        </div>

        <input className="mt-2 w-full p-2 rounded-sm" placeholder="Email" type="text" />
        <textarea className='mt-7 w-full p-2' name="" id="" cols={30} rows={5}></textarea>
        <button className="mt-6 bg-orange-600 py-1 px-4 rounded text-white">Send</button>
      </form>
    </div>
  )
}

export default About