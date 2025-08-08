function UserProfile() {
  return (
    <div className= "bg-gray-100 p-2 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="./src/assets/download.jpg"
        alt="User"
        className= "w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 text-center hover:text-blue-500 transition-colors duration-300">Chu Iya</h1>
      <p className="text-sm md:text-base text-gray-600 text-center">
        Operations Mangager at Tranzak Sarl.
      </p>

      <div class="flex justify-center gap-4 mt-4">
        <a href="https://github.com/iLensecreative237/alx-fe-reactjs" class="hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" class="h-6 w-6"  />
        </a>
        <a href="https://www.linkedin.com/in/chuiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" class="hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" class="h-6 w-6 " />
        </a>
        <a href="https://www.facebook.com/share/191W3ciuSH/?mibextid=wwXIfr" class="hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" alt="Facebook" class="h-6 w-6" />
        </a>
        <a href="#" class="hover:scale-110 transition-transform duration-300 ease-in-out">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" alt="X" class="h-6 w-6" />
        </a>
      </div>
    </div>
    
  );
}

export default UserProfile;