module.exports = {
    name: 'clown',
    descpription: "tells user to stop clowning",
    execute(message, args){
        if(args){
            message.channel.send("stop clowning " + args[0]) 
        }else{
        message.channel.send("stop clowning " + message.author.tag.slice(0, -5))
        }
    }
}