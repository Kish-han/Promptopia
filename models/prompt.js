import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    prompt: {
        type: String,
        required: [true, 'Please enter a prompt'],
    },
    tag: {
        type: String,
        required: [true, 'Please enter a tag'],
    },
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;