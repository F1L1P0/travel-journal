import "./Scss/main.scss";
import Page from "./Components/Page";
import Heading from "./Components/Heading";

function App() {

  return(
    <>
      <Heading    
        heading="My travel journal"
      />
    <div className="main-content">
      <Page
        img="https://source.unsplash.com/WLxQvbMyfas"
        country="Japan"
        place="Mount Fuji"
        googleMapsSrc="https://www.google.com/maps/place/Fud%C5%BEi/@35.3606696,138.7275654,21z/data=!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634"
        date="12 Jan, 2021 - 24 Jan, 2021"
        about="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Page
        img="https://source.unsplash.com/JmuyB_LibRo"
        country="Australia"
        place="Sydney Opera House"
        googleMapsSrc="https://www.google.com/maps/place/Opera+v+Sydney/@-33.8567799,151.210812,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967"
        date="27 May, 2021 - 8 Jun, 2021"
        about="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      />
      <Page
        img="https://source.unsplash.com/3PeSjpLVtLg"
        country="Norway"
        place="Geirangerfjord"
        googleMapsSrc="https://www.google.com/maps/place/Geirangerfjord/@62.1049113,7.0051741,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817"
        date="01 Oct, 2021 - 18 Nov, 2021"
        about="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </div>
    </>
  )
}

export default App;
