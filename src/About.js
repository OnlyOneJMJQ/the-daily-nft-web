import "./App.css";
import Nav from "./components/Nav";
import Heading from "./components/Heading";

function About() {
  return (
    <div className="container max-w-xl py-5">
      <Heading />
      <Nav />
      <h2 className="mt-5">What is this?</h2>
      <p className="mt-3">
        NFTs are the hottest new way to share and sustain art by minting digital
        originals which can be displayed as easily as any digital image, but can
        also be bought and sold.
      </p>
      <p className="mt-3">
        The Daily NFT is a place to give an NFT its moment to shine. With the
        focus on only one per day, it's a great way to share and start a
        conversation around your creations. Inspired by sites like PostSecret
        and others that encourage raw, interesting images and messages from
        around the world, we hope The Daily NFT will make it easier to stand out
        in a sea of creation. We allow for up to 500 characters and some
        formatting so your expression isn't limted to just an image and title.
      </p>
      <p>We're excited to see what you'll share!</p>
      <h2 className="mt-5">How does it work?</h2>
      <p className="mt-3">
        One NFT per day is featured on The Daily NFT. Prospective artists bid on
        days (up to 90 days in advance), with the winner determined 24 hours
        before their chosen day. Once the winner is determined, they'll receive
        an email with instructions on uploading an image and supply their up to
        500 character message.
      </p>
      <p className="mt-3">
        We'll then mint the NFT for no additional cost using some proceeds from
        that bid, then display it on the winning day!
      </p>
    </div>
  );
}

export default About;
