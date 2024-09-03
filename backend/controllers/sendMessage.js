import Conversation from "../models/conversation.model.js";
import Message from "../models/message.module.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params; // Fixed typo
        const senderId = req.user._id; // Fixed typo

        // Find or create a conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        conversation.messages.push(newMessage._id);

        //socket io 

        await Promise.all([
            conversation.save(),
            newMessage.save(),
        ]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChat } = req.params;

        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChat] },
        }).populate("messages");


        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("error in getMessages controller:", error.message);
        res.status(500).json({ error: "internal server error" })

    }
}