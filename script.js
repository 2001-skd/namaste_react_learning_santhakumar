// first we have to create a element.

/*
<section>
<img src=""/>
<button>Say Hello</button>
</section>


*/
let heading = React.createElement("section", { id: "section" }, [
  React.createElement("img", { src: "./cutshort.PNG" }),
  React.createElement("button", { id: "button" }, "Say Hello"),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);
