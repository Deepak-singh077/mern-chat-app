import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // Check if user already exists
        const user = await User.findOne({ username });
        if (user) {
            return res.status(409).json({ error: "Username already exists" }); // Use 409 status code for conflict
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Assign profile picture based on gender
        const profilePic = gender === "male" ?
            `https://avatar.iran.liara.run/public/boy?username=${username}` :
            `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create new user
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic
        });
        await newUser.save();
        if (newUser) {
            await newUser.save(); // Save new user to DB
            generateTokenAndSetCookie(newUser._id, res); // Generate token and set cookie

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        // Check if user exists and password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Generate token and set cookie
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout =  (req, res) => {

    try {

        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "logout successfully" })

    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal server error" });

    }
};
