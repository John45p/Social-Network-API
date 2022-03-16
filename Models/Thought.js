const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    username: 
      {
        type: String,
        required: true,
      },
      reactions: [reactionSchema]
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual retrieves length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})



const Thought = model('thought', thoughtSchema);

module.exports = Thought;