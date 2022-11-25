import Logo from "../images/logo.png"
import Google from "../icons/google_icon.png"
import Apple from "../icons/apple_icon.png"
import FaceId from "../icons/face_id.png"
import Passenger from "../icons/passenger.png"
import MailSent from "../icons/mail_sent.png"
import Driver from "../icons/driver.png"
import countries from "./countries.json"
import HomeActive from "../icons/home_active.png"
import HomeInActive from "../icons/home_inactive.png"
import BookingsInActive from "../icons/bookings_inactive.png"
import BookingsActive from "../icons/bookings_active.png"
import InboxActive from "../icons/inbox_active.png"
import InboxInActive from "../icons/inbox_inactive.png"
import WalletInActive from "../icons/wallet_inactive.png"
import WalletActive from "../icons/wallet_active.png"
import ProfileActive from "../icons/profile_active.png"
import ProfileInActive from "../icons/profile_inactive.png"
import {StatusBar} from 'react-native';
import { Dimensions } from 'react-native';

export const appName = "CarMeee"

export const statusBarHeight = StatusBar.currentHeight;

export const navLinks = [
    {
        label: "Home",
        activeIcon: HomeActive,
        inActiveIcon: HomeInActive,
    },

    {
        label: "Bookings",
        activeIcon: BookingsActive,
        inActiveIcon: BookingsInActive
    },

    {
        label: "Inbox",
        activeIcon: InboxActive,
        inActiveIcon: InboxInActive
    },

    {
        label: "Wallet",
        activeIcon: WalletActive,
        inActiveIcon: WalletInActive
    },

    {
        label: "Profile",
        activeIcon: ProfileActive,
        inActiveIcon: ProfileInActive
    },

    
]

export const bookings = [
    {
        bookingDate: "",
        name: "",
        image: "",
        from: {
            time: "",
            destination: ""
        },
        to: {
            time: "",
            destination: ""
        },
        status: "",
        price: "",
    }
]

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export {countries}

export const images = {
    logo: Logo
}

export const userTypeLinks = [
    {
        label: "Driver",
        icon: Driver
    },

    {
        label: "Passenger",
        icon: Passenger
    }
]

export const icons = {
    google: Google,
    apple: Apple,
    faceId: FaceId,
    mailSent: MailSent
}

export const terms = {
    text: ""

}

export const cancellation = {
    text: ""

}

export const colors= {
    primary: "#82CA97",
    secondary: "#ED713C",
    danger: "#BC101A",
    success: "#25D416"

}

