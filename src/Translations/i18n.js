import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { engT } from './en'
import {deT} from './de'
import {freT} from './fr'

i18n


// .use(LanguageDetector)

.use(initReactI18next)

.init({
    debug:true,
    fallbackLng: 'en',
    interpolation:  {
        escapeValue:false,
    },
    resources:{
        en:   {
            translation: engT
            
        },
        de: {
            translation: deT
        },
        fr:{
            translation: freT
        }
    }

});

export default i18n;
