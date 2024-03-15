import { CgProfile } from "react-icons/cg";


const Header = () => {
    return (
       <header>
       <nav>
     <div class="navbar bg-base-100">
    <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-base bg-base-100 rounded-box w-52">
        <li><a>About</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
       </ul>
        </div>
       <a class="btn btn-ghost text-xl lg:text-4xl font-extrabold"><span>Smitten Kitchen</span></a>
      </div>
     <div class="navbar-center hidden lg:flex">
     <ul class="menu menu-horizontal text-base px-1">
     <li><a>About</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
        </ul>
      </div>
    <div class="navbar-end mr-8">
     <label class="input input-bordered rounded-full flex items-center gap-2">
     <input type="text" class="grow" placeholder="Search" />
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
    </label>
    <div class="hidden lg:flex">
      </div>
     <div>
     <a class="btn color-primary text-black rounded-full bg-[#0BE58AA1] font-bold text-2xl ml-4"><CgProfile />
        </a>
      </div>
     </div>
      </div>
   </nav>

    {/* banner section 
    [linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.2)) */}
    
    {/* <div class="container mx-auto lg:px-20 pt-3 my-0 lg:my-4"> */}
    <section>
    <div class="bg-cover bg-no-repeat bg-center mx-auto lg:w-[98%] h-full lg:h-[100vh] rounded-lg bg-[url('assets/tasty-pizza-near-ingredients.jpg')]">

        <h1 class="text-5xl font-bold text-[#1DD100] pt-32 text-center "><span className="text-white">Discover</span> an exceptional cooking <br/> class tailored for you!</h1>
        <p class="text-[#FFF] text-sm font-normal opacity-70 mt-4 text-center leading-6">Cooking classes and Culinary Education  have evolved into dynamic experiences that not <br/> only teach culinary skills but also drive revenue generation</p>
        <div class="text-center pt-10">
            <button class="btn bg-[#1DD100] text-black text-lg font-bold py-2 px-7">Explore Now</button>
            <button class="btn btn-outline ml-6 text-sm text-white ">Our Feedback</button>
        </div>
       </div>
    </section>

    kdsljlsfjs
   </header>

    );
}

export default Header;