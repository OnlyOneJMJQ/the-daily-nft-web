import "./App.css";
import Nav from "./components/Nav";
import Logo from "./logo.svg";

function Today() {
  return (
    <div className="container max-w-xl py-5">
      <h1 className="text-center font-bold underline mb-5">The Daily NFT</h1>
      <Nav />
      <h2>My Cool NFT</h2>
      <img className="border-2 border-black p-2 mt-3" src={Logo} />
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at laoreet
        tortor. Vivamus ligula lectus, iaculis sit amet ornare id, tincidunt a
        eros. Duis tristique, mi id sollicitudin aliquet, metus leo vestibulum
        eros, bibendum tempor est justo eget nisi. Nunc vitae odio at diam
        condimentum efficitur in ut justo. Duis pellentesque vel magna sed
        accumsan. Morbi et cursus elit. Sed placerat enim et dolor commodo
        accumsan.
      </p>
    </div>
  );
}

export default Today;
