export interface INavItem {
    name: string;
    route: string;
}

export interface INavbar {
    navItem: INavItem[];
}

export const navbar: INavbar = {
    navItem: [
        {
            name: "Home",
            route: "home"
        },
        {
            name: "About",
            route: "about"
        },
        {
            name: "Service",
            route: "service"
        },
        {
            name: "Contact",
            route: "contact"
        }
    ]
}