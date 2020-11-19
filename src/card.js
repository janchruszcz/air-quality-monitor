function Card(props) {
  return (
    <div>
      <div class="row-span-1 h-48 w-128 bg-gray-800 opacity-20 rounded-lg shadow-lg p-9">
        <div class="text-8xl text-center text-white font-bold">48</div>
        <div class="text-center text-white">{props.label}</div>
      </div>
    </div>
  );
}

export default Card;
