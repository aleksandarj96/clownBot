module.exports = {
    name: 'clown',
    descpription: "tells user to stop clowning",
    execute(message, args){
        message.channel.send("stop clowning " + message.author.tag.slice(0, -5))
    }
}