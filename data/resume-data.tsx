import {
    AmbitLogo,
    BarepapersLogo,
    BimLogo,
    CDGOLogo,
    ClevertechLogo,
    ConsultlyLogo,
    EvercastLogo,
    Howdy,
    JarockiMeLogo,
    JojoMobileLogo,
    Minimal,
    MobileVikingsLogo,
    MonitoLogo,
    NSNLogo,
    ParabolLogo,
    TastyCloudLogo,
    YearProgressLogo,
} from "@/images/logos";
import {GitHubIcon, LinkedInIcon, XIcon} from "@/components/icons";
import {ResumeData} from "@/data/types";

export const RESUME_DATA: ResumeData = {
    name: "Lily Marino",
    initials: "LM",
    location: "Lebanon, NJ 08833",
    locationLink: "https://www.google.com/maps/place/Lebanon,+NJ+08833",
    about:
        "EMT | Pre-PA Student | Applying Field Experience to PA Studies",
    summary:
        "Aspiring Physician Assistant with a strong foundation in medical studies and emergency medical care,\n" +
        "complemented by leadership and community service roles. Currently pursuing a Masters at DeSales\n" +
        "University, certified EMT with a passion for healthcare and mentorship.\n",
    avatarUrl: "https://media.licdn.com/dms/image/D4E03AQFNGsOdg2nuwQ/profile-displayphoto-shrink_400_400/0/1715713372241?e=1725494400&v=beta&t=XokHwZ3qrIoLKKd_qKpG8K4QAff55PTewqUnN6mHtYk",
    developerWebsiteUrl: "https://www.elkommos.me",
    contact: {
        email: "lilyam3.14+website@gmail.com",
        printEmail: "lilyam3.14@gmail.com",
        tel: "(732)371-9566",
        social: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/lily-marino-584bb516b/",
                icon: LinkedInIcon,
            },
        ],
    },
    education: [
        {
            school: "DeSales University, Center Valley, PA",
            degree: "Masters in Physician Assistant Studies (Medical Studies B.S/M.S.P.A.S)\n",
            start: "2021",
            end: "2026",
        },
    ],
    work: [
        {
            company: "Robert Wood Johnson Barnabas Health- Mobile Health",
            link: "https://www.rwjbh.org/rwj-university-hospital-new-brunswick/treatment-care/paramedics-emergency-medical-services-/",
            badges: [], // ["Remote"],
            title: "Emergency Medical Technician (EMT)",
            logo: ConsultlyLogo,
            start: "2020",
            end: null,
            description:
                "Graduated EMT school with a 97%, earning NJ EMS certification and license;" +
                "Delivered critical pre-hospital care to over 1000 patients in a fast-paced mobile environment;" +
                "Providing emergency medical care and transportation to patients at the state's largest EMS system",
        },
        {
            company: "DeSales University",
            badges: [],
            title: "President of Class of 2026",
            logo: ParabolLogo,
            start: "2024",
            end: "2026",
            description:
                "Fostering a sense of community and collaboration among students;" +
                "Representing the class in the Student Government Association;" +
                "Organizing events and initiatives to enhance the student experience",
        },
        {
            company: "Students for Health Humanities",
            link: "https://desales.campuslabs.com/engage/organization/shh",
            badges: [],
            title: "Treasurer",
            logo: ParabolLogo,
            start: "2022",
            end: "2023",
            description:
                "Oversaw financial operations, ensuring responsible budgeting and fiscal health to support Students for Health Humanities initiatives",
        },
        {
            company: "St. Mary & St. Athanasius",
            link: "https://smsanj.org/",
            badges: [],
            title: "Director and Financial Coordinator",
            logo: ClevertechLogo,
            start: "2017",
            end: null,
            description:
                "Coordinating, planning, overseeing trips, daily camp affairs, camp financials, and parent interactions;" +
                "Resolving issues with the children and also with the parents and counselors;" +
                "Making meaningful relationships with the campers, ages 6-17, that remain today;" +
                "Started a Children’s Library free of charge for the youth",
        },
        {
            company: "Hillsborough High School Diversity Council",
            badges: [],
            title: "President",
            logo: JojoMobileLogo,
            start: "2020",
            end: "2021",
            description:
                "Led the Hillsborough High School Diversity Council as its youngest acting president, fostering a more " +
                "inclusive school environment for 200 students;" +
                "Collaborated with school administration to gather students of all races, backgrounds, socio economic " +
                "standpoints, and ideas to come together and have meaningful conversations in order to grow ourselves further"
        },
        {
            company: "Hillsborough High School",
            badges: [],
            title: "Peer Mentor",
            logo: NSNLogo,
            start: "2019",
            end: "2021",
            description:
                "Mentored and guided Freshman and Sophomore Classes of HHS;" +
                "Set up biweekly meetings with 40 peers to check-in, advise, and tutor",
        },
    ],
    skills: [
        "Medical Knowledge and Skills",
        "Leadership and Management",
        "Communication",
        "Interpersonal Skills",
        "Mentorship",
    ],
    projects: [],
} as const;
