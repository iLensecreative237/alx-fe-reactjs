function UserProfile() {
  return (
    <div className= "bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="./src/assets/download.jpg"
        alt="User"
        className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 text-center">Chu Iya</h1>
      <p className="text-sm md:text-base text-gray-600 text-center">
        Operations Mangager at Tranzak Sarl.
      </p>

      <div class="flex justify-center gap-4 mt-4">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" 
      alt="GitHub" 
      class="h-6 w-6" 
      />
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" 
      alt="LinkedIn" 
      class="h-6 w-6" 
      />
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" 
      alt="Facebook" 
      class="h-6 w-6" 
      />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" 
      alt="X" 
      class="h-6 w-6" 
      />
      </div>
    </div>
    
  );
}

export default UserProfile;