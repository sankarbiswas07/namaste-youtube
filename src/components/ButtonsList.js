import Button from "./Button";

const ButtonsList = () => {
  const buttons = [{ name: "All" }, { name: "Gaming" }, { name: "Songs" }, { name: "Live" }, { name: "Soccer" }, { name: "Cricket" }, { name: "Cooking" }, { name: "Cricket" }, { name: "Valentines" }]
  return (
    <div className="flex">
      {
        buttons.map((button, i) => {
          return (
            <Button {...button} key={i} />
          )
        })
      }
    </div>
  );
}

export default ButtonsList;