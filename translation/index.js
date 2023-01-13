import { I18n } from "i18n-js";
import en from "./en"
import es from "./es"



const translate = new I18n({
    es,
    en,
});

translate.enableFallback = true;


export default translate;