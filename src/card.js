function Card(props) {
  return (
    <div>
      <div class="row-span-1 h-48 w-156 bg-gray-800 opacity-20 rounded-lg shadow-lg pt-12">
        <div class="text-5xl text-center text-white font-bold">{props.value}</div>
        <div class="text-center text-white font-bold">{props.label}</div>
        <div class="text-center text-white">{props.date}, {props.time}</div>
      </div>
    </div>
  );
}

export default Card;
