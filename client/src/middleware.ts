import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/auth";

// Define role-based access control
const roleBasedRoutes = {
    ADMIN: ["/admin", "/profile", "/dashboard"], // Routes accessible by ADMIN
    VENDOR: ["/vendor", "/profile", "/products"], // Routes accessible by VENDOR
    CUSTOMER: ["/", "/profile", "/shop"], // Routes accessible by CUSTOMER
};

export async function middleware(request: NextRequest) {
    const currentUser = await getCurrentUser();

    // Extract the requested path
    const requestedPath = request.nextUrl.pathname;
    // If the user is not logged in, redirect to login
    if (!currentUser.id) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // // Get the user's role and allowed routes
    // const { role } = currentUser;
    // const allowedRoutes = roleBasedRoutes[role] || [];

    // // Check if the requested route is allowed for the user's role
    // if (!allowedRoutes.some((route) => requestedPath.startsWith(route))) {
    //     // Redirect to an unauthorized page or dashboard
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    // Allow the request to proceed
    // return NextResponse.next();
}

// Define paths to be checked by middleware
export const config = {
    matcher: ["/profile", "/", "/admin", "/vendor", "/dashboard", "/products", "/shop"],
};

