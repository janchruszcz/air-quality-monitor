import Navbar from './navbar'
import Card from './card'
import Info from './info'
import Footer from './footer'

function App() {
  return (
    <div class="h-full">
      <Navbar />
      <div class="container mx-auto p-9 bg-gray-100">
        <div class="grid grid-cols-5 grid-rows-1 gap-8 bg-gray-100">
          <Card label={"Air Quality Index"} />
          <Card label={"Temperature (°C)"} />
          <Card label={"Humidity (%)"} />
          <Card label={"Pressure (hPa)"} />
          <Card label={"Gas resistance (Ω)"} />
        </div>
        <div class="h-auto pt-10">
          <Info />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
