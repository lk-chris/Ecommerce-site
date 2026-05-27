import { Header } from "../components/Header";
import './404Page.css'

export function PageNotFound(){
    return(
        <>
        <Header/>

        <div className="Text">
            <p>Page Not Found</p>
        </div>
        </>
        
    );
}