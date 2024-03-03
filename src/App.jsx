import './App.css';

function App() {

  return (
    <div className="flex overflow-hidden justify-center items-center min-h-screen bg-primary_darkcyan font-kumbh_sans relative">

      <img src="/profile-card/bg-pattern-top.svg" alt="" className="top-pattern absolute lg:-left-[190px] lg:-top-[550px]"/>
      <img src="/profile-card/bg-pattern-bottom.svg" alt="" className="bottom-pattern absolute lg:-right-[190px] lg:-bottom-[50%]"/>

      <main className="rounded-xl z-10 overflow-hidden bg-white flex flex-col justify-center items-center w-[310px] lg:w-auto">

        <div className="w-full h-full relative flex justify-center">
          <img src="/profile-card/bg-pattern-card.svg" alt="" />

          <div className="absolute w-24 -bottom-12 bg-white p-1 rounded-full overflow-hidden">
            <img src="/profile-card/image-victor.jpg" alt="Profile Image" className="rounded-full"/>
          </div>
        </div>

        <div className="mt-16 flex">
          <h1 className="font-[800] text-verydark_desaturatedblue">Victor Crest</h1>
          <p className="ml-2 text-dark_grayishblue font-[500]">26</p>
        </div>
        <p className="mt-1 text-sm text-dark_grayishblue font-[500]">London</p>

        <div className="border-t-[1px] flex justify-between mt-5 w-full px-10 py-5 text-center">
          <div>
            <p className="amount_container">80K</p>
            <p className="content_type_container">Followers</p>
          </div>

          <div>
            <p className="amount_container">803K</p>
            <p className="content_type_container">Likes</p>
          </div>

          <div>
            <p className="amount_container">1.4K</p>
            <p className="content_type_container">Photos</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
