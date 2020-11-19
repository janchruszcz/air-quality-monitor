import logo from './logo2.png'

function Navbar() {
  return (
    <nav class="bg-gray-700">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-20">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-10 w-24" src={logo} alt="aqm" />
            </div>
            <div class="hidden sm:block sm:ml-16">
              <div class="flex space-x-4" antialiased>
                <a href="#" class="px-4 py-2 rounded-md text-sm font-medium text-white uppercase tracking-widest bg-green-600 hover:text-white hover:bg-green-600 hover:shadow-lg">Dashboard</a>
                <a href="#" class="px-4 py-2 rounded-md text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-white hover:bg-green-600 hover:shadow-lg">Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
