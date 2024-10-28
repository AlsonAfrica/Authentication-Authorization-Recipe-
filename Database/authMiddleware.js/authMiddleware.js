import jwt from "jsonwebtoken";
// import User from "../models/user";

const protect = async (req, res, next) => {
    let token;

    // Check if the Authorization header exists and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Extract the token from the "Bearer <token>" format
            token = req.headers.authorization.split(" ")[1];
            
            console.log("Token:", token); // Log the token for debugging

            // Verify the token using jwt.verify
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Optional: Attach the decoded token payload (e.g., user info) to the req object
            req.user = decoded; 

            next(); // Proceed to the next middleware
        } catch (error) {
            console.error("Token verification failed:", error);
            res.status(401).json({ error: "Not authorized, token failed" });
        }
    } else {
        res.status(401).json({ error: "Not authorized, no token" });
    }
};

export default protect;







