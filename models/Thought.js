const { Schema, model, Types } = require('mongoose');
var moment = require('moment');

const ReactionSchema = new Schema (
    {
        // set custom id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength:280
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
            // this is where the moment info will go
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength:280
        },
        createdAt: {
            type: Date,
            default: Date.now
            // this is where monemnt will go
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        // use the ReactionSchema to validate data for a reaction
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// to create the Thought model using ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;