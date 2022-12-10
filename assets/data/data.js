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
import Tail from "../icons/tail.png"
import TailReceived from "../icons/tail_received.png"
import MasterCard from "../icons/mastercard_logo.png"
import SignOut from "../icons/sign_out.png"
import {StatusBar} from 'react-native';
import UserImage from "../images/user_image.jpg"
import { Dimensions } from 'react-native';
import HighExpenseIcon from "../icons/high_expenses.png"
import StandardExpenseIcon from "../icons/standard_expenses.png"
import LowExpenseIcon from "../icons/low_expenses.png"
import FreeExpensesIcon from "../icons/free_expenses.png"
import SystemSuccess from "../icons/system_success.png"
import SystemCancelled from "../icons/system_cancelled.png"
import Promotion from "../icons/promotion.png"
import Wallet from "../icons/wallet.png"
import Bank from "../icons/bank.png"
import PayPal from "../icons/paypal.png"
import PayTm from "../icons/paytm.png"
import GooglePay from "../icons/google_pay.png"
import Upi from "../icons/upi.png"

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

export const settingsLink = [
    {
        label: "Notifications",
        screenName: "Notifications"
    },

    {
        label: "Share Expenses",
        screenName: "ShareExpenses"
    },

    {
        label: "Security",
        screenName: "Security"
    },

    {
        label: "Language",
        screenName: "Language"
    },

    {
        label: "SOS",
        screenName: "SOS"
    },

    {
        label: "Clear Cache",
        screenName: "Clear Cache"
    },

    {
        label: "Terms and Privacy",
        screenName: "TermsAndPrivacy"
    },

    {
        label: "Contact Us",
        screenName: "ContactUs"
    },
    
]

export const expensesLabels = [
    {
        label: "High",
        description: "Expenses shared with passengers will be high.",
        icon: HighExpenseIcon
    },

    {
        label: "Standard",
        description: "Cost shared with passengers will be standard.",
        icon: StandardExpenseIcon
    },

    {
        label: "Low",
        description: "Cost shared with passengers will be low.",
        icon: LowExpenseIcon
    },

    {
        label: "Free",
        description: "I want to help others without sharing expenses.",
        icon: FreeExpensesIcon
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

export const chats = [
    {
        name: "Duyil Ayomid",
        id: 1,
        status: "online",
        messages: [
            {
                message: "Hello",
                type: "received",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Hi, i am doing great",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Wow, that's nice",
                type: "received",
                time: "13:09",
                date: "20/09/22",
                status: "unread"
            }
        ],
        image: UserImage
    },

    {
        name: "Duyil Ayomid",
        id: 2,
        status: "offline",
        messages: [
            {
                message: "Hello",
                type: "received",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Hi, i am doing great",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Wow, that's nice",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            }
        ],
        image: UserImage
    },

    {
        name: "Duyil Ayomid",
        id: 3,
        status: "offline",
        messages: [
            {
                message: "Hello",
                type: "received",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Hi, i am doing great",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Wow, that's nice",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            }
        ],
        image: UserImage
    },

    {
        name: "Duyil Ayomid",
        id: 4,
        status: "offline",
        messages: [
            {
                message: "Hello",
                type: "received",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Hi, i am doing great",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Wow, that's nice",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            }
        ],
        image: UserImage
    },

     {
        name: "Duyil Ayomid",
        id: 5,
        status: "online",
        messages: [
            {
                message: "Hello",
                type: "received",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Hi, i am doing great",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            },

            {
                message: "Wow, that's nice",
                type: "sent",
                time: "13:09",
                date: "20/09/22",
                status: "read"
            }
        ],
        image: UserImage
    }


]

export const icons = {
    google: Google,
    apple: Apple,
    faceId: FaceId,
    mailSent: MailSent,
    settings: Settings,
    signOut: SignOut,
    masterCard: MasterCard,
    chatTailSent: Tail,
    chatTailReceived: TailReceived,
    systemSuccess: SystemSuccess,
    systemCancelled: SystemCancelled,
    promotion: Promotion,
    wallet: Wallet,

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

export const notification = [
    {
        title: "System",
        description: "Your booking #1234 has been successfully placed",
        icon: SystemSuccess,
        id: 1
    },

    {
        title: "Promotion",
        description: "Invite friends - Get 3 coupons each",
        icon: Promotion,
        id: 2
    },

    {
        title: "Promotion",
        description: "Invite friends - Get 3 coupons each",
        icon: Promotion,
        id: 3
    },

    {
        title: "System",
        description: "Your booking #1234 has been cancelled successfully",
        icon: SystemCancelled,
        id: 4
    },

    {
        title: "System",
        description: "Thank you, your transaction is complete",
        icon: Wallet,
        id: 5
    },

    {
        title: "Promotion",
        description: "Invite friends - Get 3 coupons each",
        icon: Promotion,
        id: 6
    },
]

export const withdrawalOptions = [
    {
        label: "Bank Account",
        icon: Bank,
        link: "bank_account"
    },

    {
        label: "Paytm Wallet",
        icon: PayTm,
        link: "pay_tm"
    },

    {
        label: "Gpay Wallet",
        icon: GooglePay,
        link: "g_pay"
    },

    {
        label: "PayPal Wallet",
        icon: PayPal,
        link: "pay_pal"
    },

    {
        label: "Upi Id",
        icon: Upi,
        link: "upi_id"
    },
]

export const bankAccounts = [
    {
        bankName: "First Bank of Nigeria",
        accountNo: "3150686249",
        branchName: "FirstBank",
        accountName: "Omonimewa Isaac Duyilemi",
        bankType: "bank_account",
        id: 1
    },

    {
        bankName: "First Bank of Nigeria",
        accountNo: "3150686249",
        branchName: "FirstBank",
        accountName: "Omonimewa Isaac Duyilemi",
        bankType: "bank_account",
        id: 2
    },

    {
        bankName: "PayPal",
        accountNo: "isaacsen63@gmail.com",
        branchName: "",
        accountName: "Omonimewa Isaac Duyilemi",
        bankType: "pay_pal",
        id: 3
    },

    {
        bankName: "PayPal",
        accountNo: "isaacsen63@gmail.com",
        branchName: "",
        accountName: "Omonimewa Isaac Duyilemi",
        bankType: "pay_pal",
        id: 4
    },

    {
        bankName: "PayTm",
        accountNo: "isaacsen63@gmail.com",
        branchName: "",
        accountName: "Omonimewa Isaac Duyilemi",
        bankType: "pay_tm",
        id: 5
    },
    
]

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

