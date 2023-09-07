import DocBanner from "./DocBanner";
import Gallery from "./Gallery";
import KnowDoctor from "./KnowDoctor";

const doctor = () => {
    return (
      <div>
        <DocBanner></DocBanner>
        <KnowDoctor></KnowDoctor>
        <Gallery></Gallery>
      </div>
    )
  };
  
  export default doctor;