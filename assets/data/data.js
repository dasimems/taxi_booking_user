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
import Settings from "../icons/settings.png"
import MasterCard from "../icons/mastercard_logo.png"
import SignOut from "../icons/sign_out.png"
import {StatusBar} from 'react-native';
import UserImage from "../images/user_image.jpg"
import { Dimensions } from 'react-native';

export const appName = "CarMeee"

export const statusBarHeight = StatusBar.currentHeight;

export const userDetails = {
    name: "Duyil Ayomid",
    email: "isaacseun63@gmail.com",
    mobileNumber: "+2349036634645",
    joinedDate: "July, 15 2020",
    carModel: "Mecedes-Benz E-Class",
    plateNumber: "HSW 4736 XK",
    rating: 4.8,
    trips: 279,
    years: 4,
    userImage: UserImage
}

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
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Completed",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Completed",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Pending",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Pending",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Cancelled",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Cancelled",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Cancelled",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Pending",
        price: "12.5",
        currency: "$",
    },

    {
        bookingDate: "Mon 12 Dec 2022",
        name: "Duyil Ayomid",
        image: UserImage,
        from: {
            time: "3:15 pm",
            destination: "Ghogha Circle, Bhavnagar"
        },
        to: {
            time: "3:15 pm",
            destination: "Kaliyabad, Bhavnagar"
        },
        status: "Completed",
        price: "12.5",
        currency: "$",
    }
]

export const bookingHeader = [
    {
        label: "Pending"

    },

    {
        label: "Completed"

    },

    {
        label: "Cancelled"

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
    mailSent: MailSent,
    settings: Settings,
    signOut: SignOut,
    masterCard: MasterCard
}

export const terms = {
    text: ""

}

export const cancellation = {
    text: ""

};

export const card = {

    balance: "457080",
    cardNumber: "5294 2436 4780 2468",
    expiringMonth: "12",
    expiringYear: "24",
    cardType: "master card"

}

export const transactions = [
    {
        image: UserImage,
        name: "Duyil Ayomid",
        date: "Dec 20 2022",
        time: "10:00 AM",
        price: "14",
        description: "Taxi Expenses",
        type: "debit"

    },

    {
        image: UserImage,
        name: "Duyil Ayomid",
        date: "Dec 20 2022",
        time: "10:00 AM",
        price: "14",
        description: "Taxi Expenses",
        type: "credit"

    },

    {
        image: UserImage,
        name: "Duyil Ayomid",
        date: "Dec 20 2022",
        time: "10:00 AM",
        price: "14",
        description: "Taxi Expenses",
        type: "debit"

    },

    {
        image: UserImage,
        name: "Duyil Ayomid",
        date: "Dec 20 2022",
        time: "10:00 AM",
        price: "14",
        description: "Taxi Expenses",
        type: "debit"

    }
]

export const colors= {
    primary: "#82CA97",
    secondary: "#ED713C",
    secondaryLight: "#febb1b",
    danger: "#BC101A",
    dangerLight: "#ef4b54",
    success: "#25D416"

}

