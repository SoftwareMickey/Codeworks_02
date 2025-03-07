import Contacts from "./Contact";
import MapComponent from "./GoogleMap";


export default function LocationContact(){
    return <section className="flex justify-center sm:flex-col">
        <Contacts/>
        <MapComponent/>
    </section>
}