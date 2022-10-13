import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Logo from "./logo.svg";

function Today() {
  return (
    <div className="container max-w-xl py-5">
      <Heading />
      <Nav />
      <div className="flex">
        <h2 className="inline-block">My Cool NFT</h2>
        <p className="inline-block ml-auto text-4xl">#1/1</p>
      </div>
      <img className="border-2 border-black p-2 mt-3 rounded" src={Logo} />
      <Tabs className="mt-3">
        <TabList>
          <Tab>Blurb</Tab>
          <Tab>Attributes</Tab>
        </TabList>

        <TabPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            laoreet tortor. Vivamus ligula lectus, iaculis sit amet ornare id,
            tincidunt a eros. Duis tristique, mi id sollicitudin aliquet, metus
            leo vestibulum eros, bibendum tempor est justo eget nisi. Nunc vitae
            odio at diam condimentum efficitur in ut justo. Duis pellentesque
            vel magna sed accumsan. Morbi et cursus elit. Sed placerat enim et
            dolor commodo accumsan.
          </p>
        </TabPanel>
        <TabPanel>
          <table>
            <tr>
              <th>Trait</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Background</td>
              <td>White</td>
            </tr>
            <tr>
              <td>Accessory</td>
              <td>Hat</td>
            </tr>
          </table>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Today;
