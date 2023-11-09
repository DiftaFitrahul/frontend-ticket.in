export default function CardEvent({ data }) {
  return (
    <button
      onClick={() => {
        console.log(data);
        console.log("test");
      }}
    ></button>
  );
}
